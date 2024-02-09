const countWeight = (weight: number | string): number => {

    // narrowing
    if (typeof weight === 'number') {
        return weight * 1.5
    }

    return parseInt(weight) * 1.5

}
