const calculateTax = (income: number, taxYear: number = 2022): number => {

    if (taxYear < 2022) {
        return income * 1.2
    }

    return income * 1.3

}

calculateTax(10_000)

calculateTax(20_000, 2023)

const calculateTax2 = (income: number, taxYear?: number): number => {

    if ((taxYear || 2026) < 2016) {
        return income * 1.2
    }

    return income * 1.3

}

calculateTax2(10_000)

calculateTax2(10_000, 2023)