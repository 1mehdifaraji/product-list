import { FC } from "react";

import { LoadingIcon, SuccessIcon } from "@/components";

const LoginSuccess: FC = () => (
  <div className="flex flex-col items-center justify-center">
    <SuccessIcon />
    <div className="text-green font-medium rtl my-12">
      ورود شما با موفقیت انجام شد.
    </div>
    <div className="animate-spin">
      <LoadingIcon />
    </div>
  </div>
);

export default LoginSuccess;
