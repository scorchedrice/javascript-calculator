export default function elementTypeIdentifier(element) {
    if (element === '÷' || element === '×') {
        return 'divideOrMultiple'
    } else if (element === '+' || element === '-') {
        return 'plusOrMinus'
    } else {
        return 'number'
    }
}