const button = document.getElementById('btn-submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


button.addEventListener('click', (e)=>{
    
    if(name.value === null || name.value === ''){
        e.preventDefault();
        alert('Name cannot be blank')}
    if(message.value=== null || message.value === '' || message.value=== ' '){
        e.preventDefault();
         alert('Message cannot be blank')}
})
