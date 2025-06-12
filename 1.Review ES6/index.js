// 1. Destructuring

var coureses = {
  name: "Javascript",
  price: 1000,
  image: "image-address",
};

// ...rest lấy phần còn lại của object
var { name, ...rest } = coureses;
console.log(name);
console.log(rest);

function logger ({name , price, ...rest}){
  console.log(name);
  console.log(price);
  console.log(rest);
}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description'
});


// 2. Spread operator
console.log("=========== SPREAD ===========");

// nối mảng
var array1 = ['Javacript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2,...array1]
console.log(array3);

// object
var object1 = {
    name: 'Javascript'
}
var object2 = {
    price: 1000
}

var object3 = {
    ...object1,...object2
}

console.log(object3);

// 3. modules JS, Import / Export
 import checkLog from './logger.js';
console.log(checkLog);
