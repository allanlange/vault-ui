type CurrencyDisplay = 'code' | 'symbol' | 'narrowSymbol';

interface FormatOptions {
  currency?: string;
  locale?: string;
  display?: CurrencyDisplay;
}

/**
 * Vault-UI Currency Formatter
 * Returnerer et objekt der tillader granulær styling af valuta-dele.
 */
export const formatCurrency = (value: number, options: FormatOptions = {}) => {
  const { currency = 'DKK', locale = 'da-DK', display = 'symbol' } = options;

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: display,
  });

  // Vi bruger formatToParts for at give Design Engineer'en fuld kontrol over UI
  const parts = formatter.formatToParts(value);

  return {
    full: formatter.format(value),
    parts: parts,
    // Hjælpe-metode til at finde specifikke dele (fx til mindre skrift på øre/cents)
    getPart: (type: Intl.NumberFormatPartTypes) =>
      parts.find(p => p.type === type)?.value || ''
  };
};