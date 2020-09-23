


document.querySelector("button").onclick = function handleClick(event) {

 var loveScore = Math.floor(Math.random() * 100) + 1;

 if (loveScore >= 70) {
   var perfectScore = document.querySelector("h3").innerHTML =  "Your love score is " + loveScore + ", you two are a perfect pair!";
   var heart1 = document.querySelector("img").setAttribute("src", "images/heart1.png");
   return perfectScore, heart1;
 } else if (loveScore < 70 && loveScore > 50) {
   var mediumScore = document.querySelector("h3").innerHTML = "Your love score is " + loveScore + ", you two will need to work to make it work.";
   var heart2 = document.querySelector("img").setAttribute("src", "images/heart2.png");
   return mediumScore, heart2;
 } else {
   var badScore = document.querySelector("h3").innerHTML = "Your love score is " + loveScore + ", save yourselves the heartache.";
   var heart3 = document.querySelector("img").setAttribute("src", "images/heart3.png");
   return badScore, heart3;
 }
 }
