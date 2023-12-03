import { FC } from "react";

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ checked }) => (
  <div
    className={`transition-all border-[1.4px] ${
      checked ? "border-blue" : "border-gray"
    } rounded-sm w-5 h-5 flex justify-center items-center`}
  >
    <svg
      className="w-3 h-3"
      width="26"
      height="19"
      viewBox="0 0 26 19"
      fill="none"
    >
      <path
        d="M1.70508 9.62689L8.70004 16.5917C9.09021 16.9802 9.72102 16.9802 10.1112 16.5917L24.2933 2.4707"
        stroke={checked ? "#00ACED" : "#9A9A9A"}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Checkbox;
