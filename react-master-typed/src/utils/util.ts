export const currencyFormatter = (v:number) => new Intl.NumberFormat ('en-US',
    {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }
).format(v);