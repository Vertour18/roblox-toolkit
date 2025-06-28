export interface Config {
  theme: 'dark' | 'light';
  saveCalculations: boolean;
}

export interface TaxCalculation {
  id: string;
  type: 'tax' | 'ugc' | 'devex';
  input: number;
  result: number;
  timestamp: number;
}

export interface UGCData {
  price: number;
  sales: number;
  timeframe: 'hour' | 'day' | 'month';
}

export interface Currency {
  code: string;
  name: string;
  rate: number; // USD to currency rate
}