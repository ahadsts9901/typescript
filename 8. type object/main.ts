const userData: {
    name: string,
    age: number,
    isActive: boolean,
    readonly id: number
} = {
    name: "John",
    age: 30,
    isActive: true,
    id: 1,
}

// with function

const userData2: {
    name: string,
    age: number,
    isActive: boolean,
    readonly id: number,
    retire: (date: Date) => void
} = {
    name: "John",
    age: 30,
    isActive: true,
    id: 1,
    retire: (date: Date) => console.log(date)

}