interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    sides: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

// function getTrueShape(shape: Shape): number {

//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2
//     } else {
//         return shape.sides * shape.sides
//     }

// }

function getTrueShape(shape: Shape): number {

    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.sides * shape.sides
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }

}