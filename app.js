const button = document.getElementById("helloButton");
const messageBox = document.getElementById("messageBox");

const greetings = [
  "Hello there. The page is alive.",
  "Nice click. JavaScript says hi.",
  "Hello, world. Looking sharp today.",
  "CSS brought the outfit. JavaScript brought the confetti.",
];

let greetingIndex = 0;

function makeSparkle(x, y) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);

  window.setTimeout(() => sparkle.remove(), 720);
}

button.addEventListener("click", (event) => {
  messageBox.textContent = greetings[greetingIndex];
  greetingIndex = (greetingIndex + 1) % greetings.length;

  for (let i = 0; i < 10; i += 1) {
    const offsetX = (Math.random() - 0.5) * 110;
    const offsetY = (Math.random() - 0.5) * 50;
    makeSparkle(event.clientX + offsetX, event.clientY + offsetY);
  }
});
