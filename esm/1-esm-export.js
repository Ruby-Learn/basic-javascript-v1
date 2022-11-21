/**
 * ESM - ECMAScript Modules
 * - 자바스크립트 모듈 시스템
 * - 모듈을 최초 한 번만 실행되며 이 때 export 로 지정한 것을 내보낸다.
 * - export 로 내보낸 객체를 다시 호출할 때에는 처음 내보낸 것을 호출한다. (마치 자바의 싱글톤 스프링 빈 객체처럼...)
 * - package.json 파일이 있어야 함
 */


/**
 * export 를 통해 외부에서 사용할 수 있께 함
 */
export function sayHello(name) {
    console.log(`hello~ ${name}`);
}

/**
 * default 로 지정하면 외부에서 {} 를 쓰지 않고 사용할 수 있으며 이름을 변경하여 사용할 수도 있다.
 */
export default function call(name) {
    console.log(`call~ ${name}`);
}