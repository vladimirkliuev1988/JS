const friend = document.getElementById('addfriend');
const spisok = document.getElementById('spisok');
const h3 = document.querySelector('h3');
let local = localStorage.length;


button.onclick = function () {
    localStorage.setItem(local++, friend.value);
    let key = local - 1;
    if (local > 0) {
        h3.innerHTML = local;
        let pLast = document.createElement('p');
        pLast.innerHTML = localStorage.getItem(key);
        spisok.after(pLast);
    }
}

for (let j = 0; j < local; j++) {
    h3.innerHTML = local;
    let pLast = document.createElement('p');
    pLast.innerHTML = localStorage.getItem(j);
    spisok.after(pLast);
}



