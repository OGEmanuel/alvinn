import Instagram from '@/components/jsx-icons/instagram';
import AuthLayout, { AuthDescription, AuthHeader, AuthTitle } from '../layout';
import Plus from '@/components/jsx-icons/plus';
import Twitter from '@/components/jsx-icons/twitter';
import Youtube from '@/components/jsx-icons/youtube';
import Titktok from '@/components/jsx-icons/tiktok';
import Facebook from '@/components/jsx-icons/facebook';
import { Button } from '@/components/ui/button';

const ConnectAccounts = () => {
  return (
    <AuthLayout>
      <AuthHeader className="w-full">
        <AuthTitle>Connect accounts</AuthTitle>
        <AuthDescription>
          Connect at least two social accounts to continue.
        </AuthDescription>
      </AuthHeader>
      <div className="flex w-full flex-col gap-1 rounded-[20px] border-[0.7px] border-white/10 p-1">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Instagram />
            <p className="text-sm/custom -tracking-custom-sm font-medium text-white/80">
              Instagram
            </p>
          </div>
          <Plus />
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Twitter />
            <p className="text-sm/custom -tracking-custom-sm font-medium text-white/80">
              X
            </p>
          </div>
          <Plus />
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Youtube />
            <p className="text-sm/custom -tracking-custom-sm font-medium text-white/80">
              Youtube
            </p>
          </div>
          <Plus />
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Titktok />
            <p className="text-sm/custom -tracking-custom-sm font-medium text-white/80">
              Tiktok
            </p>
          </div>
          <Plus />
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Facebook />
            <p className="text-sm/custom -tracking-custom-sm font-medium text-white/80">
              Facebook
            </p>
          </div>
          <Plus />
        </div>
      </div>
      <Button className="w-full">Continue</Button>
    </AuthLayout>
  );
};

export default ConnectAccounts;
