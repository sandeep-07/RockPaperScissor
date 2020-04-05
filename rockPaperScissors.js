const getUserChoice=userInput=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'||userInput==='scissors')
    {
      return userInput;
      
    }
  else
    console.log("Error");
}
const getComputerChoice=()=>
{
  let randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber)
    {
      case 0:
        return 'rock';
      break;
      case 1:
        return 'paper';
      break;
      case 2:
        return 'scissors';
      break;
    }
 
}

const determineWinner=(userChoice,computerChoice)=>
{
  if(userChoice===computerChoice)
    return 'Game Tied';
  else
    {
      if(userChoice==='rock')
        {
          if(computerChoice=='paper')
            return 'Computer won';
          else
            return 'User Won';
        }
      else if(userChoice==='paper')
        {
          if(computerChoice==='rock')
            return 'User Won';
          else
            return 'Computer won';
        }
      else if(userChoice==='scissors')
        {
          if(computerChoice=='rock')
            return 'Computer won';
          else
            return 'User Won';
        }
    }
}
const playGame=()=>
{
  let userChoice=getUserChoice('rock');
  let computerChoice=getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);
 console.log( determineWinner(userChoice,computerChoice));
}
playGame();
