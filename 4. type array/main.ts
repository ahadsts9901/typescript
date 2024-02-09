let fruits: string[] = ["apple", "mango", "banana"]
fruits[3] = "orange"

fruits.forEach((fruit) => {
    fruit.toUpperCase()
})

let nums: number[] = [1, 5, 2, 7]
nums[4] = 0

nums.forEach((num) => {
    num.toString()
})

let arr: any[] = [4, "string", false, { name: "john", age: 17 }]
arr[3] = "object"