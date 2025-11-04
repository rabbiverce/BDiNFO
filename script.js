// ===============================
// BACKGROUND IMAGE SWITCH
// ===============================
const hero = document.querySelector(".hero");
const bgButton = document.getElementById("bg-switch");

// Background class list
const bgClasses = ["default", "flag1", "flag2", "flag3"];
let currentIndex = 0;

bgButton.addEventListener("click", () => {
  hero.classList.remove(...bgClasses);

  currentIndex = (currentIndex + 1) % bgClasses.length;

  hero.classList.add(bgClasses[currentIndex]);
});


// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});


// ===============================
// SIMPLE CHAT
// ===============================
const chatForm = document.getElementById("chat-form");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

chatForm.addEventListener("submit", () => {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "user");

  setTimeout(() => {
    addMessage("✅ বুঝলাম ভাই! আরও develop করবো? 😎", "bot");
  }, 500);

  chatInput.value = "";
});

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "message " + type;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
