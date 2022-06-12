// Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username (saved in cookie).
// Set range as function parameter and prompt the player to predict the generated number between the given range, at a correct guess, the game should award the player a point (also saved in cookie), and move them to stage 2 by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on. Connect replit account to github and save your program in github.
var username = prompt("Enter your username");
document.cookie = "username=name";
            
var points = 0;

        function generateRandValue(range){
        var min = 1;
        var max = 2;
range = Math.floor(Math.random() * max) + min;
        return range;
           
    }
function displayResult() {

        var randValue=generateRandValue();
        var userValue = prompt("Enter a number");
        
        
        if (userValue==randValue) {
         points=+1;
          document.coookie = "points";
           let mark = document.coookie = "points";
      
        
       alert (mark + ": Good guess- Congratulations!");
          stages();
        }
        else{
        points--;
        document.coookie = "points";
        let mark = document.coookie = "points";
          
        alert(mark + ": Bad guess!");
          alert("Game over");
  alert(username + " Your score is "+ mark);
        }
  function stages(){
if (points >=1){
  var stg=1;
  alert("Nice Job, please lets go to stage " + ++stg);
   let mark = document.coookie = "points";
  mark++;
  displayResult()
  alert(username + " Your score is "+ mark);
  }
else{
  alert("Game over");
  alert(username + " Your score is "+ mark);
}
  }
    }
displayResult();

