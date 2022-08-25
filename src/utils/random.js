export const Random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const listRandom = (list = []) => {
    const position = Random(0, list.length - 1)
    const item = list[position]
    if (item === undefined) {
        return list[0]
    } else {
        return item
    }
}