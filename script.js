// script.js
const messages = [
  "doin' ya mom",
  "gameing",
  "*dies from cringe*",
  "brains r overrated",
  "does anybody even read this?",
  "i hate the british",
  "my face when it langoš",
  "what the dog doin'?",
  "professional sussy baka",
  "ah! so sorry!",
  "eats hot chip & lies",
  "eat, sleep, ponder my orb",
  "🌟",
  "coconut dogy! o mai gosh!!",
  "SOCKS ON THE CHAIR??!?!",
  "https://youtu.be/dQw4w9WgXcQ",
  "3am cheese eater",
  "i'm going to be switzerland",
  "why am i argentina",
  "more accurate than google translate",
  "e",
  "ඞ",
  "I do not think, therefore I ain't"
  "just a week away!",
  "hampter 🐹",
  "WTF!!! SEX??!?",
  "average cumfartcore enjoyer",
  "be gay do crimes",
  "eu4 my beloved",
  "susi baki",
  "hi welcome to chilly's",
  "mentally ill since 2004",
  "balls",
  "Jesus Wept",
  "being abused by Paradox Interactive",
  "i live in your walls",
  "8 bobux 😍",
  "aka. a buncha bones n' stuff",
  "you are a beta male sonic",
  "chimkin nuggie enjoyer",
  "be bi mk ppl cri",
  "Boe Jiden",
  "who asked: human edition",
  "I blame abby",
  "do not trust the owls",
  "Hi Interviewer! I'm swear I'm professional",
  "hookers and blackjack",
  "I will never buy a krueger coffee machine"
];

// Function to select a random message from the array
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// Update the message on page load
window.onload = function () {
  const messageElement = document.getElementById("message");
  const randomMessage = getRandomMessage();
  messageElement.textContent = randomMessage;
};

// contact popup
const contactBtn = document.querySelector(".contact_btn");
const contactPopup = document.getElementById("contactPopup");
const closePopupButton = document.getElementById("closePopup");

contactBtn.addEventListener("click", () => {
  contactPopup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  contactPopup.style.display = "none";
});
