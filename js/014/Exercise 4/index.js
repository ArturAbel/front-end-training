//2

const div = document.getElementById('dynamicForm');

function addField() {
   let newInput = document.createElement('input');
   div.appendChild(newInput);
}

function submitForm() {
   const inputs = document.querySelectorAll('#dynamicForm input');
   let allFilled = true;
   let message = '';
   inputs.forEach(input => {
      allFilled = !input.value ? false : true; 
      message += input.value + ' ';
   }) 
   if (!allFilled) {
      alert(`Please fill all the fields`)
   }
   else{
      alert(message);
   }
}