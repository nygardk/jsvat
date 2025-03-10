import { Country } from '../main';

export const denmark: Country = {
  name: 'Denmark',
  codes: ['DK', 'DNK', '208'],
  calcFn: (vat: string): boolean  => {
    let total = 0;

    for (let i = 0; i < 8; i++) {
      total += Number(vat.charAt(i)) * denmark.rules.multipliers.common[i];
    }

    return total % 11 === 0;
  },
  rules: {
    multipliers: {
      common: [2, 7, 6, 5, 4, 3, 2, 1]
    },
    regex: [/^(DK)(\d{8})$/]
  }
};
