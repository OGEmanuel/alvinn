import ConnectAccounts from '@/pages/auth/connect-accounts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/connect-accounts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ConnectAccounts />;
}
