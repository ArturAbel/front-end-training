


const btn = document.getElementById('clickButton');
const p = document.getElementById('counter');
let counter = 0

btn.addEventListener('click', function(){
   counter++;
   p.innerText = counter;
})