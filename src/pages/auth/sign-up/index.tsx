import { Button } from '@/components/ui/button';
import AuthLayout, {
  AuthDescription,
  AuthFooter,
  AuthHeader,
  AuthTitle,
} from '../layout';
import GoogleIcon from '@/components/jsx-icons/google';
import { Link } from '@tanstack/react-router';

const SignUp = () => {
  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>Okay!, we’re going to sprint through this</AuthTitle>
        <AuthDescription>
          In a few steps, you’ll have a personalized profile built from your
          socials accounts.
        </AuthDescription>
      </AuthHeader>
      <div className="flex w-full flex-col gap-12">
        <div className="flex w-max items-center gap-2 self-start">
          <Button asChild>
            <Link to="/auth/sign-up/enter-email">Continue with email</Link>
          </Button>
          <Button
            variant={'secondary'}
            className="gap-1 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-5"
          >
            Continue with
            <GoogleIcon />
          </Button>
        </div>
        <AuthFooter>
          <span>Oh, do you already have an account?</span>
          {''}
          <Link to="/auth/sign-up">Login up</Link>
        </AuthFooter>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
