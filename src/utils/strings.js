
export function lengString(string = '') {
    if (string.length >= 30) {
        const newString = string.slice(0, 21) + ' ....'
        return newString
    } else {
        return string
    }
}