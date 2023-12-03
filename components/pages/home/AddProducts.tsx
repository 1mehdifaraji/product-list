import { FC } from "react";
import Image from "next/image";

const AddProducts: FC = () => (
  <div className="h-[80vh] flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <Image
        alt="add-product"
        src="/add-product.webp"
        width={297}
        height={297}
      />
      <div className="rtl font-medium text-addProductGray">
        محصول خود را وارد نمایید.
      </div>
    </div>
  </div>
);

export default AddProducts;
