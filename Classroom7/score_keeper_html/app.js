// create variable and set it equal to zero
var score = 0;

// run a query selector
// add an event listener to this
// event listener requires an event and a function
document.querySelector("#increase-5").addEventListener("click", function(){
  score +=5;
  // this adds five
  changeScore();
  // this connects the add five to show at the top
});

document.querySelector("#decrease-5").addEventListener("click", function(){
  score -=5;
  changeScore();
});

document.querySelector("#submit-custom-score").addEventListener("click",function(){
  var newScore = document.querySelector("custom-score").value;
  score = parseInt(newScore);
  // clear existing value
  document.querySelector("#custom-score").value = "";

  changeScore();
});

function changeScore(){
  if (score < 0) {
    return false;
    // return false so program wont allow you to go negative
  } else {
    document.querySelector("#score").textContent = score + " Points";
  }
}
