import SquigglyLine from '@/components/jsx-icons/squiggly-line';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import AuthLayout, { AuthTitle } from './layout';

const AuthIntro = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <AuthTitle>Hi, Creator!</AuthTitle>
        <SquigglyLine />
        <p className="text-sm/custom -tracking-custom-sm text-white/80">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. <br /> <br /> Maecenas eget condimentum velit, sit
          amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Praesent auctor purus
          luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
          ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
          bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
          Aliquam in elementum tellus.
        </p>
        <Button className="w-max" asChild>
          <Link
            viewTransition={{
              types: ['slide-left'],
            }}
            to="/auth/sign-up"
          >
            Continue
          </Link>
        </Button>
      </div>
    </AuthLayout>
  );
};

export default AuthIntro;
