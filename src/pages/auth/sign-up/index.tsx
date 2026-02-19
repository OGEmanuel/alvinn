import { Button } from '@/components/ui/button';
import AuthLayout, {
  AuthDescription,
  AuthFooter,
  AuthHeader,
  AuthTitle,
} from '../layout';
import GoogleIcon from '@/components/jsx-icons/google';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import { Activity } from 'react';
import { cn } from '@/lib/utils';
import EnterEmail from './enter-email';

const SignUp = () => {
  const { continueEmail } = useSearch({
    from: '/auth/sign-up/',
  });

  const navigate = useNavigate({
    from: '/auth/sign-up/',
  });

  const handleContinue = () => {
    navigate({
      search: {
        continueEmail: true,
      },
    });
  };

  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>Okay!, we’re going to sprint through this</AuthTitle>
        <AuthDescription>
          In a few steps, you’ll have a personalized profile built from your
          socials accounts.
        </AuthDescription>
      </AuthHeader>
      <div className="flex w-full flex-col gap-12 overflow-hidden border border-red-500">
        <div
          className={cn(
            'relative flex w-full items-center gap-2 self-start border border-green-500',
          )}
        >
          <div className="flex flex-1 items-center gap-2 border border-yellow-500">
            <div
              className={cn(
                'flex items-center gap-2 border border-blue-500',
                continueEmail && 'hidden',
              )}
            >
              <Button onClick={handleContinue}>Continue with email</Button>
              <Button
                variant={'secondary'}
                className={cn(
                  "gap-1 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-5",
                )}
              >
                Continue with
                <GoogleIcon />
              </Button>
            </div>
            <Activity mode={continueEmail ? 'visible' : 'hidden'}>
              <EnterEmail
                className={cn(
                  'transition-opacity',
                  continueEmail
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0',
                )}
              />
            </Activity>
          </div>
          <Activity mode={continueEmail ? 'visible' : 'hidden'}>
            <Button
              form="email-form"
              type="submit"
              className={cn(
                'opacity-0',
                continueEmail ? 'animate-in' : 'pointer-events-none -z-10',
              )}
            >
              Continue
            </Button>
          </Activity>
        </div>
        <AuthFooter>
          <span>Oh, do you already have an account?</span>{' '}
          <Link to="/auth/sign-up">Login up</Link>
        </AuthFooter>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
