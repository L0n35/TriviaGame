let Q1 = [
  "What race is Admiral Ackbar?",
  "Mon Calamari",
  "Genosian",
  "Twi'lek",
  "Rodian",
  "A"
];

let Q2 = [
  "What type of droid is RD-D2?",
  "Battle",
  "Astromech",
  "Protocol",
  "Service",
  "B"
];

let Q3 = [
  "How many forms of communication does C-3PO know?",
  "Over 100,000",
  "Just under 2,000,000",
  "Every form of communication",
  "More than 7,000,000",
  "D"
];

let Q4 = [
  'Who is Anakin Skywalker\'s padawan in "The Clone Wars"?',
  "Padme Amidala",
  "Nahdar Vebb",
  "Ahsoka Tano",
  "Barriss Offee",
  "C"
];

let Q5 = [
  "Who was Obi-Wan Kenobi's Jedi master?",
  "Yoda",
  "Mace Windu",
  "Ki-Adi-Mundi",
  "Qui-Gon Jinn",
  "D"
];

question = document.getElementById("question");

buttonA = document.getElementById("optionA");
buttonB = document.getElementById("optionB");
buttonC = document.getElementById("optionC");
buttonD = document.getElementById("optionD");

correct = document.getElementById("correct");

var timeleft = 10;
var downloadTimer = setInterval(function() {
  document.getElementById("countdown").innerHTML =
    timeleft + " seconds remaining";
  timeleft -= 1;
  if (timeleft <= 0) {
    correct.innerHTML = "Out of time!";
    setTimeout(nextQuestion, 1500);
    timeleft = 10;
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }
}, 1000);

function displayQuiz() {
  question.innerHTML = ar[0];

  buttonA.innerHTML = ar[1];
  buttonB.innerHTML = ar[2];
  buttonC.innerHTML = ar[3];
  buttonD.innerHTML = ar[4];
}

function nextQuestion() {
  if (ar === Q1) {
    ar = Q2;
  } else if (ar === Q2) {
    ar = Q3;
  } else if (ar === Q3) {
    ar = Q4;
  } else if (ar === Q4) {
    ar = Q5;
  }
  displayQuiz();
  correct.innerHTML = "";
}

function game() {
  ar = Q1;
  displayQuiz();
  let score = 0;

  $(".option").show();
  $("#question").show();
  $("#correct").show();
  $("#countdown").show();
  $("#newGame").hide();
  $("#end").hide();

  function gameEnd() {
    if (ar === Q5) {
      $(".option").hide();
      $("#question").hide();
      $("#correct").hide();
      $("#countdown").hide();
      $("#newGame").show();
      $("#end").show();

      console.log("hi" + score);
      document.getElementById("end").innerHTML = "Score: " + score + "/5";

      document.getElementById("newGame").innerHTML = "Play Again";
      $("#newGame").on("click", function() {
        game();
        timeleft = 10;
        document.getElementById("countdown").innerHTML =
          timeleft + " seconds remaining";
      });
    }
  }

  $(".option").on("click", function() {
    value = $(this).attr("value");
    if (value === ar[5]) {
      console.log("Correct!");
      correct.innerHTML = "Correct!";
      score += 1;
      setTimeout(gameEnd, 1500);
      setTimeout(nextQuestion, 1500);
      timeleft = 10;
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";
    } else {
      correct.innerHTML = "Incorrect!";
      setTimeout(gameEnd, 1500);
      setTimeout(nextQuestion, 1500);
      timeleft = 10;
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining";

      console.log(timeleft);
    }
  });
}

game();
