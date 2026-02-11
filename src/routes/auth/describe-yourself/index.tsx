import DescribeYourself from '@/pages/auth/describe-yourself';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/describe-yourself/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <DescribeYourself />;
}
