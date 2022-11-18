/**
 * 숫자의 경우 0, NaN 일경우 false, 그 외 에는 true
 * 문자열의 경우 빈 문자열일 경우 false, 그 외에는 true
 */
console.log(!!0);         // false
console.log(!!NaN);       // false
console.log(!!'');        // false

/**
 * nullish coalescing (??)
 * - 왼쪽 피연산자가 null 또는 undefined 일 때 오른쪽 연산자를 반환. 그렇지 않을 경우 왼쪽 피연산자를 반환
 *      - || 의 경우에는 왼쪽 피연산자가 0, NaN, 빈 문자열일 경우에도 오른쪽 연산자를 반환
 * - nullish coalescing 을 통해 오른쪽 피연산자에 함수 호출을 작성하여 필요할 경우에만 호출하도록 할 수도 있다.
 */
const person = {};
const name1 = person.name === undefined || person.name === null ? 'unknown' : person.name;
const name2 = person.name ?? 'unknown';     // 위의 결과와 같다.

const product = {desc: '', price: 0};
console.log(product.desc || '상품 가격을 입력하세요.');       // 상품 가격을 입력하세요 -> 빈 문자열은 값으로 인정되지 않음
console.log(product.desc ?? '상품 가격을 입력하세요.');       // ''
console.log(product.price || 1000);                     // 1000 -> 0 은 값으로 인정되지 않음
console.log(product.price ?? 1000);                     // 0
