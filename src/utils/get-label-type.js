export function getTypeLabel(type) {
    switch (type) {
        case "bun":
            return "Булки"
        case "main":
            return "Начинки"
        case "sauce":
            return "Соусы"
        default:
            return type
    }
}
