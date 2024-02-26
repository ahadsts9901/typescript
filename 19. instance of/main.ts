

function instance(value: Date | string): string {
    if (value instanceof Date) {
        return value.toISOString()
    } else {
        return value.toUpperCase()
    }
}


type Fish = {
    swim: () => void,
}

type Bird = {
    fly: () => void,
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined
}

function getFood(animal: Fish | Bird): string {

    if (isFish(animal)) {
        return "fish food"
    } else {
        return "bird food"
    }

}