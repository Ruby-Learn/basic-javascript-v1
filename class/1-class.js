class Person {
    constructor(name) {
        this._name = name;
    }
    sayHello() {
        console.log(`hello ${this.name}`);
    }
    get name() {
        return this._name;
    }

    // setter 를 작성하지 않으면 외부에서 값을 변경할 수 없다.
    // set name(value) {
    //     this._name = value;      // this.name = value 로 작성하면 this.name 이 setter 를 호출하게되며 무한으로 호출되어 callStack 을 초과하게 된다.
    // }
}

const person = new Person('ruby');
person.name = 'aaa';                        // setter 가 정의되어 있지 않다면 적용되지 않는다.
console.log(person.name);                   // setter 가 정의되어 있지 않다면 ruby