import { formatCurrency } from '../utils/format-currency';

export const CurrencyDisplay = ({ amount, currency = 'DKK' }: { amount: number, currency?: string }) => {
  const { getPart } = formatCurrency(amount, { currency });

  return (
    <div className="font-medium tabular-nums text-slate-900 dark:text-slate-50">
      <span className="text-sm mr-1 opacity-70">{getPart('currency')}</span>
      <span className="text-2xl">{getPart('integer')}</span>
      <span className="text-lg">
        {getPart('decimal')}{getPart('fraction')}
      </span>
    </div>
  );
};