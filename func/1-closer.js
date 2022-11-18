/**
 * 클로저
 * - 함수와 그 함수를 둘러싸고 있는 주변의 상태를 기억하는 기능
 */
function makeAdd(v1) {
    const v3 = 10;

    // 리턴된 함수는 makeAdd 의 호출이 끝난 뒤에도 v1 과 v3 의 값을 기억해서 연산을 처리할 수 있다.
    return function (v2) {
        return v1 + v2;
    }
}

const add = makeAdd(1);
console.log(add(9))     // makeAdd 호출이 위에서 끝났음에도 v1 과 v3 값을 사용하여 연산한다.