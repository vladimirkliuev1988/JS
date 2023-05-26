const table = document.getElementById('tablechess');
const elem1 = document.getElementById('elem1');
const elem2 = document.getElementById('elem2');
button.onclick = function () {
    let val1 = elem1.value;
    let val2 = elem2.value;
    if (isNaN(val1) || isNaN(val2)) {
        let pLast = document.createElement('p');
        pLast.innerHTML = 'Введите число';
        elem1.after(pLast);
    }
    else {
        console.log(val1, val2);
        for (let i = 0; i < val1; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            if (i % 2) {
                for (let i = 0; i < val2; i++) {
                    let td = document.createElement('td');
                    tr.append(td);
                    if (i % 2 == 0) {
                        td.style.backgroundColor = 'black';
                    } else {
                        td.style.backgroundColor = 'antiquewhite';
                    }
                }
            } else {
                for (let i = 0; i < val2; i++) {
                    let td = document.createElement('td');
                    tr.append(td);
                    if (i % 2 != 0) {
                        td.style.backgroundColor = 'black';
                    } else {
                        td.style.backgroundColor = 'antiquewhite';
                    }
                }
            }
        }
    }
};

table.onclick = function (event) {
    let target = event.target;
    if (target.style.backgroundColor === 'black') {
        target.style.backgroundColor = 'antiquewhite';
    } else {
        target.style.backgroundColor = 'black'
    }

}
