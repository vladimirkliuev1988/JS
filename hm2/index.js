var comedy = 'комедии';
var mult = 'мультфильмы';
var criminal = 'криминал';
var horror = 'ужасы'
var Answerkino = confirm('Любите ли Вы фильмы');
if (Answerkino === false) {
    var why = prompt('Почему Вы не любите фильмы?');
    var age = prompt('Ваш возраст');
    if (Number(age) >= 0 && age <= 10) {
        alert('Я понимаю Вашу причину' + ',' + why + ',' + 'но я вам советую посмотреть' + ' ' + mult);
    } else if (Number(age) >= 11 && age <= 20) {
        alert('Я понимаю Вашу причину' + ',' + why + ',' + 'но я вам советую посмотреть' + ' ' + comedy);
    }
    else if (Number(age) >= 21 && age <= 30) {
        alert('Я понимаю Вашу причину' + ',' + why + ',' + 'но я вам советую посмотреть' + ' ' + criminal);
    }
    else if (Number(age) >30 ) {
        alert('Я понимаю Вашу причину' + ',' + why + ',' + 'но я вам советую посмотреть' + ' ' + horror);
    }
} else {
    var genre = prompt('Какой жанр предпочитаете?')
    if (genre.toLowerCase() == comedy) {
        var age = prompt('Ваш возраст');
        if (Number(age) >= 0 && age <= 10) {
            alert('Cоветую посмотреть' + ' ' + mult);
        } else if (Number(age) >= 11 && age <= 20) {
            alert('Cоветую посмотреть' + ' ' + comedy);
        }
        else if (Number(age) >= 21 && age <= 30) {
            alert('Cоветую посмотреть' + ' ' + criminal);
        }
        else if (Number(age) >30 ) {
            alert('Cоветую посмотреть' + ' ' + horror);
        }
    }
    else if(genre.toLowerCase() == mult) {
        var age = prompt('Ваш возраст');
        if (Number(age) >= 0 && age <= 10) {
            alert('Cоветую посмотреть' + ' ' + mult);
        } else if (Number(age) >= 11 && age <= 20) {
            alert('Cоветую посмотреть' + ' ' + comedy);
        }
        else if (Number(age) >= 21 && age <= 30) {
            alert('Cоветую посмотреть' + ' ' + criminal);
        }
        else if (Number(age) >30 ) {
            alert('Cоветую посмотреть' + ' ' + horror);
        }
    }
    else if(genre.toLowerCase() == criminal) {
        var age = prompt('Ваш возраст');
        if (Number(age) >= 0 && age <= 10) {
            alert('Cоветую посмотреть' + ' ' + mult);
        } else if (Number(age) >= 11 && age <= 20) {
            alert('Cоветую посмотреть' + ' ' + comedy);
        }
        else if (Number(age) >= 21 && age <= 30) {
            alert('Cоветую посмотреть' + ' ' + criminal);
        }
        else if (Number(age) >30 ) {
            alert('Cоветую посмотреть' + ' ' + horror);
        }
    }
    else if(genre.toLowerCase() == horror) {
        var age = prompt('Ваш возраст');
        if (Number(age) >= 0 && age <= 10) {
            alert('Cоветую посмотреть' + ' ' + mult);
        } else if (Number(age) >= 11 && age <= 20) {
            alert('Cоветую посмотреть' + ' ' + comedy);
        }
        else if (Number(age) >= 21 && age <= 30) {
            alert('Cоветую посмотреть' + ' ' + criminal);
        }
        else if (Number(age) >30 ) {
            alert('Cоветую посмотреть' + ' ' + horror);
        }
    } 
    else {
        alert('Извините такого жанра нет, ни чем не могу помочь');
    }
} 
