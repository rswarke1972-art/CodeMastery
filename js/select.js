let language = localStorage.getItem("language") || "c";

let currentProblems = [];

if (language === "c") {
  currentProblems = problems;
} else if (language === "python") {
  currentProblems = pythonProblems;
}

const container = document.getElementById("problemContainer");

currentProblems.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "problem-card";
  card.innerText = `${index + 1}. ${p.title}`;

  card.onclick = () => {
    localStorage.setItem("selectedProblem", index);
    window.location.href = "test.html";
  };

  container.appendChild(card);
});