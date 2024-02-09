type userDataType = {
    name: string,
    age: number,
    isActive: boolean,
    readonly id: number
}

const userData2: userDataType = {
    name: "John",
    age: 30,
    isActive: true,
    id: 1,
}

// with functions

type userDataType2 = {
    name: string,
    age: number,
    isActive: boolean,
    readonly id: number
    retire: (date: Date) => void // no return value
}

const userData3: userDataType2 = {
    name: "John",
    age: 30,
    isActive: true,
    id: 1,
    retire: (date: Date) => console.log(date)
}