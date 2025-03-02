import calculateManager from "./calculateManager.js";
import Queue from "./queue.js";
import displayInnerHTML from "./htmlScriptInnerHTML.js";

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.btn.number');
    const operators = document.querySelectorAll('.btn.operator');
    const clearBtn = document.querySelector('.btn.clear');
    const deleteBtn = document.querySelector('.btn.delete');
    const equal = document.querySelector('.btn.equals')
    const calculateQueue = new Queue();

    let expressions = [];
    let currentNumber = '';
    let calculated = false;

    numbers.forEach(numb => {
        numb.addEventListener('click', () => {
            if (calculated) {
                currentNumber = '';
                displayInnerHTML({});
                calculated = false;
            }
            const value = numb.dataset.value;
            currentNumber += value;
            displayInnerHTML({currentNumber: currentNumber})
        })
    })

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            const value = operator.dataset.value;
            if (currentNumber !== '') {
                expressions.push(parseFloat(currentNumber));
                currentNumber = '';
                switch (value) {
                    case '*':
                        expressions.push('×')
                        break
                    case '/':
                        expressions.push('÷')
                        break
                    default:
                        expressions.push(value);
                        break
                }
                displayInnerHTML({expressions: expressions, currentNumber: currentNumber})
            } else {
                alert('유효한 계산을 진행해주세요.')
            }
        })
    })

    equal.addEventListener('click', () => {
        if (currentNumber !== '') {
            expressions.push(parseFloat(currentNumber));
            const result = calculateManager(expressions, calculateQueue);
            displayInnerHTML({expressions: expressions, currentNumber: `${result}`})
            currentNumber = `${result}`
            expressions = [];
            calculated = true;
        } else {
            alert('마지막이 연산자로 끝나는 수식은 계산이 불가한 수식입니다.')
        }
    })

    deleteBtn.addEventListener('click', () => {
        if (currentNumber !== '' && calculated === false) {
            currentNumber = currentNumber.slice(0,currentNumber.length-1);
            displayInnerHTML({currentNumber: currentNumber})
        }
    })

    clearBtn.addEventListener('click', () => {
        expressions = [];
        currentNumber = '';
        displayInnerHTML({});
    })
})