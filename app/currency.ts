const currencies = [
    { name: 'XAF', symbol: 'FCFA', rate: 1, flag: '🇨🇲' },
    { name: 'XOF', symbol: 'FCFA', rate: 1, flag: '🇸🇳' },

    { name: 'NGN', symbol: '₦', rate: 0.92, flag: '🇳🇬' },
    { name: 'GHS', symbol: 'GH₵', rate: 0.014, flag: '🇬🇭' },
    { name: 'ZAR', symbol: 'R', rate: 0.03, flag: '🇿🇦' },
    { name: 'EGP', symbol: '£', rate: 0.05, flag: '🇪🇬' },
    { name: 'KES', symbol: 'KSh', rate: 0.17, flag: '🇰🇪' },
    { name: 'MAD', symbol: 'د.م', rate: 0.018, flag: '🇲🇦' },
    { name: 'TND', symbol: 'د.ت', rate: 0.0048, flag: '🇹🇳' },
    { name: 'DZD', symbol: 'دج', rate: 0.22, flag: '🇩🇿' },
    { name: 'ETB', symbol: 'Br', rate: 0.09, flag: '🇪🇹' },
    { name: 'TZS', symbol: 'Sh', rate: 4.1, flag: '🇹🇿' },
    { name: 'UGX', symbol: 'USh', rate: 6.1, flag: '🇺🇬' },

    { name: 'USD', symbol: '$', rate: 0.0016, flag: '🇺🇸' },
    { name: 'CAD', symbol: '$', rate: 0.0022, flag: '🇨🇦' },
    { name: 'MXN', symbol: '$', rate: 0.027, flag: '🇲🇽' },
    { name: 'BRL', symbol: 'R$', rate: 0.008, flag: '🇧🇷' },
    { name: 'ARS', symbol: '$', rate: 0.56, flag: '🇦🇷' },
    { name: 'CLP', symbol: '$', rate: 1.5, flag: '🇨🇱' },
    { name: 'COP', symbol: '$', rate: 6.3, flag: '🇨🇴' },

    { name: 'EUR', symbol: '€', rate: 0.0015, flag: '🇪🇺' },
    { name: 'GBP', symbol: '£', rate: 0.0013, flag: '🇬🇧' },
    { name: 'CHF', symbol: 'CHF', rate: 0.0015, flag: '🇨🇭' },
    { name: 'SEK', symbol: 'kr', rate: 0.017, flag: '🇸🇪' },
    { name: 'NOK', symbol: 'kr', rate: 0.017, flag: '🇳🇴' },
    { name: 'DKK', symbol: 'kr', rate: 0.011, flag: '🇩🇰' },
    { name: 'PLN', symbol: 'zł', rate: 0.0066, flag: '🇵🇱' },
    { name: 'CZK', symbol: 'Kč', rate: 0.038, flag: '🇨🇿' },
    { name: 'HUF', symbol: 'Ft', rate: 0.56, flag: '🇭🇺' },
    { name: 'RON', symbol: 'lei', rate: 0.0074, flag: '🇷🇴' },

    { name: 'AED', symbol: 'د.إ', rate: 0.0059, flag: '🇦🇪' },
    { name: 'SAR', symbol: '﷼', rate: 0.006, flag: '🇸🇦' },
    { name: 'QAR', symbol: '﷼', rate: 0.0058, flag: '🇶🇦' },
    { name: 'ILS', symbol: '₪', rate: 0.0059, flag: '🇮🇱' },
    { name: 'TRY', symbol: '₺', rate: 0.05, flag: '🇹🇷' },

    { name: 'CNY', symbol: '¥', rate: 0.011, flag: '🇨🇳' },
    { name: 'JPY', symbol: '¥', rate: 0.24, flag: '🇯🇵' },
    { name: 'KRW', symbol: '₩', rate: 2.1, flag: '🇰🇷' },
    { name: 'INR', symbol: '₹', rate: 0.13, flag: '🇮🇳' },
    { name: 'IDR', symbol: 'Rp', rate: 25, flag: '🇮🇩' },
    { name: 'MYR', symbol: 'RM', rate: 0.0075, flag: '🇲🇾' },
    { name: 'THB', symbol: '฿', rate: 0.056, flag: '🇹🇭' },
    { name: 'VND', symbol: '₫', rate: 38, flag: '🇻🇳' },
    { name: 'PHP', symbol: '₱', rate: 0.088, flag: '🇵🇭' },
    { name: 'SGD', symbol: '$', rate: 0.0022, flag: '🇸🇬' },
    { name: 'HKD', symbol: '$', rate: 0.012, flag: '🇭🇰' },

    { name: 'AUD', symbol: '$', rate: 0.0024, flag: '🇦🇺' },
    { name: 'NZD', symbol: '$', rate: 0.0026, flag: '🇳🇿' },

    { name: 'RUB', symbol: '₽', rate: 0.15, flag: '🇷🇺' },
    { name: 'UAH', symbol: '₴', rate: 0.06, flag: '🇺🇦' },

    { name: 'BDT', symbol: '৳', rate: 0.18, flag: '🇧🇩' },
    { name: 'PKR', symbol: '₨', rate: 0.45, flag: '🇵🇰' },
    { name: 'LKR', symbol: 'Rs', rate: 0.5, flag: '🇱🇰' },
    { name: 'NPR', symbol: '₨', rate: 0.21, flag: '🇳🇵' },
];

export type Currency = typeof currencies[number];
export type CurrencyName = Currency['name'];
export default currencies;
