const container = document.getElementById("problemContainer");

problems.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "problem-card";
  card.innerText = `${index + 1}. ${p.title}`;

  card.onclick = () => {
    localStorage.setItem("selectedProblem", index);
    window.location.href = "test.html";
  };

  container.appendChild(card);
});