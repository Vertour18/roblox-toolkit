import { Currency } from '../types';

export const CURRENCIES: Currency[] = [
  // Americas
  { code: 'USD', name: 'US Dollar', rate: 1 },
  { code: 'CAD', name: 'Canadian Dollar', rate: 1.25 },
  { code: 'MXN', name: 'Mexican Peso', rate: 18.5 },
  { code: 'BRL', name: 'Brazilian Real', rate: 5.2 },
  { code: 'ARS', name: 'Argentine Peso', rate: 350 },
  { code: 'CLP', name: 'Chilean Peso', rate: 800 },
  { code: 'COP', name: 'Colombian Peso', rate: 4000 },
  { code: 'PEN', name: 'Peruvian Sol', rate: 3.8 },
  { code: 'UYU', name: 'Uruguayan Peso', rate: 39 },
  { code: 'BOB', name: 'Bolivian Boliviano', rate: 6.9 },
  
  // Europe
  { code: 'EUR', name: 'Euro', rate: 0.85 },
  { code: 'GBP', name: 'British Pound', rate: 0.73 },
  { code: 'CHF', name: 'Swiss Franc', rate: 0.88 },
  { code: 'NOK', name: 'Norwegian Krone', rate: 8.5 },
  { code: 'SEK', name: 'Swedish Krona', rate: 9.2 },
  { code: 'DKK', name: 'Danish Krone', rate: 6.3 },
  { code: 'PLN', name: 'Polish Zloty', rate: 4.1 },
  { code: 'CZK', name: 'Czech Koruna', rate: 22 },
  { code: 'HUF', name: 'Hungarian Forint', rate: 350 },
  { code: 'RON', name: 'Romanian Leu', rate: 4.2 },
  
  // Asia-Pacific
  { code: 'JPY', name: 'Japanese Yen', rate: 110 },
  { code: 'KRW', name: 'South Korean Won', rate: 1200 },
  { code: 'CNY', name: 'Chinese Yuan', rate: 6.4 },
  { code: 'HKD', name: 'Hong Kong Dollar', rate: 7.8 },
  { code: 'SGD', name: 'Singapore Dollar', rate: 1.35 },
  { code: 'AUD', name: 'Australian Dollar', rate: 1.35 },
  { code: 'NZD', name: 'New Zealand Dollar', rate: 1.45 },
  { code: 'INR', name: 'Indian Rupee', rate: 74 },
  { code: 'PHP', name: 'Philippine Peso', rate: 50 },
  { code: 'THB', name: 'Thai Baht', rate: 32 },
  { code: 'MYR', name: 'Malaysian Ringgit', rate: 4.1 },
  { code: 'IDR', name: 'Indonesian Rupiah', rate: 14000 },
  { code: 'VND', name: 'Vietnamese Dong', rate: 23000 },
  
  // Middle East & Africa
  { code: 'AED', name: 'UAE Dirham', rate: 3.67 },
  { code: 'SAR', name: 'Saudi Riyal', rate: 3.75 },
  { code: 'QAR', name: 'Qatari Riyal', rate: 3.64 },
  { code: 'KWD', name: 'Kuwaiti Dinar', rate: 0.30 },
  { code: 'BHD', name: 'Bahraini Dinar', rate: 0.38 },
  { code: 'OMR', name: 'Omani Rial', rate: 0.38 },
  { code: 'ILS', name: 'Israeli Shekel', rate: 3.2 },
  { code: 'TRY', name: 'Turkish Lira', rate: 8.5 },
  { code: 'EGP', name: 'Egyptian Pound', rate: 15.7 },
  { code: 'ZAR', name: 'South African Rand', rate: 14.5 },
  { code: 'NGN', name: 'Nigerian Naira', rate: 410 },
  { code: 'KES', name: 'Kenyan Shilling', rate: 108 },
  
  // Eastern Europe & Russia
  { code: 'RUB', name: 'Russian Ruble', rate: 75 },
  { code: 'UAH', name: 'Ukrainian Hryvnia', rate: 27 },
  { code: 'BYN', name: 'Belarusian Ruble', rate: 2.5 },
  { code: 'KZT', name: 'Kazakhstani Tenge', rate: 425 },
  
  // Other regions
  { code: 'TWD', name: 'Taiwan Dollar', rate: 28 },
  { code: 'HRK', name: 'Croatian Kuna', rate: 6.4 },
  { code: 'BGN', name: 'Bulgarian Lev', rate: 1.66 },
  { code: 'RSD', name: 'Serbian Dinar', rate: 100 },
];