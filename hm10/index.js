const table = document.getElementById('tablechess');
const elem1 = document.getElementById('elem1');
const elem2 = document.getElementById('elem2');
button.onclick = function () {
    let val1 = elem1.value;
    let val2 = elem2.value;
    if (isNaN(val1)) {
        document.getElementById("alert1").style.display = "block";
        
    } 
    else {
        document.getElementById("alert1").style.display = "none"
    }
    if (isNaN(val2)) {
        document.getElementById("alert2").style.display = "block";
    }
else {
    document.getElementById("alert2").style.display = "none"
}

           
        for (let i = 0; i < val1; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            if (i % 2) {
                for (let i = 0; i < val2; i++) {
                    let td = document.createElement('td');
                    td.className = "black";
                    tr.append(td);
                    if (i % 2 == 0) {
                        continue
                    } else {
                        td.classList.toggle('black');
                    }
                }
            } else {
                for (let i = 0; i < val2; i++) {
                    let td = document.createElement('td');
                    td.className = "black";
                    tr.append(td);
                    if (i % 2 != 0) {
                        continue
                    } else {
                        td.classList.toggle('black');
                    }
                }
            }
        }
    };
    


table.onclick = function (event) {
    const items = document.querySelectorAll('td')
for (let item of items) {
    item.classList.toggle('black');
}
}
