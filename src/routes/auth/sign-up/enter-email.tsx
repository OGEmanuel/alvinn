import EnterEmail from '@/pages/auth/sign-up/enter-email';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/sign-up/enter-email')({
  component: RouteComponent,
});

function RouteComponent() {
  return <EnterEmail />;
}
