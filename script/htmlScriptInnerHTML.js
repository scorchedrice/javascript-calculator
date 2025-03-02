export default function displayInnerHTML(currentNumberAndExpressionsObject) {
    const displayExpressions = document.querySelector('.expressions');
    const displayCurrentNumber = document.querySelector('.currentNumber');
    const expressions = currentNumberAndExpressionsObject.expressions;
    const currentNumber = currentNumberAndExpressionsObject.currentNumber;
    if (expressions !== undefined && currentNumber !== undefined) {
        displayExpressions.innerHTML = expressions.join(' ');
        displayCurrentNumber.innerHTML = currentNumber;
    } else if (expressions === undefined && currentNumber !== undefined) {
        displayCurrentNumber.innerHTML = currentNumber;
    } else if (expressions !== undefined && currentNumber === undefined) {
        displayExpressions.innerHTML = expressions.join(' ');
    } else {
        displayExpressions.innerHTML = "";
        displayCurrentNumber.innerHTML = "";
    }
}