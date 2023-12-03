import { FC, ChangeEventHandler, InputHTMLAttributes, HTMLProps } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  containerClassName?: HTMLProps<HTMLDivElement>["className"];
}

const Input: FC<InputProps> = ({
  label,
  className,
  containerClassName,
  onChange,
  value,
  ...rest
}) => (
  <div className={containerClassName ? containerClassName : ""}>
    <div className="flex justify-end text-labelGray select-none">
      <label>{label}</label>
    </div>
    <input
      spellCheck={false}
      value={value}
      onChange={onChange}
      className={`bg-transparent border border-gray w-full rounded-lg p-3 mt-2 text-sm placeholder:text-gray outline-none rtl ${
        className ? className : ""
      }`}
      type="text"
      {...rest}
    />
  </div>
);

export default Input;
