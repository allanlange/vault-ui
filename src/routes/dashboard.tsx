import { createFileRoute } from '@tanstack/react-router';
import { CurrencyDisplay } from '../components/currency-display';

export const Route = createFileRoute('/dashboard')({
  //loader: async () => fetchAccountBalance(), // Din API funktion
  component: DashboardComponent,
});

function DashboardComponent() {
  const data = Route.useLoaderData();

  return (
    <div className="p-6">
      <h1 className="text-sm text-slate-500 uppercase tracking-wider">Total Balance</h1>
      {/* <CurrencyDisplay amount={data.balance} /> */}
    </div>
  );
}