import elementTypeIdentifier from "./elementTypeIdentifier.js";

export default class Queue {
    constructor() {
        this.qMap = new Map();
        this.front = 0;
        this.back = -1;
    }

    // 큐 맨 앞의 값 빼기
    popleft() {
        const returnValue = this.qMap.get(this.front);
        this.qMap.delete(this.front);
        this.front ++
        return returnValue;
    }

    // 크기
    length() {
        return this.back - this.front + 1
    }

    // 큐에 값 넣기
    push(element) {
        this.back ++
        this.qMap.set(this.back, element);
    }

    // 초기화
    reset() {
        this.qMap.clear();
        this.front = 0;
        this.back = -1;
    }

    // 큐의 유효성 확인
    checkValid() {
        const lastValueType = elementTypeIdentifier(this.qMap.get(this.back));
        console.log('lastValueType', lastValueType);
        if (lastValueType !== 'number') {
            this.qMap.delete(this.back)
            this.back --
        }
    }
}