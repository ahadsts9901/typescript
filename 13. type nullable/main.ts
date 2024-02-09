const greet = (name: string | null | false | undefined): string => {

    if (name) {
        return `Hello ${name}`
    }

    return "Hello"

}

greet("John")

greet(null)
greet(false)
greet(undefined)