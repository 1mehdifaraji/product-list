import { FC, HTMLProps } from "react";
import { ErrorMessage } from "formik";

interface FieldErrorProps {
  className?: HTMLProps<HTMLDivElement>["className"];
  name: string;
}

const FieldError: FC<FieldErrorProps> = ({ name, className }) => (
  <div className={`mt-2 text-red text-right ${className ? className : ""}`}>
    <ErrorMessage name={name} />
  </div>
);

export default FieldError;
