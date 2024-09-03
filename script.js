// // // /*function kirti()
// // // {
// // //     alert('dont touch me');
// // // }
// // // function addNumbers() {
// // //     // Get the values from the input fields
// // //     const num1 = parseFloat(document.getElementById('num1').value);
// // //     const num2 = parseFloat(document.getElementById('num2').value);
    
// // //     // Check if inputs are numbers
    
// // //         // Add the numbers
// // //         const sum = num1 + num2;
        
// // //         // Display the result
// // //         document.getElementById('result').innerText = `Result: ${sum}`;
    
// // // }
// // // */
// // function rps(){
// //    const randomNumber= Math.random();
// //    console.log(randomNumber);
// // }

// // let computerMove= '';

// // if(randomNumber >=0 && randomNumber<=1/3){
// //     computerMove= 'rock';
// // }else if (randomNumber>=1/3 && randomNumber <= 2/3){
// //     computerMove='scissors';
// // } else(randomNumber>=2/3 && randomNumber <= 3/3)
// // {
// //     computerMove='paper';
// // } 

// //     function rps(playerMove) {
// //         const randomNumber = Math.random();
// //         let computerMove = '';

// //         if (randomNumber < 1/3) {
// //             computerMove = 'rock';
// //         } else if (randomNumber < 2/3) {
// //             computerMove = 'scissors';
// //         } else {
// //             computerMove = 'paper';
// //         }

// //         let result = '';
// //         if (playerMove === computerMove) {
// //             result = 'It\'s a tie!';
// //         } else if (
// //             (playerMove === 'rock' && computerMove === 'scissors') ||
// //             (playerMove === 'paper' && computerMove === 'rock') ||
// //             (playerMove === 'scissors' && computerMove === 'paper')
// //         ) {
// //             result = 'You win!';
// //         } else {
// //             result = 'You lose!';
// //         }

// //         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
// //     }



 
// // function rock(){
// //     let result='';
// //     if (computerMove === 'rock')
// // {
// //     result= 'tie'
// // } else if (computerMove=== 'paper'){
// //     result=' You lose';
// // } else if (computerMove=== 'scissors'){
// //     result= 'You win';
// // }
// // alert(` You picked rock. Computer picked ${computerMove}. ${result}`)
// // }

 
// // // function function1(){
// // //     console.log('hello');
// // //     console.log(2+2);
// // // }
// // // function1();

// // const product ={
// //     name: 'socks',
// //     price : '1090'
// // };
// // console.log(product);
// // console.log(product.price);
// // product.name = 'cotton socks';
// // console.log(product);
// // product.quantity = '2';
// // console.log(product);
// // delete product.quantity;
// // console.log(product);

// // console.log("hello".length);
// // console.log("hello".toUpperCase());
// /*
// document.body.innerHTML= 'hello';
// document.title = 'good job';
// */

// // console.log(document.title)
// /*console.log(document.body);
// console.log(document.body.innerHTML)
// document.body.innerHTML = '<button>changed</button>'*/
 
// console.log(document.querySelector('button').innerHTML);
// document.querySelector('button').innerHTML='changed'
// console.log(document.querySelector('.js-button'))
 
function subscribe(){
    const buttonElement= document.querySelector('.js-subscribe-button');
    if(buttonElement.innerHTML=== 'Subscribe'){
        buttonElement.innerHTML= 'Subscribed';}
        else{
            buttonElement.innerHTML= 'Subscribe';
        }

    }


