


const display = document.getElementById('keyDisplay');

document.addEventListener('keypress', function(event){
    const key = event.key === ' ' ? 'Space' : event.key;
    display.innerText = key;
});