import { FC, HTMLProps, ReactNode } from "react";

interface GridProps {
  children?: ReactNode;
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Grid: FC<GridProps> = ({ children, className }) => (
  <div className={`py-6 px-32 ${className ? className : ""}`}>{children}</div>
);

export default Grid;
