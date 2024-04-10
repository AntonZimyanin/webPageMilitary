"use strict";

/**
 * @param {integer} missing
 * @param {integer} right
 * @param {integer} wrong
 */
function Result(missing, right, wrong, renderToId) {
  this.html = document.createElement("table");
  let args = [missing, right, wrong];
  this.renderToId = renderToId;
  var front_labels = ["Пропущено", "Правильно", "Неправильно"];
  var dom_labels = ["Missing", "Right", "Wrong"];
  var name = globalState.name;

  var tr = document.createElement("tr");

  // Create and append the name label and score
  var nameLabel = document.createElement("td");
  nameLabel.className = "name-label";
  nameLabel.innerHTML = name + ", ваш результат: ";
  tr.appendChild(nameLabel);

  var nameScore = document.createElement("td");
  nameScore.className = "name-label";
  nameScore.innerHTML = null;
  tr.appendChild(nameScore);

  // Create and append the other labels and scores
  for (var i = 0; i < args.length; i += 1) {
    var label = document.createElement("td");
    label.className = dom_labels[i].toLowerCase() + "-label";
    label.innerHTML = front_labels[i];
    tr.appendChild(label);

    var score = document.createElement("td");
    score.className = dom_labels[i].toLowerCase() + "-score";
    score.innerHTML = args[i];
    tr.appendChild(score);
  }

  var ticketLabel = document.createElement("td");
  ticketLabel.className = "next-ticket-label";
  ticketLabel.innerHTML = `<a onclick="reloadQuizPage();" href="#">следующий вопрос</a>`;
  tr.appendChild(ticketLabel);

  var ticketScore = document.createElement("td");
  ticketScore.className = "name-label";
  ticketScore.innerHTML = null;
  tr.appendChild(ticketScore);

  this.html.appendChild(tr);
}

Result.prototype.render = function () {
  let container = document.getElementById(this.renderToId);

  var old = document.getElementsByTagName("table")[0];
  if (old) {
    container.removeChild(old);
  }

  container.appendChild(this.html);

  return this;
};
