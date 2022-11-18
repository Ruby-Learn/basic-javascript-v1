/**
 * Number
 *  - 64비트 부동소수점 방식을 사용 (자바의 double)
 */

/**
 * 아래의 parseInt 결과는 모두 123 이 나온다.
 *  - 자바스크립트의 parseInt 는 정수가 아닌 부분이 있으면 에러를 반환하지 않고 그 부분에서 parsing 을 끝내고 결과를 반환한다.
 */
console.log(Number.parseInt('123'));
console.log(Number.parseInt('123.456'));
console.log(Number.parseInt('123abc'));


/**
 * 자바스크립트의 parseFloat 은 parseInt 처럼 실수로 변환할 수 있는 부분까지의 결과를 반환한다.
 */
console.log(Number.parseFloat('123'));              // 123
console.log(Number.parseFloat('123.456'));          // 123.456
console.log(Number.parseFloat('123.456.789'));      // 123.456
console.log(Number.parseFloat('123abc'));           // 123

/**
 * 파싱한 결과가 숫자로 표현할 수 없을 경우에는 NaN 을 반환한다.
 */
console.log(Number.parseInt('abc'));                // NaN

/**
 * 자바스크립트에서는 무한대를 의미하는 Infinity 가 존재한다.
 */
console.log(3 / 0);                                     // Infinity