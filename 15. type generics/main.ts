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