import { FC } from "react";
import Image from "next/image";

import Price from "./Price";

interface ProductProps {
  title: string;
  desc: string;
  img: string;
  price: number;
}

const Product: FC<ProductProps> = ({ title, desc, price, img }) => (
  <div className="drop-shadow rounded-lg bg-white text-right">
    <div className="relative w-full h-44">
      <Image
        alt="product-thumbnail"
        src={img}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <div className="mt-2 px-4 pb-5">
      <div className="font-medium"> {title} </div>
      <div className="line-clamp-3 font-thin mt-4 text-cancelBtnGray leading-7 text-xs rtl">
        {desc}
      </div>
      <Price price={price} />
    </div>
  </div>
);

export default Product;
