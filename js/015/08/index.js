


const btnShow = document.getElementById('showModalBtn');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

btnShow.addEventListener('click', function(){ 
   overlay.style.display = 'block';
});

overlay.addEventListener('click', function(event){
   if (event.target === btnClose || event.target === overlay) {
      overlay.style.display = 'none';
   }
});