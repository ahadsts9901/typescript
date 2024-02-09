type Drag = {
    drag: () => void
}

type Resize = {
    resize: () => void
}

type UIWidget = Drag & Resize

const textArea: UIWidget = {
    drag: () => { },
    resize: () => { }
}