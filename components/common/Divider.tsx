import { FC, HTMLProps } from "react";

interface DividerProps {
  className?: HTMLProps<HTMLElement>["className"];
}

const Divider: FC<DividerProps> = ({ className }) => (
  <div
    className={`border-t-[1px] border-labelGray ${className ? className : ""}`}
  />
);

export default Divider;
