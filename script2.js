const score={
    wins : 0,
    losses : 0,
    ties : 0

};

function rps(){
    const randomNumber= Math.random();
    console.log(randomNumber);
 }
 
 let computerMove= '';
 
 if(randomNumber >=0 && randomNumber<=1/3){
     computerMove= 'rock';
 }else if (randomNumber>=1/3 && randomNumber <= 2/3){
     computerMove='scissors';
 } else(randomNumber>=2/3 && randomNumber <= 3/3)
 {
     computerMove='paper';
 } 
 
     function rps(playerMove) {
         const randomNumber = Math.random();
         let computerMove = '';
 
         if (randomNumber < 1/3) {
             computerMove = 'rock';
         } else if (randomNumber < 2/3) {
             computerMove = 'scissors';
         } else {
             computerMove = 'paper';
         }
 
         let result = '';
         if (playerMove === computerMove) {
             result = 'It\'s a tie!';
         } else if (
             (playerMove === 'rock' && computerMove === 'scissors') ||
             (playerMove === 'paper' && computerMove === 'rock') ||
             (playerMove === 'scissors' && computerMove === 'paper')
         ) {
             result = 'You win!';
         } else {
             result = 'You lose!';
         }

         if (result=== 'You win!'){
            score.wins+=1;
         }else if(result=== 'You lose!'){
            score.losses+=1;
         }else if(result === "It\'s a tie!"){
            score.ties+=1;
         };
 
         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
            Wins: ${score.wins}, losses: ${score.losses}, Ties : ${score.ties} `);
     }
 
 
 
  
 function rock(){
     let result='';
     if (computerMove === 'rock')
 {
     result= 'tie'
 } else if (computerMove=== 'paper'){
     result=' You lose';
 } else if (computerMove=== 'scissors'){
     result= 'You win';
 }
 alert(` You picked rock. Computer picked ${computerMove}. ${result}`)
 }