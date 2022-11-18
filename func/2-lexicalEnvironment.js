/**
 * Lexical Environment
 * - 자바스크립트 코드에서 변수나 함수 등의 식별자를 정의하는데 사용하는 객체
 * - 변수의 값을 찾을 때 하나의 Lexical Environment 내에서 해당 변수를 찾지 못하면 연결되어 있는 이전 Lexical Environment 에서 그 값을 찾아서 사용한다.
 *      - 클로저의 원리!!
 */

// -------   Lexical Environment 1 (Global) =>  main:func, obj: {....} -------
function main() {
    let v = 0;
    function f1() {
        v++;
        console.log(v);
    }
    function f2() {
        v++;
        console.log(v);
    }
    return {f1, f2};
}

const obj = main();     // Lexical Environment 2 => v:0, f1:func, f2:func  다시 호출 될 수 있으므로 함수 호출이 끝난 뒤에도 제거되지 않음

obj.f1();               // Lexical Environment 3-1 => 내부에 변수나 함수가 없으므로 호출된뒤 제거됨
obj.f2();               // Lexical Environment 3-2 => 내부에 변수나 함수가 없으므로 호출된뒤 제거됨
obj.f1();               // Lexical Environment 3-3 => 내부에 변수나 함수가 없으므로 호출된뒤 제거됨
obj.f2();               // Lexical Environment 3-4 => 내부에 변수나 함수가 없으므로 호출된뒤 제거됨

// -------   Lexical Environment 1 -------