let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;
let movesLeftElement = document.getElementById('moves');
let playerScoreElement = document.getElementById('pscore');
let computerScoreElement = document.getElementById('cscore');
let result = document.getElementById('result');
    function gameLogic(presponse){
        if(movesLeft>0)
        {
        let playerResponse = presponse;
        const computerChoice = ["Rock" , "Paper" , "scissor"];
        let randomcomputerResponse = Math.floor(Math.random() * computerChoice.length);
        let computerResponse = computerChoice[randomcomputerResponse];
        let gameResult = "";
        if(playerResponse==computerResponse)
        {
             gameResult = "Game tie";
        }
        else if(playerResponse  == "Paper" && computerResponse == "Rock")
        {
            playerScore++;      
            gameResult = "Player wins";
        }
        else if(playerResponse == "Rock" && computerResponse =="Scissor")
        {
            playerScore++;
            gameResult = "Player Wins";
        }
        else if(playerResponse == "Scissor" && computerResponse =="Paper")
        {
            playerScore++;
            gameResult = "Player wins ";
        } 
        else{
            computerScore++;
            gameResult = "Computer Wins";
        }
    
        let resultText = "Winner: " + gameResult;
        result.innerHTML = resultText;
        playerScoreElement.innerHTML = playerScore;
        computerScoreElement.innerHTML = computerScore;
        movesLeft--;
        movesLeftElement.innerHTML = movesLeft;  
        if(movesLeft === 0)
        {
            alert("Game over please click on reset button ");
        }
    }
    
    }
    function reset(){ 
    playerScore = 0;
    computerScore = 0;
    movesLeft = 10;
    playerScoreElement.innerHTML = '0';
    computerScoreElement.innerHTML = '0';
    movesLeftElement.innerHTML = '10';
    result.innerHTML = "Winner: ";

    }
   
    

