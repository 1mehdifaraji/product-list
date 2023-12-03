import {
  FC,
  ChangeEventHandler,
  HTMLProps,
  TextareaHTMLAttributes,
} from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
  containerClassName?: HTMLProps<HTMLDivElement>["className"];
}

const Textarea: FC<TextareaProps> = ({
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
    <textarea
      spellCheck={false}
      value={value}
      onChange={onChange}
      rows={4}
      className={`border border-gray w-full rounded-lg p-3 mt-2 text-sm placeholder:text-gray outline-none rtl resize-none ${
        className ? className : ""
      }`}
      {...rest}
    />
  </div>
);
export default Textarea;
