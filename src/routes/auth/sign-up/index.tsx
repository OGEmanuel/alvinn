import SignUp from '@/pages/auth/sign-up';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

export const Route = createFileRoute('/auth/sign-up/')({
  component: RouteComponent,
  validateSearch: z.object({
    continueEmail: z.boolean().optional(),
  }),
});

function RouteComponent() {
  return <SignUp />;
}
