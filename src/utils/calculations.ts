export const ROBLOX_TAX_RATE = 0.3;
export const DEVEX_RATE = 0.0035; // $0.0035 per Robux
export const MIN_DEVEX_ROBUX = 30000;

export function calculateTax(robux: number): number {
  return Math.floor(robux * (1 - ROBLOX_TAX_RATE));
}

export function calculateUGCEarnings(price: number, sales: number): number {
  const grossEarnings = price * sales;
  return Math.floor(grossEarnings * (1 - ROBLOX_TAX_RATE));
}

export function calculateDevEx(robux: number, currencyRate: number = 1): number {
  if (robux < MIN_DEVEX_ROBUX) return 0;
  const usdAmount = robux * DEVEX_RATE;
  return parseFloat((usdAmount * currencyRate).toFixed(2));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === 'USD' ? 'USD' : 'USD',
    minimumFractionDigits: 2
  }).format(amount);
}