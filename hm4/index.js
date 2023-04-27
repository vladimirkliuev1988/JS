//Task 1
var userpetia = {
    name: 'Петя',
    age: 25
};
delete userpetia.name;
delete userpetia.age;
//Task 2
var username = {
    name: 'Петя',
    age: 25
}
if (username.name === 'Петя') {
    console.log(true);
} else {
    console.log(false);
}
if (username.age === 25) {
    console.log(true);
} else {
    console.log(false);
}
//Task 3 
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (var key in student) {
    console.log(key);
    console.log(student[key]);
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue)

//Task5 
var salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
var chislo = 0;
for (var key in salaries) {
    chislo++;
}
var sum = 0;
for (var key in salaries) {
    sum += salaries[key];
}
var zp = sum / chislo;
console.log(zp);

//Task6
var user = {
    name: 'Petya',
    age: 20,
    isMarried: true,
    family: null,
    address: undefined,
    friend: {
        name: 'Misha'
    }
};
var cloneUserObject = {};

for (var key in user) {
    if (typeof  user[key] === 'object' && user[key]!==null) {
        cloneUserObject[key]={};
        for (var keyinfriend in user[key]) {
            cloneUserObject[key][keyinfriend] = user[key][keyinfriend];
        }
        continue;
    }
    cloneUserObject[key] = user[key];
}
console.log(cloneUserObject);

