function taggerFunc(strings, ...expressions) {
    console.log({strings, expressions});    // { strings: [ 'a-', 'b-', '' ], expressions: [ 10, 20 ] }
}

const v1 = 10;
const v2 = 20;

/**
 * tagged template literals
 * - 함수의 인자 부분을 대체할 수 있는 문법으로 두 인자를 대체한다.
 *      - expressions : 리터럴 문자열 내에 포함되어 있는 변수들의 배열
 *      - strings : 리터럴 문자열을 변수들을 기준으로 잘라낸, 변수를 제외한 나머지 부분들의 배열
 */
taggerFunc`a-${v1}b-${v2}`          // { strings: [ 'a-', 'b-', '' ], expressions: [ 10, 20 ] }
taggerFunc`a-${v1}b-${v2}c-`        // { strings: [ 'a-', 'b-', 'c-' ], expressions: [ 10, 20 ] }