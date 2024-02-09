type Customer = {
    birthday?: Date
}

const getCustomer = (id: number | string): Customer | null => {

    return id === 0 ? null : { birthday: new Date() }

}

const customer = getCustomer(1)

console.log(customer?.birthday?.getFullYear());

// const log = (message: string): void => {
//     console.log(message);
// }

const log: any = null

log?.("hi")