// Computed Property Names - 계산된 속성명

/**
 * Computed Property Names - 계산된 속성명
 * - 객체의 속성명을 동적으로 결정할 수 있게 해주는 문법
 */
function makeObj(key, value) {
    // 함수에서 반환되는 객체의 속성명이 key 매개변수에 따라 달라지게 된다.
    return {[key] : value}      // { key : value}
}

/**
 * 전개 연산자
 * - 배열, 객체의 속성을 풀어서 반환
 * - 객체의 경우 여러 객체를 풀었을 때 중복된 속성이 있다면 마지막 객체의 속성이 값으로 결정됨
 */
const array = [1, ...[2, 3], 4];    // [1, 2, 3, 4]

/**
 * 비구조화 문법
 */
const arr = [1, 2];
const [a, b, c = 10] = arr;     // a = 1, b = 2, c = 10
const [b, a] = [a, b];          // 비구조화 문법을 통해 두 값을 교환

const obj = {age : 36, name : 'ruby'};
const {age, name:nickname} = obj;       // {age, nickname} - nickname 에 name 값을 할당한다. 오른쪽의 새 변수에 왼쪽 값을 할당한다.