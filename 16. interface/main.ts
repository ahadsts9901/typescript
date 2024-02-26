interface Bottle {
    brand: string,
    price: number,
    expiry?: string
}

const bottle: Bottle = {
    brand: "cole-next",
    price: 80,
    expiry: "2025"
}

const fun = (val: Bottle): number => {
    return val.price;
}