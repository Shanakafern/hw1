// GLOBAL
const slotOutput = $("#output"); //html

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

$("#btn").click(startSpin); //starts function startSpin for button

function startSpin() {
  function fadeInLastImg() {
    let img = $("#slot1 .imgspin:first"); //select the first thing with imgspin (which is 7)
    img.hide(); //sets 7 to display none
    img.remove(); // removes it from the page
    $("#slot1").append(img); //sends it back
    img.fadeIn(30); //fade back in //fadeIn HAS A DEFAULT PERAMATER OF 400
  }
  // Make sure line 11 is less than 1/3 of the amount of line 14
  const fadeId = setInterval(fadeInLastImg, 100); //1 second between images cycling through
  //creating a setTimeout to stop fadeInLastImg
  setTimeout(function () {
    clearInterval(fadeId); // stops setInterval
  }, getRandomIntInclusive(2000, 4000)); // stops between 3-8 seconds
}
