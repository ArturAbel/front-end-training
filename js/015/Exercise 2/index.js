


const items = document.querySelectorAll('.faq-item');


items.forEach(item => {
   item.addEventListener('click', function(e) {
      const answer = item.lastElementChild;
      if (!answer) {
         answer.classList.toggle('active');
      }
   });
});