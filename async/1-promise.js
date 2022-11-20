/**
 * Promise
 *  - Promise 의 세가지 상태
 *      - pending : 대기중
 *      - fulfilled : 성공
 *      - rejected : 실패
 */

// pending 상태. 내부의 결과에 따라 resolve 또는 reject 함수를 호출하여 그 전까지는 상태가 변경되지 않음
const p1 = new Promise((resolve, reject) => {});

const p2 = Promise.reject('error!');

const p3 = Promise.resolve(param);

/**
 * Promise.then 은 두개의 파라미터를 갖는다.
 * - 첫번째는 Promise 의 결과가 성공시 실행되는 함수
 * - 두번째는 Promise 의 결과가 실패시 실행되는 함수
 * Promise.then 은 항상 Promise 객체를 반환한다.
 */
p1.then(onPromise, onReject);
p2.then(null, data => console.log(data));       // p2 는 reject 상태이기 때문에 두번째 파라미터 함수가 실행된다.
p3.then(data => console.log(data));             // p3 는 resolve 상태이기 때문에 첫번째 파라미터 함수가 실행. 두번째는 생략가능




function requestData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);

    })
}
function requestData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);

    })
}

/**
 * then 은 순차적으로 진행되며 병렬로 처리되지 않는다.
 */
requestData1()
    .then(data => {
        return requestData2();      // Promise 객체를 반환하면 그 객체를 그대로 반환
    })
    .then(data => {
        return data + 1;            // Promise 가 아닌 값을 반환하면 그 값을 데이터로 가진 Promise 객체를 반환
    })
    .then(data => {
        throw new Error('error!');  // Error 를 던질 경우 그 Error 를 값으로 가진 Promise 객체를 반환
    })
    .then(null, error => {
        console.log(error);         // error 는 then 의 두 번째 파라미터로 넘어온다.
        // error 를 두 번째 파라미터를 통해 호출하는 것보다 catch 로 처리하는 것이 좋다.
    })
    .then(data => {
        console.log(data);          // 위의 then 에서 반환값이 없었기 때문에 data 는 undefined 가 된다.
    })

/**
 * Promise.all
 * - 병렬로 Promise 를 처리
 * - 매개변수의 Promise 중 하나라도 reject 상태를 반환하면 Promise.all 의 반환 Promise 객체는 reject 상태가 된다.
 * - 매개변수의 모든 Promise 가 fulfilled 상태이어야 Promise.all 은 fulfilled 상태가 된다.
 */
Promise.all([requestData1(), requestData2()])
    .then( ([data1, data2]) => {
        console.log(data1, data2);
    })