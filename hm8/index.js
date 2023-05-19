const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seveven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('*');
const division = document.getElementById('/');
const equals = document.getElementById('=');
const backspace = document.getElementById('backspace');

one.onclick = function () {
    document.getElementById("out_txt").value += '1';
}

two.onclick = function () {
    document.getElementById("out_txt").value += '2';
}
three.onclick = function () {
    document.getElementById("out_txt").value += '3';
}
four.onclick = function () {
    document.getElementById("out_txt").value += '4';
}
five.onclick = function () {
    document.getElementById("out_txt").value += '5';
}
six.onclick = function () {
    document.getElementById("out_txt").value += '6';
}
seveven.onclick = function () {
    document.getElementById("out_txt").value += '7';
}
eight.onclick = function () {
    document.getElementById("out_txt").value += '8';
}
nine.onclick = function () {
    document.getElementById("out_txt").value += '9';
}
zero.onclick = function () {
    document.getElementById("out_txt").value += '0';
}
plus.onclick = function () {
    document.getElementById("out_txt").value += ' + ';
}
minus.onclick = function () {
    document.getElementById("out_txt").value += ' - ';
}
mult.onclick = function () {
    document.getElementById("out_txt").value += ' * ';
}
division.onclick = function () {
    document.getElementById("out_txt").value+= ' / ';
}

backspace.onclick= function  () {
    document.getElementById("out_txt").value = document.getElementById("out_txt").value.slice(0, document.getElementById("out_txt").value.length - 1);
}

equals.addEventListener("click", result);
 function result () {
    const sum =document.getElementById("out_txt").value.split(' ').join('');
    if (sum[sum.indexOf('+')]=='+'){ 
        let a = Number(sum.slice(0,sum.indexOf('+')));
    let b = Number(sum.slice(Number(sum.indexOf('+'))+1,sum.length));
    let ressum = a+b;
    console.log(ressum)
    document.getElementById("out_txt").value= (ressum);
    }
    else if (sum[sum.indexOf('-')]=='-') {
        let a = Number(sum.slice(0,sum.indexOf('-')));
        let b = Number(sum.slice(Number(sum.indexOf('-'))+1,sum.length));
        let ressum = a-b;
        console.log(ressum)
        document.getElementById("out_txt").value= (ressum);
    }
    else if (sum[sum.indexOf('*')]=='*') {
        let a = Number(sum.slice(0,sum.indexOf('*')));
        let b = Number(sum.slice(Number(sum.indexOf('*'))+1,sum.length));
        let ressum = a*b;
        console.log(ressum)
        document.getElementById("out_txt").value= (ressum);
    }
    else if (sum[sum.indexOf('/')]=='/') {
        let a = Number(sum.slice(0,sum.indexOf('/')));
        let b = Number(sum.slice(Number(sum.indexOf('/'))+1,sum.length));
        let ressum = a/b;
        console.log(ressum)
        document.getElementById("out_txt").value= (ressum);
    }
}



