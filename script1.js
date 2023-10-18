let button = document.querySelector('.playAgain');

button.addEventListener("click", ()=>{
    window.location.href = 'index.html';
})

let rulesButton = document.querySelector('.rules3');
let rulesBox = document.querySelector('.hidden');
let crossButton = document.querySelector('.cross');
let gameBoard= document.querySelector('.game')

rulesButton.addEventListener('click', function() {
    if (rulesBox.style.display === 'none' || rulesBox.style.display === '') {
        rulesBox.style.display = 'block';
        crossButton.style.display = 'block';
    }
});

crossButton.addEventListener('click', function(){
        rulesBox.style.display = 'none';
        crossButton.style.display = 'none'; 
})