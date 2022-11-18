/**
 * 화살표 함수에서의 this 는 해당 화살표 함수를 감싸고 있는 외부함수를 가리킨다.
 * - 외부 함수가 없을 경우 this 는 전역 객체를 가리키게 된다.
 */
const counter = {
    value : 0,
    add: amount => {
        // 해당 화살표 함수를 감싸고 있는 함수가 없기 때문에 this 는 counter 가 아닌 전역 객체(Global)를 가리킨다.
        this.value += amount
    }
};

console.log(counter.value);
counter.add(5);
console.log(counter.value);
const add = counter.add;
add(5);
console.log(counter.add);