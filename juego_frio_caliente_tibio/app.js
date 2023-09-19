const targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 5;

document.getElementById("checkButton").addEventListener("click", function() {
  const guess = parseInt(document.getElementById("guess").value);
  const feedbackElement = document.getElementById("feedback");
  const remainingAttemptsElement = document.getElementById("remainingAttempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedbackElement.textContent = "Ingresa un número válido entre 1 y 100.";
    return;
  }

  remainingAttempts--;

  if (guess === targetNumber) {
    feedbackElement.textContent = "¡Felicidades! ¡Has adivinado el número.";
    feedbackElement.style.color = "green";
    document.getElementById("checkButton").disabled = true;
  } else if (remainingAttempts === 0) {
    feedbackElement.textContent = `¡Agotaste tus intentos! El número era ${targetNumber}.`;
    feedbackElement.style.color = "red";
    document.getElementById("checkButton").disabled = true;
  } else {
    const difference = Math.abs(targetNumber - guess);
    let feedback = "";

    if (difference <= 10) {
      feedback = "Caliente";
    } else if (difference <= 20) {
      feedback = "Tibio";
    } else {
      feedback = "Frío";
    }

    feedbackElement.textContent = feedback;
    remainingAttemptsElement.textContent = remainingAttempts;
  }
});
