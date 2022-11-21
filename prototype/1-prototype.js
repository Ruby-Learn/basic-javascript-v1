const person = {
    name: 'ruby'
}; 
const programmer = {
    lang: 'javascript'
}

Object.setPrototypeOf(programmer, person);                  // programmer 객체의 prototype 을 person 객체로 설정
console.log(Object.getPrototypeOf(programmer) === person)
console.log(programmer.name);                               // programmer 에 name 프로퍼티가 없으므로 prototype 인 person 의 name 을 사용

for (const prop in programmer) {
    console.log(prop);                  // lang, name
}

// Object.keys 는 prototype 의 속성에는 접근하지 않는다.
for (const prop of Object.keys(programmer)) {
    console.log(prop);                  // lang
}