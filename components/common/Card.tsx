import { FC, HTMLProps, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Card: FC<CardProps> = ({ children, className }) => (
  <div
    className={`border border-gray rounded-2xl py-14 px-12 ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);

export default Card;
