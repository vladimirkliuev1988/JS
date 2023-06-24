const btnstart = document.getElementById('start');
const btnstop = document.getElementById('stop')
const btnreset = document.getElementById('reset');
const btnsave = document.getElementById('save');
const btnreverse = document.getElementById('reverse');
const displaymiliseconds = document.getElementById('miliseconds');
const displayseconds = document.getElementById('seconds');
const displayminutes = document.getElementById('minutes');
const displayhours = document.getElementById('hours');
const spisok = document.getElementById('spisok');
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let milisec = document.createElement('h1');
let sec = document.createElement('h1');
let min = document.createElement('h1');
let hour = document.createElement('h1');
let local = localStorage.length;
let mslocal = localStorage.getItem('msstart');
let slocal = localStorage.getItem('sstart');
let mlocal = localStorage.getItem('mstart');
let hlocal = localStorage.getItem('hstart');


let flag = localStorage.getItem('flag');
function inicialize(){
    if (flag==0) {
        ms = mslocal;
        s = slocal;
        m = mlocal;
        h = hlocal;
        btnstart.style.display = 'none';
        btnstop.style.display = 'block';
        btnreset.style.display = 'block';
        btnsave.style.display = 'block';
        btnreverse.style.display = 'block';
        timerstart(0)
        console.log('СБРОС')
    }
    if (flag==1) {
        ms = mslocal;
        s = slocal;
        m = mlocal;
        h = hlocal;
        btnstart.style.display = 'none';
        btnstop.style.display = 'block';
        btnreset.style.display = 'block';
        btnsave.style.display = 'block';
        btnreverse.style.display = 'block';
        timerstart(1)
        console.log('СТАРТ')
    }
    if (flag==2) {
        ms = mslocal;
        s = slocal;
        m = mlocal;
        h = hlocal;
        btnstart.style.display = 'none';
        btnstop.style.display = 'block';
        btnreset.style.display = 'block';
        btnsave.style.display = 'block';
        btnreverse.style.display = 'block';
        timerstart(2)
        console.log('СТОП')
    }
    if (flag==3) {
    
        btnstart.style.display = 'none';
        btnstop.style.display = 'block';
        btnreset.style.display = 'block';
        btnsave.style.display = 'block';
        btnreverse.style.display = 'block';
        timerstart(3)
        console.log('РЕВЕРС')
    }
}

inicialize()


