var starter = false;
var color = ["red", "blue", "yellow", "green"];
var computerColor = [];
var gamerColor = [];
var level = 1;

$(document).keypress(function () {
  if (!starter) {
    starter = true;

    computerPlay();
  }
});

// To level up and push random color to computer player.and level up h1
function computerPlay() {
  var number = randomNumber();
  $("h1").html("LEVEL " + level);
  level++;
  computerColor.push(color[number]);
  setTimeout(() => {
    btnPressAnimation(color[number]);
  }, 400);

  console.log("to press:  " + computerColor);
}

//For gamer play to press button.And also checking for level up or restart.

$(".cbox").click(function () {
  gamerColor.push(this.id);
  btnPressGamer(this.id);
  buttonSound(this.id);
  if (
    gamerColor[gamerColor.length - 1] === computerColor[gamerColor.length - 1]
  ) {
    if (gamerColor.length === computerColor.length) {
      gamerColor = [];
      var leveupsound = new Audio("./sounds/levelup.mp3");
      setTimeout(function () {
        leveupsound.play();
      }, 200);
      setTimeout(computerPlay, 200);
    }
  } else {
    restarter();
    gameOver();
  }
});

// function for random number
function randomNumber() {
  var a = Math.floor(Math.random() * color.length);
  return a;
}

// for button press animation for computer player.
function btnPressAnimation(col) {
  $("#" + col).addClass("btncEffect");
  setTimeout(function () {
    $("#" + col).removeClass("btncEffect");
  }, 500);
}

//for button press animation for gamer
function btnPressGamer(col) {
  $("#" + col).addClass("btngEffect");
  setTimeout(function () {
    $("#" + col).removeClass("btngEffect");
  }, 400);
}

//for restart game.
function restarter() {
  computerColor = [];
  gamerColor = [];
  level = 1;
  $("h1").html("GAME OVER. PRESS KEY TO RESTART");
  starter = false;
}

//for game over effect
function gameOver() {
  $("body").addClass("fail-effect");
  setTimeout(function () {
    $("body").removeClass("fail-effect");
  }, 600);

  var gameOveraudio = new Audio("./sounds/gameover.mp3");
  gameOveraudio.play();
}
// for button sound()
function buttonSound(color) {
  var btnS = new Audio("sounds/" + color + ".mp3");
  btnS.play();
}
