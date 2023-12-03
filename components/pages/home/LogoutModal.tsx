import { FC } from "react";
import { Button, Modal } from "@/components";

interface LogoutModalProps {
  closeLogoutModal: () => void;
  logoutModal: boolean;
  logoutAccount: () => void;
}

const LogoutModal: FC<LogoutModalProps> = ({
  closeLogoutModal,
  logoutModal,
  logoutAccount,
}) => (
  <Modal size="sm" isOpen={logoutModal} onClose={closeLogoutModal}>
    <div className="rtl text-center py-4">
      از میخواهید از حساب کاربری خود خارج شوید ؟
    </div>

    <div className="flex items-center justify-between mt-4">
      <Button onClick={logoutAccount}>خروج</Button>
      <button
        onClick={closeLogoutModal}
        className="text-cancelBtnGray py-[11px] px-10 md:px-44"
      >
        انصراف
      </button>
    </div>
  </Modal>
);

export default LogoutModal;
