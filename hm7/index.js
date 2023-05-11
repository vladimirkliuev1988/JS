// Task1 
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((item) => {
    console.log(item);
})

function displayfibonacci(elem){
    console.log(elem)
    
}
fibonacci.forEach(displayfibonacci)

// Task2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const result=users.map((item) => {
    return 'Member:'+ item;
})
console.log(result);

function memberitem(item) {
return 'Member:' + item;
}
const resultmember = users.map(memberitem);
console.log(resultmember)

// Task3
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positivearr=numbers.filter((item) => {
    if (item >0) {
        return item;
        }
})
console.log(positivearr)
function positiveitems (item) {
    if (item > 0 ) {
        return item;
    }
}
const positivearritog = numbers.filter(positiveitems);
console.log(positivearritog)

// Task4
const resultsum=fibonacci.reduce((sum, current) => {
    return sum + current;
});
console.log(resultsum)

function resulsumfibonacci (sum, current) {
    return sum + current;
}
console.log(fibonacci.reduce(resulsumfibonacci));

//Task5

const numberstask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let resultfind = numberstask5.find((item)=> {
   if (item%2===0) {
   return item
   }
  });
  console.log(resultfind)

function chetnoechislo (item) {
    if (item%2===0) {
        return item
        }
}
console.log(numberstask5.find(chetnoechislo));

/*
1)Создать функцию которая принимает 3 параметра 
1 Строка promt
2 Число promt которое будет обозночать индекс строки
3 Число promt сколько раз нужно продублировать индекс в строке

Привет

индекс 1 

Вернуть новую строку в которой продублировано 10 знаков 'Р'
*/
let otvet = prompt('Введите слово');
    let index = Number(prompt('Введите индекс'));
    let povtor = Number(prompt('Сколько раз повторить'));
let resultnew = () => {
    array = otvet.split('');
    for (i = 0; i < povtor - 1; i++) {
        alert(array[index]);
    }
};
resultnew();

/*
Создать функцию createUser 
Спросить имя фамилию возраст 

исходя из возраста
>18 лет то Разрешено
Если нет не Разрешено

По итогу функция должна вернуть объект имя фамилия возраст и ключ разрешен или нет

вызвать несколько раз и все результаты вывести в массив и вывести на экран
*/
let createUser = () => {
    let name = prompt('Ваше имя');
    let surname = prompt('Ваша фамилия');
    let age = Number(prompt('Ваш возраст'));
    let obj={};
    if (age >= 18) {
        alert('Разрешено');
        obj.name = name;
        obj.surname=surname;
        obj.age=age;
        obj.access='Разрешено';
        console.log(obj);
        return obj;
      }else {
        alert('Запрещено');
        obj.name = name;
        obj.surname=surname;
        obj.age=age;
        obj.access='Запрещено';
        console.log(obj);
        return obj;
      }
};
const itog = [createUser(),createUser()];
console.log(itog);

