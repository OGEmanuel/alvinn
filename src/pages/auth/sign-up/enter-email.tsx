import z from 'zod';
import AuthLayout, {
  AuthDescription,
  AuthFooter,
  AuthHeader,
  AuthTitle,
} from '../layout';
import { useForm } from '@tanstack/react-form';
import { FieldContent, FieldSet } from '@/components/ui/field';
import InputField from '@/components/ui/custom/input';
import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
import { Link, useNavigate } from '@tanstack/react-router';

const formSchema = z.object({
  email: z.email({
    error: 'Please enter a valid email address.',
  }),
});

const EnterEmail = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      navigate({ to: '/auth/verify-email' });
      //   mutate(value, {
      //     onSuccess: () => {
      //       sessionStorage.setItem('user', JSON.stringify(value));
      //     },
      //   });
    },
  });

  return (
    <AuthLayout>
      <AuthHeader>
        <AuthTitle>Okay!, we’re going to sprint through this</AuthTitle>
        <AuthDescription>
          In a few steps, you’ll have a personalized profile built from your
          socials accounts.
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
        <FieldContent>
          <FieldSet className="flex-row items-center gap-2">
            <form.Field
              name="email"
              children={field => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                // if (isInvalid) {
                //   toast.error('Invalid email address', {
                //     className: 'bg-[#FF535D]!',
                //   });
                // }
                return (
                  <InputField
                    field={field}
                    placeholder="Enter email"
                    type="email"
                  />
                );
              }}
            />
            <Button>Continue</Button>
          </FieldSet>
        </FieldContent>
        <AuthFooter>
          <span>Already have an account?</span>{' '}
          <Link to="/auth/sign-up">Login up</Link>
        </AuthFooter>
      </form>
    </AuthLayout>
  );
};

export default EnterEmail;
