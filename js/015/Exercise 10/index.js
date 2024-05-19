



(()=>{

   const input = document.getElementById('temperature');
   const output = document.getElementById('output');
   const toCelsiusBtn = document.getElementById('toCelsius');
   const toFahrenheitBtn = document.getElementById('toFahrenheit');
   let temperature = 0;

   toCelsiusBtn.addEventListener('click', function(){
      temperature = (parseFloat(input.value) - 32) * 5/9;
      output.textContent = temperature.toFixed(2);
   });

   toFahrenheitBtn.addEventListener('click', function(){
      temperature = (9/5 * parseFloat(input.value)) + 32;
      output.textContent = temperature.toFixed(2);
   });

})();