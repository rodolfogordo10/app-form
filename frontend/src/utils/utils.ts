export const stringAvatar = (name: string) => {
  return {
    size: 28,
    children: `${name.split(' ')[0][0]}`,
  };
};

export const notMask = (query: string) => {
  return query.replace(/[^0-9]+/g, '');
};

// CONVERT HEX TO RGB COLOR
export const convertHexToRGB = (hex: string) => {
  // check if it's a rgba

  if (hex.match('rgba')) {
    const triplet = hex.slice(5).split(',').slice(0, -1).join(',');
    return triplet;
  }
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
  }
};

export const renderProductCount = (
  page: number,
  productPerPage: number,
  totalProductLenth: number,
) => {
  const startNumber = page * productPerPage;
  let endNumber = (page + 1) * productPerPage;

  if (endNumber > totalProductLenth) endNumber = totalProductLenth;

  return `Showing ${
    startNumber + 1
  }-${endNumber} of ${totalProductLenth} products`;
};

/**
 * CALCULATE PRICE WITH PRODUCT DISCOUNT THEN RETURN NEW PRODUCT PRICES
 * @param  price - PRODUCT PRICE
 * @param  discount - DISCOUNT PERCENT
 * @returns - RETURN NEW PRICE
 */

export function calculateDiscount(price: number, discount: number) {
  const afterDiscount = Number((price - price * (discount / 100)).toFixed(2));
  return currency(afterDiscount);
}

/**
 * CHANGE THE CURRENCY FORMAT
 * @param  price - PRODUCT PRICE
 * @param  fraction - HOW MANY FRACTION WANT TO SHOW
 * @returns - RETURN PRICE WITH CURRENCY
 */

export function currency(price: number, fraction: number = 2) {
  // const { publicRuntimeConfig } = getConfig();
  // currency: publicRuntimeConfig.currency,

  const formatCurrency = new Intl.NumberFormat(undefined, {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: fraction,
    minimumFractionDigits: fraction,
  });

  return formatCurrency.format(price);
}
