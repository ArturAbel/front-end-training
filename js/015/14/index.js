

const input = document.getElementById('filterInput');
const items = document.querySelectorAll('.item');

input.addEventListener('keyup', function(e){
   const value = e.target.value.toLowerCase();  
   items.forEach(item => {
   const find = item.textContent.toLowerCase().indexOf(value);
   find !== -1 ? item.style.display = 'block' :  item.style.display = 'none'
   })
});