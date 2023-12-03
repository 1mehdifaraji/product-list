import Image from "next/image";
import {
  FC,
  ChangeEventHandler,
  InputHTMLAttributes,
  HTMLProps,
  useRef,
} from "react";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  containerClassName?: HTMLProps<HTMLDivElement>["className"];
  imgPrev: any;
}

const FileInput: FC<FileInputProps> = ({
  label,
  className,
  containerClassName,
  onChange,
  value,
  imgPrev,
}) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const chooseImg = (): void => inputRef?.current?.click();

  return (
    <div className={containerClassName ? containerClassName : ""}>
      <div className="flex justify-end text-labelGray select-none">
        <label>{label}</label>
      </div>
      <input
        ref={inputRef}
        spellCheck={false}
        value={value}
        onChange={onChange}
        type="file"
        accept="image/jpeg , image/png"
        className="hidden"
      />
      <div className="border border-gray w-full rounded-lg mt-2 text-gray text-sm flex items-center justify-between">
        <button
          className="bg-lighterGray rounded-lg text-cancelBtnGray px-6 py-3 w-40"
          onClick={chooseImg}
        >
          انتخاب فایل
        </button>

        {imgPrev ? (
          <Image
            className="mx-3"
            src={imgPrev}
            width={40}
            height={40}
            alt="product-img-file"
          />
        ) : (
          <div className="p-3 select-none">jpeg،png</div>
        )}
      </div>
    </div>
  );
};
export default FileInput;
