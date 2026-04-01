document.addEventListener("DOMContentLoaded", function() {
let language = localStorage.getItem("language") || "c";

let currentProblems = (language === "python") ? pythonProblems : problems;
  // =========================
  // INITIAL SETUP
  // =========================

  let currentProblemIndex = 0;
  let problem = currentProblems[currentProblemIndex];

  const userCode = document.getElementById("userCode");
  const resultDiv = document.getElementById("result");

  // =========================
  // LOAD PROBLEM
  // =========================

  function loadProblem(index) {
    currentProblemIndex = index;
    problem = currentProblems[index];
    localStorage.setItem("lastProblemIndex", index);

    document.getElementById("problem").innerHTML = `
      <h3>${problem.title}</h3>
      <p>${problem.description}</p>
    `;

    userCode.value = "";
    resultDiv.innerHTML = "";
    document.getElementById("explanation").innerHTML = "";

    updateNavButtons();
  }

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
    const buttons = document.querySelectorAll(".nav-buttons button");
    if (buttons.length < 2) return;

    buttons[0].disabled = currentProblemIndex === 0;
    buttons[1].disabled = currentProblemIndex === currentProblems.length - 1;
  }

  // =========================
  // CHECK CODE LOGIC
  // =========================

  window.checkCode = function() {
    console.log("Check clicked ✅");

    const userLines = userCode.value.split("\n");
    const correctLines = problem.solution.split("\n");

    let explanationHTML = "<h3>Explanation:</h3>";
    let allCorrect = true;

    for (let i = 0; i < correctLines.length; i++) {
      const userLine = userLines[i]?.trim() || "";
      const correctLine = correctLines[i]?.trim() || "";

      if (userLine === correctLine) {
        explanationHTML += `<div style="color:#22c55e">
          ${problem.explanation[i] || ""}
        </div>`;
      } else {
        allCorrect = false;
      }
    }

    let status = allCorrect
      ? `<h3 style="color:#22c55e">✅ Correct Code!</h3>`
      : `<h3 style="color:#ef4444">❌ Try Again</h3>`;

    document.getElementById("outputBox").textContent =
      allCorrect ? problem.output || "" : "";

    const correctCodeHTML = `
      <h4>Correct Code:</h4>
      <pre style="color:#38bdf8; background:black; padding:10px; border-radius:6px;">
${problem.solution}
      </pre>
    `;

    resultDiv.innerHTML = status + correctCodeHTML;
    document.getElementById("explanation").innerHTML = explanationHTML;
  };

  window.nextProblem = nextProblem;
  window.prevProblem = prevProblem;
  window.goBack = function() {
    window.location.href = "index.html";
  };

  let selected = localStorage.getItem("selectedProblem");

if (selected !== null) {
  loadProblem(parseInt(selected));
  localStorage.removeItem("selectedProblem"); // 🔥 important
} else {
  let savedIndex = localStorage.getItem("lastProblemIndex");

  if (savedIndex !== null) {
    loadProblem(parseInt(savedIndex));
  } else {
    loadProblem(0);
  }
}

});