import { FC, ReactElement, ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "sm";
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size,
}): ReactElement<any> | null => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.removeProperty("overflow");
    }
  }, [isOpen]);
  if (!isOpen) return null;
  if (typeof window !== "undefined") {
    return ReactDOM.createPortal(
      <>
        <div
          onClick={onClose}
          className="z-20 fixed inset-0 animate-fadeIn cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#00000059]" />
        </div>
        <div
          className={`bg-white rounded-2xl py-7 px-10 ${
            size === "sm" ? "md:px-10 md:py-10" : "md:px-56 md:py-[72px]"
          } fixed overflow-auto animate-fadeInQuick z-30 top-1/2 w-11/12 md:w-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          {children}
          <div
            onClick={onClose}
            className="p-1 cursor-pointer absolute top-5 left-5"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15"
                stroke="#454545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15L5 5"
                stroke="#454545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;
