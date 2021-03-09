// alert('Hello world');

console.log('Hello world');

console.log(123);
console.log(123123123123123123123123123123);
console.log(-321); // integer / int
console.log(3.14); // floating point number / float
console.log(3.123123123123123123123123123123); // JS will cut the precision
console.log("Foo's car");
console.log('Foo\'s car'); // backslash is a special escape character used to indicate other special characters
console.log('\\'); // output only one \
console.log('<span class="foo"></span>');
console.log("<span class=\"foo\"></span>");
//Boolean
console.log(true); // bool, 1
console.log(false); // 0 
console.log(null); // no data
console.log(undefined); // you try access something,that now doesn't defined yet

var someVar;
console.log(someVar);
console.log (someNumber); // output: undefined
// console.log(rgcs);

var someNumber = 123;
console.log (someNumber);
someNumber = 321;
console.log (someNumber);
someNumber = 'some text 123';
console.log (someNumber);

let someOtherNumber = 456; // can change
console.log(someOtherNumber);
someOtherNumber = 654;
console.log(someOtherNumber);

const someConstant = 'foo'; // never change
console.log(someConstant);

let cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz','bmw' ]; // array

let cars2 = ['vaz2', 
123, 
true, 
'uaz2', 
'bmw2',
]; 

console.log(cars[3]);
cars[1] = 'audi'; // change element for new value
console.log(cars);
cars.push('tesla');
console.log(cars)
console.log(cars.length);
console.log('foo' + 'bar'); // concatenation

let myname = 'Janis';
console.log('Hello, '+ myname);
console.log(`Hello, ${myname}, go and drive a ${cars[1]}`); // interpolation (template literals)

const person = {
    name:'John',
    lastname: 'Doe', 
    age: 42,
    '123gbhfvb' : 'xo=xo',
};
console.log(person);
console.log(person.lastname);
person.name = 'Billy';
console.log(person.name);
console.log(person['age']);

const people = [
    { 
        name:'John',
        lastname: 'Doe', 
        age: 42,
    }, 
    { 
        name:'Jane',
        lastname: 'Loe', 
        age: 32,
    }
];

console.log(people[1].name);
console.log(people[1]['lastname']);