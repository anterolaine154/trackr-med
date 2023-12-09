/* 
Filename: ComplexCodeExample.js
Content: Complex code example that demonstrates various features and concepts in JavaScript
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the full name of the person
  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Array of person objects
const people = [
  new Person({ first: 'John', last: 'Doe' }, 25),
  new Person({ first: 'Jane', last: 'Smith' }, 30),
  new Person({ first: 'Bob', last: 'Johnson' }, 15)
];

// Higher-order function to filter and map people
function filterAndMapPeople(people, filterFn, mapFn) {
  const filteredPeople = people.filter(filterFn);
  return filteredPeople.map(mapFn);
}

// Function to filter adults
function filterAdults(person) {
  return person.isAdult();
}

// Function to map person names to uppercase
function mapToUppercase(person) {
  return person.getFullName().toUpperCase();
}

// Use filterAndMapPeople function to get uppercase names of adults
const uppercaseNamesOfAdults = filterAndMapPeople(people, filterAdults, mapToUppercase);

console.log('Uppercase Names of Adults:');
console.log(uppercaseNamesOfAdults);

// Implement a custom sorting algorithm
function customSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [5, 2, 10, 1, 8];
const sortedArray = customSort(unsortedArray);

console.log('Sorted Array:');
console.log(sortedArray);

// Demonstrate event handling
const button = document.getElementById('myButton');

function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);