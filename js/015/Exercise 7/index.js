



const ul = document.getElementById('navList');
const message = document.getElementById('message');


ul.addEventListener('click', function(event){
   if (event.target.tagName === 'A') {
      message.style.display = 'block';
      message.textContent =  event.target.dataset.link;
   }
});