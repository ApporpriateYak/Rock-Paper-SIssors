const choises = ['Rock', 'Paper', 'Sissors'];
const pla3yer = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

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

}