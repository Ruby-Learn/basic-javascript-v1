/**
 * Generator
 * - 함수의 실행을 중간에 멈추고 재개할 수 있는 기능
 * - function* 키워드로 선언
 */
function* f1() {
    // 제너레이터 함수 내에서 yield 키워드를 사용하면 함수의 실행을 멈출 수 있음
    yield 10;
    yield 20;
    return 'finished';
}

/**
 * 제너레이터 객체 생성만으로는 함수가 실행되지 않음
 * - next 를 호출할 떄마다 다음 yield 까지 실행되고 그 yield 값과 done 을 반환함
 *      - done : 제너레이터 함수의 종료 여부
 *      - 제너레이터 함수는 종료된 이후 next 로 다시 호출하면 undefined 를 호출한다.
 * - return 을 호출하면 매개변수 값을 반환하고 제너레이터 함수를 종료시킨다.
 */
const gen1 = f1();               // 제너레이터 객체 생성. 이 때, 함수가 싱행되지는 않는다.
console.log(gen1.next());        // { value: 10, done: false }
console.log(gen1.next());        // { value: 20, done: false }
console.log(gen1.next());        // { value: 'finished', done: ture }
console.log(gen1.next());        // { value: undefined, done: true }

const gen2 = f1();
console.log(gen2.next());                    // { value: 10, done: false }
console.log(gen2.return('return'));    // { value: 'return', done: ture }
console.log(gen2.next());                   // { value: undefined, done: true }
console.log(gen2.next());                   // { value: undefined, done: true }


function* f2() {
    // 제너레이터 함수 내에서 yield 키워드를 사용하면 함수의 실행을 멈출 수 있음
    try {
        yield 10;
        yield 20;
    } catch (e) {
        yield 30;
        yield 40;
    }
}
const gen3 = f2();
console.log(gen3.next());                   // { value: 10, done: false }
console.log(gen3.throw('error'));        // { value: 30, done: false }
console.log(gen3.next());                   // { value: 30, done: false }
console.log(gen3.next());                   // { value: undefined, done: true }

/**
 * 반목문과 전개 연산자 내부에서 next 를 호출한다.
 */
for (const v of f1()) {
    console.log(v);                         // 10 , 20
}
const arr = [...f1()];
console.log(arr);                           // [ 10, 20 ]


function* g1() {
    yield 2;
    yield 3;
}

function* g2() {
    /**
     * iterator
     * - next 메서드를 가지고 있어야 함
     * - next 메서드는 value 와 done 속성값을 가진 객체를 반환
     * - done 속성값은 작업이 끝났을 때 참이 됨
     *
     * iterable
     *  - 반복 가능한 객체
     *  - Symbol.iterator 속성값으로 함수를 갖고 있다.
     *  - 해당 함수를 호출하면 iterator 를 반환환     */
    // 제너레이터 함수 내에서 다른 제너레이터 함수 또는 iterable 객체를 호출할 떄에는 yield* 키워드를 사용
    yield 1;
    yield* g1();    // [ 2 , 3 ]
    yield 4
}

console.log(...g2());       // 1 2 3 4

function* f3() {
    const data1 = yield;
    console.log(data1);
    const data2 = yield;
    console.log(data2);
}

const gen4 = f3();
gen4.next();              // const data1 = yield; 까지 실행됨.
gen4.next(10);      // yield 에 10 이 할당됨. console.log(data1); 까지 실행됨
gen4.next(20);      // yield 에 20 이 할당됨. console.log(data2); 까지 실행됨