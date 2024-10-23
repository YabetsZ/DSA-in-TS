"use strict";
let count = 125;
console.log(count);
const getJSON = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
};
