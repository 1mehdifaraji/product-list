import { ButtonHTMLAttributes, FC, HTMLProps, ReactNode } from "react";

import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: HTMLProps<HTMLElement>["className"];
  children: ReactNode;
  loading?: boolean;
  as?: string;
  href?: string;
  icon?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  as,
  href = "",
  loading,
  disabled,
  icon,
  ...props
}) => (
  <button
    className={`relative rounded-lg w-full text-center py-[11px] px-2 md:px-16 ${
      loading || disabled
        ? "bg-gray"
        : "bg-green active:bg-darkGreen hover:shadow-lg"
    } active:shadow-none transition-all text-sm items-center font-medium shadow-black/5 text-white ${
      className ? className : ""
    }`}
    disabled={loading ? loading : disabled}
    {...props}
  >
    <div
      className={
        loading ? "invisible" : `visible ${icon ? "flex items-center" : ""}`
      }
    >
      {children}

      {icon ? <span className="pl-2">{icon}</span> : null}
    </div>
    {loading ? (
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size="sm" />
      </span>
    ) : null}
  </button>
);

export default Button;
