console.log ('JS OK')

// Creiamo una lista di mail autorizzate

const emails = ['angelocrisci@js.it' , 'angelocrisci@gmail.com' , 'angelocrisci@libero.it' , 'angelocrisci@hotmail.it']

// Elementi del Form

const userEmail = document.getElementById('useremail')
const confirmButton = document.getElementById('confirm-button')

// Recupero Email tramite il click del buttuon

confirmButton.addEventListener('click' , function(){
    const emailValue = userEmail.value.trim();
})


