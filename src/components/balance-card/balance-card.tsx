import { signal, computed } from "@preact/signals-react";
import styles from './balance-card.module.css';
import { formatCurrency } from '../../utils/format-currency';

// Hvis beløbet kommer udefra (f.eks. fra en websocket), 
// kan det defineres som et signal.
export const BalanceCard = ({ amount }: { amount: number }) => {

    // Vi skaber et computed signal baseret på amount.
    // Det genberegner kun, hvis amount ændrer sig.
    const formatted = computed(() =>
        formatCurrency(amount, { currency: 'DKK' })
    );

    return (
        <article className={styles.card}>
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