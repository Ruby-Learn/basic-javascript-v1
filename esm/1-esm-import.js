/**
 * 외부 모듈로부터 사용
 * - newCall 은 1-esm-export 에서 default 로 지정한 call 함수이다.
 */
import newCall ,{sayHello} from './1-esm-export'

sayHello('ruby');