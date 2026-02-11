import Logo from '@/components/jsx-icons/logo';
import { cn } from '@/lib/utils';

const AuthLayout = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <section className="flex justify-center">
      <div
        className={cn(
          'flex w-full max-w-110 flex-col items-center gap-6 pt-14 max-sm:px-6 sm:pt-45',
          className,
        )}
      >
        <Logo className="self-start" />
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;

export const AuthHeader = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};

export const AuthTitle = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <h1
      className={cn(
        '-tracking-custom text-[2rem]/10 font-semibold text-white',
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const AuthDescription = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <p className={cn('text-sm/custom text-white/70', className)}>{children}</p>
  );
};

export const AuthFooter = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;

  return (
    <footer
      className={cn(
        'text-sm/custom -tracking-custom-sm text-white/70 [&>a]:font-medium [&>a]:text-white',
        className,
      )}
    >
      {children}
    </footer>
  );
};
