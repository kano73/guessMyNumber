'use strict'
function randNum(max,min){
    let guessedNumber = Math.floor(Math.random()*(max+min+1))+min;

    console.log(guessedNumber);
    return guessedNumber
}

let guessedNumber = randNum(20,0);

function compear(num){
    if(num>guessedNumber){
        console.log('too high');
        return 1
    }
    else if(num<guessedNumber){
        console.log('too low')
        return -1
    }
    else if(num==guessedNumber){
            return 0
        }
    else{
        document.querySelector('.message').textContent = 'Please enter a valid number!';
        return;
    }

}

document.querySelector('.guess').addEventListener(('click'),(event)=>{
    event.preventDefault();

    let result = compear(document.querySelector('input[type="number"]').value);
    document.querySelector('input[type="number"]').value='';
    switch(result){
        case 0:{
            document.querySelector('.message').textContent='You won!!!';
            document.querySelector('.guessed-number').textContent=guessedNumber;

            let usersscore = parseInt(document.querySelector('.scorenumber').textContent)
            let highscore = parseInt(document.querySelector('.highscorenumber').textContent)
            if(usersscore>highscore){
                document.querySelector('.highscorenumber').textContent=usersscore;
            }

            document.querySelector('html').style.backgroundColor = 'green';
            document.querySelector('input[type="number"]').style.backgroundColor = 'green';
            document.querySelector('input[type="number"]').style.color = '#d7d9fa';
            document.querySelector('input[type="number"]').disabled = true
            document.querySelector('.guess.btn').disabled = true
            
            break
        }
        case 1:{
            document.querySelector('.message').textContent='Guess too high';
            document.querySelector('.scorenumber').textContent=parseInt(document.querySelector('.scorenumber').textContent)-1
            break
        }
        case -1:{
            document.querySelector('.message').textContent='Guess too low';
            document.querySelector('.scorenumber').textContent=parseInt(document.querySelector('.scorenumber').textContent)-1
            break
        }
    }
});

document.querySelector('.again.btn').addEventListener(('click'),(event)=>{
    event.preventDefault();

    guessedNumber = randNum(20,0);

    document.querySelector('html').style.backgroundColor = '#212121';
    document.querySelector('input[type="number"]').style.backgroundColor = '#212121';
    document.querySelector('input[type="number"]').style.color = '#d7d9fa';
    document.querySelector('input[type="number"]').disabled = false;
    document.querySelector('.guess.btn').disabled = false;

    document.querySelector('.guessed-number').textContent = '?';
    document.querySelector('.scorenumber').textContent='20'
});