function timerstart(flaginit) {

    let timer = setInterval(function () {

        milisec.innerHTML = ms++ + 1;
        displaymiliseconds.replaceChildren(milisec);
        if (ms == 100) {
            ms = 0;

            sec.innerHTML = s++ + 1;
            displayseconds.replaceChildren(sec);
        }
        if (s == 60) {
            s = 0;

            min.innerHTML = m++ + 1;
            displayminutes.replaceChildren(min);
        }
        if (m == 60) {
            m = 0;

            hour.innerHTML = h++ + 1;
            displayhours.replaceChildren(hour);
        }

        localStorage.setItem('msstart', ms);
        localStorage.setItem('sstart', s);
        localStorage.setItem('mstart', m);
        localStorage.setItem('hstart', h);

    }, 10);
    if (flaginit==0){
        clearInterval(timer);
        btnstart.style.display = 'block';
        btnstop.style.display = 'none';
        btnreset.style.display = 'none';
        btnsave.style.display = 'none';
        btnreverse.style.display = 'none';
    }
    if (flaginit==2){
        clearInterval(timer);
       console.log(ms)
       console.log(s)
       btnstart.style.display = 'block';
        btnstop.style.display = 'none';
        let milisec = document.createElement('h1');
        milisec.innerHTML = ms;
        displaymiliseconds.replaceChildren(milisec);
        let sec = document.createElement('h1');
        sec.innerHTML = s;
        displayseconds.replaceChildren(sec);
        let min = document.createElement('h1');
        min.innerHTML = m;
        displayminutes.replaceChildren(min);
        let hour = document.createElement('h1');
        hour.innerHTML = h;
        displayhours.replaceChildren(hour);
    }
    if (flaginit==3){
        console.log(mslocal)
        console.log(slocal)
      timerreverse(mslocal,slocal,mlocal,hlocal);
    }
    
 
    
    function timerreverse(ms,s,m,h) {
        clearInterval(timer);
       

        timer = setInterval(function () {
            if (ms == 0 && s == 0 && m == 0 && h == 0) {
                clearInterval(timer);
                localStorage.setItem('flag', 2);
                localStorage.setItem('msstart', 0);
                localStorage.setItem('sstart', 0);
                localStorage.setItem('mstart', 0);
                localStorage.setItem('hstart', 0);
                btnstart.style.display = 'block';
                btnstop.style.display = 'none';
                btnreset.style.display = 'none';
                btnsave.style.display = 'none';
                btnreverse.style.display = 'none';
            }
            localStorage.setItem('msstart', ms);
            localStorage.setItem('sstart', s);
            localStorage.setItem('mstart', m);
            localStorage.setItem('hstart', h);
            milisec.innerHTML = ms--;
            displaymiliseconds.replaceChildren(milisec);
            if (ms == 0 && s > 0) {
                ms = 100;

                sec.innerHTML = s-- - 1;
                displayseconds.replaceChildren(sec);
            }
            if (s == 0 && m > 0) {
                s = 60;
                milisec.innerHTML = ms--;
                displaymiliseconds.replaceChildren(milisec);
                min.innerHTML = m--;
                displayminutes.replaceChildren(min);

            }
            if (m == 0 && h > 0) {
                m = 60;

                hour.innerHTML = h--;
                displayhours.replaceChildren(hour);
            }
           
           
        }, 10);
        

    }
    

    btnstop.onclick = function () {
        clearInterval(timer);
        btnstart.style.display = 'block';
        btnstop.style.display = 'none';
        
        localStorage.setItem('flag', 2);
        
    }

    btnreverse.onclick = () => {
        btnstart.style.display = 'none';
        btnstop.style.display = 'block';
        localStorage.setItem('flag', 3);
        timerreverse(ms,s,m,h);
    }
    btnreset.onclick = function () {
        clearInterval(timer);
        localStorage.setItem('msstart', 0);
        localStorage.setItem('sstart', 0);
        localStorage.setItem('mstart', 0);
        localStorage.setItem('hstart', 0);
      
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        let milisec = document.createElement('h1');
        milisec.innerHTML = 0;
        displaymiliseconds.replaceChildren(milisec);
        let sec = document.createElement('h1');
        sec.innerHTML = 0;
        displayseconds.replaceChildren(sec);
        let min = document.createElement('h1');
        min.innerHTML = 0;
        displayminutes.replaceChildren(min);
        let hour = document.createElement('h1');
        hour.innerHTML = 0;
        displayhours.replaceChildren(hour);

        btnstart.style.display = 'block';
        btnstop.style.display = 'none';
        btnreset.style.display = 'none';
        btnsave.style.display = 'none';
        btnreverse.style.display = 'none';
        localStorage.setItem('flag', 0);
        

    }
    let stepsave = 0;
    btnsave.onclick = () => {
        if (local <= 5) {
            let stepsaveforward = stepsave++;
            localStorage.setItem('ms' + stepsaveforward, ms);
            localStorage.setItem('s' + stepsaveforward, s);
            localStorage.setItem('m' + stepsaveforward, m);
            localStorage.setItem('h' + stepsaveforward, h);
            let div = document.createElement('div');
            div.innerHTML = ' Милисекунд ' + localStorage.getItem('ms' + stepsaveforward) + ' Секунд ' + localStorage.getItem('s' + stepsaveforward) + ' Минут ' + localStorage.getItem('m' + stepsaveforward) + ' Часов ' + localStorage.getItem('h' + stepsaveforward);
            spisok.append(div);
        } else {
            let stepaftersave = (local - 5) / 4;
            let stepsaveforwardafterreset = stepaftersave++;
            localStorage.setItem('ms' + stepsaveforwardafterreset, ms);
            localStorage.setItem('s' + stepsaveforwardafterreset, s);
            localStorage.setItem('m' + stepsaveforwardafterreset, m);
            localStorage.setItem('h' + stepsaveforwardafterreset, h);
            let div = document.createElement('div');
            div.innerHTML = ' Милисекунд ' + localStorage.getItem('ms' + stepsaveforwardafterreset) + ' Секунд ' + localStorage.getItem('s' + stepsaveforwardafterreset) + ' Минут ' + localStorage.getItem('m' + stepsaveforwardafterreset) + ' Часов ' + localStorage.getItem('h' + stepsaveforwardafterreset);
            spisok.append(div);
        }
    }
}





btnstart.onclick = () => {
    btnstart.style.display = 'none';
    btnstop.style.display = 'block';
    btnreset.style.display = 'block';
    btnsave.style.display = 'block';
    btnreverse.style.display = 'block';
  
        localStorage.setItem('flag', 1);
    timerstart(1);

}

let j = 0;
let x = 0;
let i = 0;
let o = 0;
for (let k = 0; k < (local-5)/4; k++) {
    let div = document.createElement('div');
    div.innerHTML = ' Милисекунд ' + localStorage.getItem('ms' + j++) + ' Секунд ' + localStorage.getItem('s' + x++) + ' Минут ' + localStorage.getItem('m' + i++) + ' Часов ' + localStorage.getItem('h' + o++);
    spisok.append(div);

}

console.log(local)
console.log((local-5) / 4)
