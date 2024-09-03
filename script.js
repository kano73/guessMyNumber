'use strict'
const guessedNumber =Math.floor(Math.random()*(20+0+1))+0

console.log(guessedNumber);

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
    switch(result){
        case 0:{
            document.querySelector('.message').textContent='You won!!!';
            document.querySelector('.guessed-number').textContent=guessedNumber;

            let usersscore = parseInt(document.querySelector('.usersscore').textContent)
            let highscore = parseInt(document.querySelector('.highscorenumber').textContent)
            if(usersscore>highscore){
                document.querySelector('.highscorenumber').textContent=usersscore;
            }

            let element = document.querySelector('html'); 
            element.style.backgroundColor = 'green';
            break
        }
        case 1:{
            document.querySelector('.message').textContent='Guess too high';
            document.querySelector('.usersscore').textContent=parseInt(document.querySelector('.usersscore').textContent)-1
            break
        }
        case -1:{
            document.querySelector('.message').textContent='Guess too low';
            document.querySelector('.usersscore').textContent=parseInt(document.querySelector('.usersscore').textContent)-1
            break
        }
    }
})