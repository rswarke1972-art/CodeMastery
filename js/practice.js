// =========================
// INITIAL SETUP
// =========================
let language = localStorage.getItem("language") || "c";

let currentProblems = (language === "python") ? pythonProblems : problems;
let currentProblemIndex = 0;
let problem = currentProblems[currentProblemIndex];
let correctCode = problem.solution;
let currentIndex = 0;

const codeDisplay = document.getElementById("codeDisplay");
const userInput = document.getElementById("userInput");

// =========================
// LOAD PROBLEM
// =========================

function loadProblem(index) {
  currentProblemIndex = index;
  problem = currentProblems[index];
  correctCode = problem.solution;
  localStorage.setItem("lastProblemIndex", index);

  // ✅ NOW correct place
  document.getElementById("outputBox").textContent = problem.output || "";

  document.getElementById("problem").innerHTML = `
    <h3>${problem.title}</h3>
    <p>${problem.description}</p>
  `;

  userInput.value = "";
  currentIndex = 0;

  renderCode();
  showExplanation();
  updateNavButtons();
}

// =========================
// CREATE PROBLEM BUTTONS
// =========================

function nextProblem() {
  if (currentProblemIndex < currentProblems.length - 1) {
    loadProblem(currentProblemIndex + 1);
  }
}

function prevProblem() {
  if (currentProblemIndex > 0) {
    loadProblem(currentProblemIndex - 1);
  }
}

function updateNavButtons() {
  const [prevBtn, nextBtn] = document.querySelectorAll(".nav-buttons button");

  prevBtn.disabled = currentProblemIndex === 0;
  nextBtn.disabled = currentProblemIndex === currentProblems.length - 1;
}

// =========================
// RENDER CODE (CORE ENGINE)
// =========================

function renderCode() {
  let output = "";
  const userValue = userInput.value;

  for (let i = 0; i < correctCode.length; i++) {

    if (i < userValue.length) {
      if (userValue[i] === correctCode[i]) {
        output += `<span class="correct">${correctCode[i]}</span>`;
      } else {
        output += `<span class="wrong">${correctCode[i]}</span>`;
      }
    } 
    
    else if (i < currentIndex) {
      output += `<span class="correct">${correctCode[i]}</span>`;
    } 
    
    else {
      output += `<span class="blur">${correctCode[i]}</span>`;
    }
  }

  codeDisplay.innerHTML = output;
}

// =========================
// TYPING LOGIC
// =========================

userInput.addEventListener("input", (e) => {
  const value = e.target.value;

  let correctCount = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === correctCode[i]) {
      correctCount++;
    } else {
      break;
    }
  }

  currentIndex = correctCount;

  renderCode();
  showExplanation();
});

// =========================
// EXPLANATION SYSTEM
// =========================

function showExplanation() {
  let html = "<h3>Explanation:</h3>";

  const userLines = userInput.value.split("\n");
  const correctLines = correctCode.split("\n");

  for (let i = 0; i < userLines.length; i++) {
    if (userLines[i] === correctLines[i]) {
      html += `<div style="color:#22c55e">
        ${problem.explanation[i] || ""}
      </div>`;
    } else {
      break;
    }
  }

  document.getElementById("explanation").innerHTML = html;
}

function goBack() {
  window.location.href = "index.html";
}

// =========================
// INITIAL LOAD
// =========================

let savedIndex = localStorage.getItem("lastProblemIndex");

if (savedIndex !== null) {
  loadProblem(parseInt(savedIndex));
} else {
  loadProblem(0);
}