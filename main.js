const weightedList = vocabList.flatMap(item => Array(item.frequency).fill(item));

const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");

let knownSet = new Set();
let availableList = [];

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

document.getElementById("nextButton").addEventListener("click", showRandomCard);

// initial load
showRandomCard();

function updateAvailableList() {
  availableList = vocabList
    .filter(item => !knownSet.has(item.greek))
    .flatMap(item => Array(item.frequency).fill(item));
}

function showRandomCard() {
  updateAvailableList();

  if (availableList.length === 0) {
    cardFront.textContent = "🎉 恭喜！";
    cardBack.innerHTML = "你已經記住所有單字了！";
    flashcard.classList.remove("flipped");
    return;
  }

  const item = availableList[Math.floor(Math.random() * availableList.length)];
  flashcard.dataset.current = item.greek;
  cardFront.textContent = item.greek;
  cardBack.innerHTML = `<div class="back-content">${item.definition}</div>`;

  flashcard.classList.remove("flipped");
}

document.getElementById("markKnown").addEventListener("click", () => {
  const currentWord = flashcard.dataset.current;
  if (currentWord) {
    knownSet.add(currentWord);
    showRandomCard();
  }
});

// 支援多個 modal 開關
document.querySelectorAll(".openGrammar").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "block";
  });
});

document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.onclick = () => {
    closeBtn.closest(".modal").style.display = "none";
  };
});

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};
