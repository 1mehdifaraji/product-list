import React, { FC } from "react";

interface PriceProps {
  price: number;
}

const Price: FC<PriceProps> = ({ price }) => (
  <div className="flex justify-end items-center space-x-1 mt-11 text-xs">
    <div className="font-bold">{price.toLocaleString("fa-IR")}</div>
    <div className="text-sm text-labelGray">:قیمت</div>
  </div>
);

export default Price;
