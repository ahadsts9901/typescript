const fun1 = (val: number): number => {
    return val;
}

fun1(12)

const fun2 = (val: any): any => {
    return val
}

fun2("hi")

const fun3 = <Type>(val: Type): Type => {
    return val
}

fun3(["hi", 12, {}, null])

const fun4 = <T>(val: T): T => {
    return val
}

interface User {
    email: string,
    password: string,
    age: number,
}

const users: Array<User> = [
    {
        email: "string",
        password: "string",
        age: 24,
    },
    {
        email: "string",
        password: "string",
        age: 24,
    }
]

function getUsers<User>(val: Array<User>): User {
    return val[0]
}