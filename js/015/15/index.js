

const box = document.getElementById('item');
const targetBox = document.getElementById('targetBox');

box.addEventListener('dragstart', function(e){
})

targetBox.addEventListener('dragover', function(e){
   e.preventDefault();
});

targetBox.addEventListener('drop', function(){
   targetBox.prepend(box);
});