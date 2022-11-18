const obj = {
    age: 21,
    name: 'ruby'
};

console.log(Object.keys(obj));          // ['age', 'name']
console.log(Object.values(obj));        // [21, 'ruby']
console.log(Object.entries(obj));       // [ ['age', 21], ['name', 'ruby'] ]

delete obj.age;         // 객체의 프포퍼티 제거