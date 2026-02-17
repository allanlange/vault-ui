import { signal, computed } from "@preact/signals-react";
import styles from './balanceCard.module.css';
import { formatCurrency } from '../../utils/format-currency';
import { DynamicIcon } from 'lucide-react/dynamic';

export const BalanceCard = ({ amount }: { amount: number }) => {

    // We create a computed signal based on amount.
    // It only recalculates if amount changes.
    const formatted = computed(() =>
        formatCurrency(amount, { currency: 'DKK' })
    );

    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconContainer}>
                    <DynamicIcon name="wallet" />
                </div>
                <div className={styles.label}>
                    Balance
                </div>
            </div>
            <div className={styles.amountContainer}>
                <span className={styles.currency}>
                    {formatted.value.currency}
                </span>
                <span className={styles.integer}>
                    {formatted.value.sign}{formatted.value.integer}
                </span>
                <span className={styles.decimal}>
                    {formatted.value.decimal}
                    {formatted.value.fraction}
                </span>
            </div>
        </article>
    );
};