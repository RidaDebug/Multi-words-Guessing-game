var words = ["APPLE", "ORANGE", "BANANA"]; 
var guesses = 6; 
var guessedLetters = []; 
var wordArrays = []; 


for (var i = 0; i < words.length; i++) {
  wordArrays.push([]);
  for (var j = 0; j < words[i].length; j++) {
    wordArrays[i].push("_");
  }
}

function guessLetter() {
  var guess = document.getElementById("guess").value.toUpperCase();
  if (guessedLetters.includes(guess)) {
    alert("You already guessed this letter!");
    return;
  }
  guessedLetters.push(guess);
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes(guess)) {
      for (var j = 0; j < words[i].length; j++) {
        if (words[i][j] === guess) {
          wordArrays[i][j] = guess;
        }
      }
    }
  }
  updateWordsDisplay();
}

function updateWordsDisplay() {
  for (var i = 0; i < words.length; i++) {
    document.getElementById("word" + (i + 1)).innerHTML =
      wordArrays[i].join(" ");
  }
}

updateWordsDisplay();
