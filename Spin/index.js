let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = Math.ceil(Math.random()*1000);
let result = document.getElementById('result');


btn.onclick = function() {
   result.innerHTML = '';
    container.style.transform = 'rotate(' + number + 'deg)';
    number += Math.ceil(Math.random()*1000);
    console.log(number)
    setTimeout(searchelem, 8000);
    
}
function searchelem () {
    let elem = document.elementFromPoint(970, 60);
    let p = document.createElement('p');
    p.innerHTML = 'Поздравляем!!! Вы выиграли '+' ' + elem.textContent+' ' + 'бонусов' ;
    result.append(p);
    let h1 = document.createElement('h1');
    h1.innerHTML = elem.textContent;
    result.append(h1);
    
}


