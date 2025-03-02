import elementTypeIdentifier from "./elementTypeIdentifier.js";

export function calculateMultiplicationAndDivision(queue) {
    const numberArray = [];
    const operatorArray = [];
    while (queue.length() > 0) {
        const popLeftValue = queue.popleft();
        const elementType = elementTypeIdentifier(popLeftValue);
        switch (elementType) {
            case 'number':
                numberArray.push(popLeftValue);
                break
            case 'plusOrMinus':
                operatorArray.push(popLeftValue);
                break
            case 'divideOrMultiple':
                const popNumber = numberArray.pop();
                const popLeftNumber = queue.popleft();
                const calculatedNumber = popLeftValue === '÷' ? popNumber / popLeftNumber : popNumber * popLeftNumber;
                numberArray.push(calculatedNumber);
        }
    }
    return [numberArray, operatorArray];
}

export function calculateAdditionalAndSubtraction(numberArray, operatorArray) {
    while (numberArray.length > 1) {
        const firstPopNumber = numberArray.pop();
        const secondPopNumber = numberArray.pop();
        const plusOrMinusOperator = operatorArray.pop();
        switch (plusOrMinusOperator) {
            case '+':
                numberArray.push(firstPopNumber + secondPopNumber);
                break
            case '-':
                numberArray.push(secondPopNumber - firstPopNumber);
        }
    }

    return numberArray[0];
}