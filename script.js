const choises = ['Rock', 'Paper', 'Sissors'];
const pla3yer = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
let playerscoredisplay = 0;
let computerscoredisplay =0; 

function playgame(playerchoice){

        const computerchoice  = choises[Math.floor(Math.random() *3)];
        
        let resultchoice = "";

        if(playerchoice === computerchoice){
          resultchoice = "Its a tie"
         }
         else{
            switch(playerchoice){
                    case "Rock":
                        resultchoice = (computerchoice === "Sissors") ? "You Win!" : "You Lose!";
                    break;
                    case "Paper":
                        resultchoice = ( computerchoice === "Rock") ? "You Win!" : "You Lose!";
                    break;
                    case "Sissors":
                        resultchoice = (computerchoice === "Paper") ? "You Win!" : "You Lose!";
                        break;
            }
         }

         player.textContent = `Player: ${playerchoice}`;
         computer.textContent = `Computer: ${computerchoice}`;
         result.textContent = resultchoice;

        switch(resultchoice){
            case "You Win!":
                playerscoredisplay++;
                playerscore.textContent = playerscoredisplay;
                break;
            case "You Lose!":
                computerscoredisplay++;
                computerscore.textContent = computerscoredisplay;
                break;
        }
}