let count: number = 125;
console.log(count);

// const getJSON = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   return data;
// };
// const data = await getJSON;
// console.log(data)
const obj = {};
const obj2 = { __proto__: obj };
const obj3 = { __proto__: obj2 };

console.log(obj.isPrototypeOf(obj2));
class Person {
  constructor(public name: string) {}
  describe() {
    return "Person named " + this.name;
  }
}
const ribka = new Person("ribka");
console.log(
  Person,
  Person.constructor,
  typeof Person,
  Person.prototype.constructor
);
for (let key in {}) {
  console.log(key);
}
let obj23 = { a: 2 };
console.log(obj23.constructor.prototype);
