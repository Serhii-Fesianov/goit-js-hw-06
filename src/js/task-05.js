const inpt = document.querySelector('#name-input');
const outpt = document.querySelector('#name-output');
inpt.addEventListener('input',(event)=>{
outpt.textContent = event.target.value || 'Anonimus'
})


