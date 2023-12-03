import { FC } from "react";

import { AddIcon, LogoutIcon, Button, Divider } from "@/components";

interface HeaderProps {
  openLogoutModal: () => void;
  openAddProductModal: () => void;
  username: string;
}

const Header: FC<HeaderProps> = ({
  openLogoutModal,
  openAddProductModal,
  username,
}) => (
  <>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div
          onClick={openLogoutModal}
          className="flex items-center text-red space-x-2 cursor-pointer"
        >
          <div>خروج</div>
          <LogoutIcon />
        </div>
        <div>{username}</div>
        <Button onClick={openAddProductModal} icon={<AddIcon />}>
          افزودن محصول
        </Button>
      </div>
      <div>لیست محصولات</div>
    </div>
    <Divider className="my-5" />
  </>
);

export default Header;
