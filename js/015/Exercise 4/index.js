


const paragraphs = document.querySelectorAll('.highlightable');

paragraphs.forEach(paragraph => {
   paragraph.addEventListener('mouseover', function(){
      paragraph.classList.add('highlighted');
   });
});

paragraphs.forEach(paragraph => {
   paragraph.addEventListener('mouseout', function(){
      paragraph.classList.remove('highlighted');
   });
});