import {calculateAdditionalAndSubtraction, calculateMultiplicationAndDivision} from "./calculateDetail.js";

export default function calculateManager(calculatorInputElements, calculateQueue) {
   calculateQueue.reset();
   calculatorInputElements.forEach((element) => calculateQueue.push(element));
   calculateQueue.checkValid();

   const [numberArray, operatorArray] = calculateMultiplicationAndDivision(calculateQueue);

   return calculateAdditionalAndSubtraction(numberArray, operatorArray);
}