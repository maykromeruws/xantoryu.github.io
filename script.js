let messages = [
    "Please increase your device's volume. Touch the flower first before you proceed, my love.",
    "Hi, love! Merry Christmas! 🎄 It's our 2nd year of celebrating Christmas together.",
    "And here's to more Christmases to be celebrated by us together! ✨",
    "My love, I couldn't begin or end a year without you.",
    "Anticipating being with you is what I cherish each year,",
    "and I eagerly look forward to many more decades together.",
    "You are the greatest gift I could ask for,",
    "both at Christmas and the New Year.",
    "I can't fathom a life without you, Shine Carolyn Garcia-Romero.",
    "Please hover your cursor over the flower.",
    "It beats just like my heart does when I'm overwhelmed, —",
    "as your beauty takes my breath away.",
    "I fucking love you so much, baby.",
    "Even Melo-FUCKING-dy and Kuro-FUCKING-mi can't help but smile—",
    "knowing the depth of my love for you. 💖",
    "I cherish being with you eternally, through this life and the next.",
    "I love you across every universe.",
    "Thank you for everything, my love.",
    "Next time, we'll get to experience this snow in Japan together.",
    "あなたと一緒なら、何も怖くないです。",
    "(Anata to issho nara, nanimo kowakunai desu.)",
    "which means—",
    "'When I'm with you, I'm not afraid of anything.'",
    "When you're afraid of what tomorrow holds, I'll be the first to peek in.",
    "We will face the coming years together, and I will protect your back.",
    "Merry Christmas and a Happy New Year, my love! 🎄🎉",
    "I love you so much! 🖤",
    "🎄🎁💖✨    🎉🎆🎇🥂"
];

let currentIndex = 0;

function changeMessage() {
  // Display the current message
  document.getElementById('message').innerText = messages[currentIndex];
}

function previousMessage() {
  // Display the previous message
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  changeMessage();
}

function nextMessage() {
  // Display the next message
  currentIndex = (currentIndex + 1) % messages.length;
  changeMessage();
}

// Initial display of message
changeMessage();

var snowfallTriggered = false; // Flag to track if snowfall has been triggered

function playAudio() {
  var audio = document.getElementById("backgroundAudio");
  audio.play();

  if (!snowfallTriggered) {
    snowfallTriggered = true; // Set the flag to true after triggering snowfall

    // Generate snowflakes
    var snowfallDiv = document.getElementById("snowfall");
    for (var i = 0; i < 50; i++) {
      var snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";
      snowfallDiv.appendChild(snowflake);
    }
  }
}