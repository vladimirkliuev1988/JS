//Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length - 1]); 

//Task 3 
const numbers = [5, 43, 63, 23, 90];
for (keys in numbers) {
    if (keys<numbers.length) {
        i++
        delete numbers[keys];
    } else {
        continue
    }
}
console.log(numbers);
/*
for (var i = 0; i < numbers.length; i++) {
    delete numbers[i];
  }
    console.log(numbers);
    */
//Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

//Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (var i = 0; i < cats.length; i++) {
    console.log(cats[i]);
  }

  for (const element of cats) {
    console.log(element);
  }

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
for (var i = 0; i < evenNumbers.length; i++) {
    oddNumbers.push(evenNumbers[i]);
  }
  console.log (oddNumbers);
  var searchNumbers = [];
  for (var i = 0; i < oddNumbers.length; i++) {
    searchNumbers.push(oddNumbers[i]);
    if (oddNumbers[i]===8) {
        break
    } else {
        continue
    }
  }
  console.log(searchNumbers);
  console.log(searchNumbers.length - 1);

//Task7
const binary = [0, 0, 0, 0];
var a = [];
for (var i = 0; i < binary.length; i++) {
    a.push(binary[i]+'1');
  }
  console.log(String(a));
  
  