
let player1 = 0;
let player2 = 0;
     


let name1 = prompt("Enter Player 1 Name");
let name2 = prompt("Enter Player 2 Name");




  function takeName(){  
  

        document.getElementById('p1').innerHTML = name1;
        document.getElementById('p2').innerHTML = name2;
}



function rollDice(){

    player1 = Math.floor(Math.random() *6+1)
    player2 = Math.floor(Math.random() *6+1)

//  this is solution after i watched dr angela yu solution. 
    var randomImage1 = 'images/Dice' + player1 + '.png';
    var randomImage2 = 'images/Dice' + player2 + '.png';

    var changeImage1 = document.querySelectorAll("img")[0];
    var changeImage2 = document.querySelectorAll("img")[1];

    changeImage1.setAttribute("src" , randomImage1 );
    changeImage2.setAttribute("src" , randomImage2 );
    
    upperName1 = name1.toUpperCase();
    upperName2 = name2.toUpperCase();
    

    if (randomImage1 > randomImage2){

        document.getElementById('score').innerHTML = `${upperName1} WINS!`
    }else if (randomImage1 < randomImage2) {

        document.getElementById('score').innerHTML = `${upperName2} WINS!`

    }else if (randomImage1 === randomImage2){

        document.getElementById('score').innerHTML = "DRAW!"

    }
    
}
takeName();
rollDice();
 


// ********(this is my first try when i do roll dice challange without see the solution , then i realize this is to complex. so i watch solution by dr angela yu . then i came out with her solution. she's very clever i dont think that solution will come out on the first place. )****************

// if (player1 === 1){

//         document.getElementById('dice-1').src = "Dice1.png";
//     }

//     else if (player1 === 2){

//         document.getElementById('dice-1').src = "Dice2.png";
//     }

//     else if (player1 === 3){

//         document.getElementById('dice-1').src = "Dice3.png";
//     }
//     else if (player1 === 4){

//         document.getElementById('dice-1').src = "Dice4.png";
//     }
//     else if (player1 === 5){

//         document.getElementById('dice-1').src = "Dice5.png";
//     }
//     else if (player1 === 6){

//         document.getElementById('dice-1').src = "Dice6.png";
//     }
    

//     if (player2 === 1){

//         document.getElementById('dice-2').src = "Dice1.png";
//     }

//     else if (player2 === 2){

//         document.getElementById('dice-2').src = "Dice2.png";
//     }

//     else if (player2 === 3){

//         document.getElementById('dice-2').src = "Dice3.png";
//     }
//     else if (player2 === 4){

//         document.getElementById('dice-2').src = "Dice4.png";
//     }
//     else if (player2 === 5){

//         document.getElementById('dice-2').src = "Dice5.png";
//     }
//     else if (player2 === 6){

//         document.getElementById('dice-2').src = "Dice6.png";
//     }
