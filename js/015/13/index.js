
const contextMenu = document.getElementById('contextMenu');
const header = document.querySelector('h1');
const viewDetails = document.getElementById('viewDetails');
const copyText = document.getElementById('copyText');

header.addEventListener('contextmenu', function(e){

   e.preventDefault();
   contextMenu.style.left = `${e.pageX}px`;
   contextMenu.style.top = `${e.pageY}px`;
   contextMenu.style.display = 'block';
});

viewDetails.addEventListener('click', function(){
   alert('View Details');
});

copyText.addEventListener('click', function(){
   alert('Copy Text');
});

document.addEventListener('click', function(){
   contextMenu.style.display = 'none';
});