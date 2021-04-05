const gobackButton = document.getElementById("go-back");
const clearscoresButton = document.getElementById("clear-scores");
const tbody = document.getElementById("highScoresTableBody");

const renderTableRow = (each) => {
  const name = each.name;
  const score = each.score;

  const tr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const scoreTd = document.createElement("td");

  nameTd.textContent = name;
  scoreTd.textContent = score;

  tr.append(nameTd, scoreTd);

  tbody.append(tr);
};

const getScoresFromLocalStorage = () => {
  const scores = JSON.parse(localStorage.getItem("highScores"));

  if (scores === null) {
    return [];
  } else {
    return scores;
  }
};

const renderTable = () => {
  const scores = getScoresFromLocalStorage();

  tbody.innerHTML = "";

  scores.forEach(renderTableRow);
};
const goback = () => {
  window.location.href = "./index.html";
};

const clearscores = () => {
  localStorage.clear();
  renderTable();
};

gobackButton.addEventListener("click", goback);
clearscoresButton.addEventListener("click", clearscores);
window.addEventListener("load", renderTable);
