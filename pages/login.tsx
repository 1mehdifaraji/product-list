import { FC, useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

import {
  Button,
  Card,
  Checkbox,
  FieldError,
  Grid,
  Input,
  LoginSuccess,
} from "@/components";
import { setCookies } from "@/util/helpers";
import { useRouter } from "next/router";

const LoginPage: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const { push } = useRouter();

  const { isLoading: loginLoading, mutate: submitLogin } = useMutation(
    ({ userName, passWord, remember }: LoginFormInitialValues) =>
      axios
        .post(
          "/security/userlogin/login",
          {
            userName,
            passWord,
            // passWord: "652820",
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          return { data, remember };
        }),
    {
      onSuccess: ({
        remember,
        data: {
          data: {
            accessToken: {
              access_token,
              refresh_token,
              expire_access_token,
              expire_refresh_token,
            },
            userName,
          },
        },
      }) => {
        setCookies({
          accessToken: access_token,
          refreshToken: refresh_token,
          accessTokenExpireDate: expire_access_token,
          refreshTokenExpireDate: expire_refresh_token,
          username: userName,
          remember,
        });
        toast.success("ورود شما با موفقیت انجام شد.");
        setSuccess(true);
        setTimeout(() => {
          push("/");
          setSuccess(true);
        }, 2000);
      },
      onError: (e: any) => {
        toast.error(e.response.data.error);
      },
    }
  );

  const initialValues: LoginFormInitialValues = {
    userName: "",
    passWord: "",
    remember: 0,
  };

  const validationSchema = yup.object({
    userName: yup
      .string()
      .min(3, "نام کاربری باید بیشتر از ۳ کاراکتر باشد")
      .typeError("نام کاربری وارد نشده")
      .required("نام کاربری وارد نشده"),
    passWord: yup
      .string()
      .min(6, "رمزعبور باید ۶ کاراکتر باشد")
      .max(6, "رمزعبور باید ۶ کاراکتر باشد")
      .typeError("رمزعبور وارد نشده")
      .required("رمزعبور وارد نشده"),
  });

  const onSubmit = ({
    userName,
    passWord,
    remember,
  }: LoginFormInitialValues) => {
    submitLogin({
      userName,
      passWord,
      remember,
    });
  };

  return (
    <>
      <Head>
        <title>های وب | ورود به حساب</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Grid className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <Image alt="logo" src="/logo.webp" width={136} height={91} />
          </div>
          <Card className="mt-20 md:mt-32 w-72 md:w-[482px]">
            {success ? (
              <LoginSuccess />
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ setFieldTouched, values, setFieldValue, submitForm }) => (
                  <Form>
                    <Input
                      onChange={({ target: { value } }) =>
                        setFieldValue("userName", value)
                      }
                      value={values.userName}
                      label="نام کاربری"
                      onBlur={() => setFieldTouched("userName")}
                      placeholder="نام کاربری..."
                    />
                    <FieldError name="userName" />
                    <Input
                      containerClassName="mt-7"
                      onChange={({ target: { value } }) =>
                        setFieldValue("passWord", value)
                      }
                      value={values.passWord}
                      onBlur={() => setFieldTouched("passWord")}
                      label="کلمه عبور"
                      placeholder="کلمه عبور..."
                    />
                    <FieldError name="passWord" />
                    <div
                      className="flex justify-end items-center space-x-3 cursor-pointer select-none mt-5"
                      onClick={() =>
                        setFieldValue("remember", values.remember ? 0 : 1)
                      }
                    >
                      <div className="font-yekanbakh text-blue text-sm">
                        مرا به خاطر بسپار
                      </div>
                      <Checkbox checked={!!values.remember} />
                    </div>
                    <Button
                      className="mt-9"
                      loading={loginLoading}
                      onClick={submitForm}
                    >
                      ورود
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
          </Card>
        </Grid>
        <Grid className="h-screen bg-[url('/login-hero.webp')] bg-no-repeat bg-contain bg-center hidden md:block" />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req.headers.cookie);

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
