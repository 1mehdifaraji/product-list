import { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import cookie from "cookie";
import Cookies from "universal-cookie";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";

import {
  AddProductModal,
  AddProducts,
  Container,
  Divider,
  ErrorMessage,
  Header,
  LoadingIcon,
  LogoutModal,
  Product,
} from "@/components";
import { removeCookies } from "@/util/helpers";

interface ProductsPageProps {
  username: string;
  accessToken: string;
}

const ProductsPage: FC<ProductsPageProps> = ({ username, accessToken }) => {
  const { push } = useRouter();

  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const [addProductModal, setAddProductModal] = useState<boolean>(false);

  const [fileFieldError, setFileFieldError] = useState<boolean>(false);

  const [file, setFile] = useState<null | any>(null);
  const [imgPrev, setImgPrev] = useState<null | string>(null);

  const {
    data: products,
    isLoading: loading,
    isError,
    refetch,
  } = useQuery(["products"], () =>
    axios
      .get(`/general/product/productList?count=50&skip=0&orderBy=title`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(
        ({
          data: {
            data: { list },
          },
        }) => list
      )
  );

  const { isLoading: productLoading, mutate: submitProduct } = useMutation(
    ({
      description,
      productprice,
      producttitle,
    }: AddProductFormInitialValues) => {
      const formData = new FormData();

      formData.append("producttitle", producttitle);
      formData.append("productprice", productprice);
      formData.append("description", description);
      formData.append("file", file);

      return axios
        .post("/general/product/addproduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(({ data }) => data);
    },
    {
      onSuccess: () => {
        toast.success("ایجاد کالا با موفقیت انجام شد.");
        setAddProductModal(false);
        refetch();
      },
      onError: (e: any) => {
        toast.error(e.response.data.error);
      },
    }
  );

  const initialValues: AddProductFormInitialValues = {
    producttitle: "",
    productprice: "",
    description: "",
  };

  const validationSchema = yup.object({
    producttitle: yup
      .string()
      .min(3, "نام کالا باید بیشتر از ۳ کاراکتر باشد")
      .typeError("نام کالا وارد نشده")
      .required("نام کالا وارد نشده"),
    productprice: yup
      .string()
      .min(3, "قیمت کالا باید بیشتر از ۳ کاراکتر باشد")
      .typeError("قیمت کالا وارد نشده")
      .required("قیمت کالا وارد نشده"),
    description: yup
      .string()
      .min(3, "توضیحات کالا باید بیشتر از ۳ کاراکتر باشد")
      .typeError("توضیحات کالا وارد نشده")
      .required("توضیحات کالا وارد نشده"),
  });

  const onSubmit = (values: AddProductFormInitialValues) => {
    setFileFieldError(false);
    submitProduct(values);
  };

  const showFileFieldError = (): void => setFileFieldError(true);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    if (!files || (files[0] && files[0]?.type?.substring(0, 5) !== "image"))
      return;
    if (files[0]) setFile(files[0]);
    else setFile(null);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgPrev(reader.result as string);
      reader.readAsDataURL(file);
      setFileFieldError(false);
    } else {
      setImgPrev(null);
    }
  }, [file]);

  const closeLogoutModal = (): void => setLogoutModal(false);

  const openLogoutModal = (): void => setLogoutModal(true);

  const closeAddProductModal = (): void => setAddProductModal(false);

  const openAddProductModal = (): void => setAddProductModal(true);

  const logoutAccount = (): void => {
    removeCookies();
    push("/login");
  };

  return (
    <>
      <Head>
        <title>های وب | محصولات</title>
      </Head>

      <LogoutModal
        closeLogoutModal={closeLogoutModal}
        logoutAccount={logoutAccount}
        logoutModal={logoutModal}
      />

      <AddProductModal
        productLoading={productLoading}
        showFileFieldError={showFileFieldError}
        fileFieldError={fileFieldError}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        addProductModal={addProductModal}
        closeAddProductModal={closeAddProductModal}
        handleFileInput={handleFileInput}
        imgPrev={imgPrev}
      />

      <Container>
        <Header
          openLogoutModal={openLogoutModal}
          openAddProductModal={openAddProductModal}
          username={username}
        />
        {loading && (
          <div className="flex justify-center items-center animate-spin h-screen">
            <LoadingIcon />
          </div>
        )}
        {!loading && products?.length > 0 && !isError && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
            {products?.map(
              ({ id, title, price, description, imageUrl }: Product) => (
                <Product
                  key={id}
                  desc={description}
                  img={imageUrl}
                  price={price}
                  title={title}
                />
              )
            )}
          </div>
        )}
        {!loading && !products?.length && !isError && <AddProducts />}
        {!loading && isError && <ErrorMessage />}
        <Divider className="my-5" />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req.headers.cookie);
  const https = require("https");
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const username = cookies.get("username");
  const accessToken = cookies.get("accessToken");
  const accessTokenExpireDate = cookies.get("accessTokenExpireDate");
  const refreshToken = cookies.get("refreshToken");
  const refreshTokenExpireDate = cookies.get("refreshTokenExpireDate");

  const currentDate = new Date();
  const accessTokenExpirationDate = new Date(accessTokenExpireDate);
  const refreshTokenExpirationDate = new Date(refreshTokenExpireDate);

  if (!refreshToken || currentDate > refreshTokenExpirationDate)
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };

  let newTokenProperties: any;
  if (currentDate > accessTokenExpirationDate) {
    axios
      .post(
        "/security/userlogin/refreshtoken",
        {
          userName: username,
          refreshToken,
        },
        {
          httpsAgent,
        }
      )
      .then(
        ({
          data: {
            data: {
              accessToken: {
                access_token,
                refresh_token,
                expire_access_token,
                expire_refresh_token,
              },
            },
          },
        }) => {
          newTokenProperties = {
            access_token,
            refresh_token,
            expire_access_token,
            expire_refresh_token,
          };
        }
      );
  }

  if (newTokenProperties) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("accessToken", newTokenProperties?.access_token)
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("refreshToken", newTokenProperties?.refresh_token)
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(
        "accessTokenExpireDate",
        newTokenProperties?.expire_refresh_token
      )
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(
        "accessTokenExpireDate",
        newTokenProperties?.expire_access_token
      )
    );
  }

  return {
    props: {
      username,
      accessToken: newTokenProperties
        ? newTokenProperties?.access_token
        : accessToken,
    },
  };
};

export default ProductsPage;
