function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||     userInput ==='scissors' ){
      return userInput;
    } else {
      console.log("Error in The Game");
    }
  }
  function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);
     if ( random === 0){
       return 'rock'
     } else if (random === 1){
       return 'paper'
     } else if (random === 2 ){
       return 'scissors'
     } 
  }
  // console.log(getComputerChooice())
  const determineWinner = (userChoice,computerChoice) =>{
  if ( userChoice === computerChoice){
    return 'The game is lie 🙌';
  } if (userChoice === 'rock'){
     if(computerChoice === 'paper'){
       return 'Sorry, The wiebke Won 😕 !! ';
     } else {
       return 'Congratulations,  you won 🥳 !!'
     }
     if (userChoice === 'paper'){
       if(computerChoice  === 'scissors'){
         return 'Sorry, The wiebke Won 😕 !! ';
       } else {
         return 'Congratulations,  you won 🥳 !!';
       }  
     
     }
  }
  // if( userChoice === 'bomb'){
  //        return 'Congratulations,  you won 🥳 !!';
  //      }
  };
  
  const playGame = () =>{
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log("Amine   👨‍🦰 : ", userChoice)
    console.log("Wiebke 🤓 : ", computerChoice)
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  
  
  
  
  
  
  