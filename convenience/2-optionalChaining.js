const name = person?.name;      // person 이 null 또는 undefined 이면 name 에는 undefined 가 할당된다.

const value = org?.func?.();    // org 또는 org.func 이 null 또는 undefined 이면 value 에는 undefined 가 할당된다. 아니라면 함수를 호출하여 리턴값을 할당