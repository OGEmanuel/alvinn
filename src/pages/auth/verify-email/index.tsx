import { useField, useForm } from '@tanstack/react-form';
import AuthLayout, {
  AuthDescription,
  AuthFooter,
  AuthHeader,
  AuthTitle,
} from '../layout';
import z from 'zod';
import InputOTPField from '@/components/ui/custom/input-otp';
import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

const formSchema = z.object({
  code: z.string().min(6, {
    error: 'Code must be 6 digits.',
  }),
});

const VerifyEmail = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      code: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      navigate({ to: '/auth/describe-yourself' });

      //   mutate({
      //     signupVerificationHash: svh,
      //     otp: value.code,
      //   });
    },
  });

  const code = useField({
    name: 'code',
    form,
  });

  useEffect(() => {
    const shouldSubmit = code.state.value.length === 6;

    if (shouldSubmit) {
      form.handleSubmit();
    }
  }, [code]);

  return (
    <AuthLayout>
      <AuthHeader className="w-full">
        <AuthTitle>We sent you a code</AuthTitle>
        <AuthDescription>
          Please enter the code sent to your email{' '}
          <span className="text-white">bojnuga@gmail.com</span>
        </AuthDescription>
      </AuthHeader>
      <form
        id={`email-form`}
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex w-full flex-col gap-12"
      >
        <form.Field
          name="code"
          children={field => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <InputOTPField
                valid={code.state.value.length === 6}
                field={field}
                isInvalid={isInvalid}
              />
            );
          }}
        />
      </form>
      <AuthFooter className="self-start">
        Didn’t get the email? Chcek spam or{' '}
        <button className="cursor-pointer text-white underline underline-offset-3">
          send a new code
        </button>
      </AuthFooter>
    </AuthLayout>
  );
};

export default VerifyEmail;
