const gobackButton = document.getElementById("go-back");
const clearscoresButton = document.getElementById("clear-scores");

const renderTableRow = (each) => {
  const name = each.name;
  const score = each.score;

  const tr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const scoreTd = document.createElement("td");

  nameTd.textContent = name;
  scoreTd.textContent = score;

  tr.append(nameTd, scoreTd);

  const tbody = document.getElementById("highScoresTableBody");

  tbody.append(tr);
};

const renderTable = () => {
  const scores = JSON.parse(localStorage.getItem("highScores"));

  scores.forEach(renderTableRow);
};
const goback = () => {
  window.location.href = "./index.html";
};

const clearscores = () => {
  localStorage.clear();
};

gobackButton.addEventListener("click", goback);
clearscoresButton.addEventListener("click", clearscores);
window.addEventListener("load", renderTable);
