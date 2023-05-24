const colors = ['#087543','#011788','#386453','#599999','#453765','#036584','#164538','#875214','#045215','#067554'];
const container = document.querySelector('.table')
console.log(colors)
const result = document.querySelectorAll('td')
console.log(result)
container.onclick = function(event) {
    let target = event.target;
    if (target.className === 'color1') {
        for (let item of result) {
            item.style.backgroundColor = colors[0];
          }
    }
    if (target.className === 'color2') {
        for (let item of result) {
            item.style.backgroundColor = colors[1];
          }
    }
    if (target.className === 'color3') {
        for (let item of result) {
            item.style.backgroundColor = colors[2];
          }
    }
    if (target.className === 'color4') {
        for (let item of result) {
            item.style.backgroundColor = colors[3];
          }
    }
    if (target.className === 'color5') {
        for (let item of result) {
            item.style.backgroundColor = colors[4];
          }
    }
    if (target.className === 'color6') {
        for (let item of result) {
            item.style.backgroundColor = colors[5];
          }
    }
    if (target.className === 'color7') {
        for (let item of result) {
            item.style.backgroundColor = colors[6];
          }
    }
    if (target.className === 'color8') {
        for (let item of result) {
            item.style.backgroundColor = colors[7];
          }
    }
    if (target.className === 'color9') {
        for (let item of result) {
            item.style.backgroundColor = colors[8];
          }
    }
    if (target.className === 'color10') {
        for (let item of result) {
            item.style.backgroundColor = colors[9];
          }
    }
  }




