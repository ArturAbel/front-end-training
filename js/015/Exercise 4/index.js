


const paragraphs = document.querySelectorAll('.highlightable');

paragraphs.forEach(paragraph => {
   paragraph.addEventListener('mouseover', function(event){
      paragraph.classList.add('highlighted');
   });
});

paragraphs.forEach(paragraph => {
   paragraph.addEventListener('mouseout', function(){
      paragraph.classList.remove('highlighted');
   });
});