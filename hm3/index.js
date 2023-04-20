var chislo = prompt('Введите число');
var iter = prompt('Введите количество итераций')
var a = Number(chislo);
var b = Number(iter);
for (i = 0; i <= b; i++) {
    c = a * i;
}
if (c % 2 == 0) {
    alert('Ваше новое число четное и =' + ' ' + c);
} else {
    alert('Ваше новое число нечетное и =' + ' ' + c);
}
