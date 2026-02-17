import { createFileRoute } from '@tanstack/react-router';
import { BalanceCard } from '../components/balanceCard/balanceCard';

export const Route = createFileRoute('/dashboard')({
  //loader: async () => fetchAccountBalance(), // Din API funktion
  component: DashboardComponent,
});

function DashboardComponent() {
  const data = Route.useLoaderData();

  return (
    <div className='dashboard'>
      <BalanceCard amount={data?.balance || 2500} />
    </div>
  );
}