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

  const parts = formatter.formatToParts(value);

  return {
    full: formatter.format(value),
    parts: parts,
    integer: parts
      .filter(p => p.type === 'integer' || p.type === 'group')
      .map(p => p.value)
      .join(''),
    decimal: parts.find(p => p.type === 'decimal')?.value || '',
    fraction: parts.find(p => p.type === 'fraction')?.value || '',
    currency: parts.find(p => p.type === 'currency')?.value || '',
    sign: parts.find(p => p.type === 'minusSign' || p.type === 'plusSign')?.value || '',
    getPart: (type: Intl.NumberFormatPartTypes) =>
      parts.find(p => p.type === type)?.value || ''
  };
};