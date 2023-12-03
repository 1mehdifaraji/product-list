import { ChangeEvent, FC } from "react";
import { Form, Formik } from "formik";

import {
  Modal,
  Input,
  Textarea,
  FileInput,
  Button,
  FieldError,
} from "@/components";

interface AddProductModalProps {
  closeAddProductModal: () => void;
  addProductModal: boolean;
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  imgPrev: any;
  handleFileInput: (e: ChangeEvent<HTMLInputElement>) => void;
  fileFieldError: boolean;
  productLoading: boolean;
  showFileFieldError: () => void;
}

const AddProductModal: FC<AddProductModalProps> = ({
  closeAddProductModal,
  productLoading,
  addProductModal,
  initialValues,
  validationSchema,
  onSubmit,
  imgPrev,
  handleFileInput,
  fileFieldError,
  showFileFieldError,
}) => (
  <Modal isOpen={addProductModal} onClose={closeAddProductModal}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values, setFieldTouched, submitForm }) => (
        <>
          <div className="text-right">افزودن محصول</div>
          <Input
            label="نام محصول"
            placeholder="نام محصول..."
            onChange={({ target: { value } }) =>
              setFieldValue("producttitle", value)
            }
            value={values.producttitle}
            onBlur={() => setFieldTouched("producttitle")}
            containerClassName="mt-7"
            className=""
          />
          <FieldError name="producttitle" />
          <Input
            label="قیمت محصول"
            placeholder="قیمت محصول..."
            onChange={({ target: { value } }) =>
              setFieldValue("productprice", value)
            }
            value={values.productprice}
            onBlur={() => setFieldTouched("productprice")}
            containerClassName="mt-7"
            className=""
          />
          <FieldError name="productprice" />
          <Textarea
            containerClassName="mt-7"
            onChange={({ target: { value } }) =>
              setFieldValue("description", value)
            }
            onBlur={() => setFieldTouched("description")}
            value={values.description}
            label="توضیحات"
            placeholder="..."
          />
          <FieldError name="description" />
          <FileInput
            containerClassName="mt-7"
            label="بارگزاری عکس محصول"
            onChange={handleFileInput}
            imgPrev={imgPrev}
          />
          {fileFieldError && (
            <div className="mt-2 text-red text-right">عکس کالا وارد نشده</div>
          )}
          <div className="flex items-center mt-10">
            <Button
              loading={productLoading}
              onClick={!imgPrev ? showFileFieldError : submitForm}
              type="submit"
            >
              ثبت محصول
            </Button>
            <button className="text-cancelBtnGray py-[11px] px-10 md:px-24">
              انصراف
            </button>
          </div>
        </>
      )}
    </Formik>
  </Modal>
);

export default AddProductModal;
