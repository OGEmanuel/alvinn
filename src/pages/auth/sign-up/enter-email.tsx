import z from 'zod';
import { useForm } from '@tanstack/react-form';
import { FieldContent, FieldSet } from '@/components/ui/field';
import InputField from '@/components/ui/custom/input';
// import { toast } from 'sonner';
import { useNavigate } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.email({
    error: 'Please enter a valid email address.',
  }),
});

const EnterEmail = (props: { className?: string }) => {
  const { className } = props;

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
    <form
      id={`email-form`}
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className={cn('flex w-full flex-col gap-12', className)}
    >
      <FieldContent>
        <FieldSet className="flex-row items-center gap-2">
          <form.Field
            name="email"
            children={field => {
              // const isInvalid =
              //   field.state.meta.isTouched && !field.state.meta.isValid;

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
        </FieldSet>
      </FieldContent>
    </form>
  );
};

export default EnterEmail;
