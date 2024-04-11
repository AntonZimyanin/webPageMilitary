"use strict";


/**
 * Quiz
 * @param {string} name
 * @param {array} questions
 * @param {object} options
 *
 * options object supports these keys:
 *     shuffle {boolean} should the questions be shuffled before rendered?
 */
function Quiz(name, questions, options, renderToId) {
    this.name = name;
    this.questions = questions;
    this.options = options || {};
    this.renderToId = renderToId;
    this.create();
}


Quiz.prototype.getName = function() {
    return this.name;
}


Quiz.prototype.setName = function(name) {
    this.name = name;
    return this.name;
};


Quiz.prototype.getQuestions = function() {
    return this.questions
};


Quiz.prototype.setQuestions = function(questions) {
    this.questions = questions;
    return this.questions;
};


Quiz.prototype.addQuestion = function(question) {
    return this.questions.push(question);
};


Quiz.prototype.removeQuestion = function(question) {
    console.info("Remove question from the quiz");
    return this.questions;
};


Quiz.prototype.create = function() {
    var form = document.createElement("form"),
        submit = document.createElement("input"),
        self = this;

    const formRoot = document.querySelector(`#${this.renderToId}`);
    formRoot.innerHTML = "<h1>" + this.name + "</h1>";    
    // document.write("<h1>" + this.name + "</h1>");    
    
    submit.type = "submit";
    submit.value = "Ответить";

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        self.submit();
    })

    for (var i in this.questions) {
        form.appendChild(this.questions[i].render(this.options.shuffle || false));
    }

    form.appendChild(submit);
    formRoot.appendChild(form);
};


Quiz.prototype.submit = function() {
    var missing = 0,
        right = 0,
        wrong = 0;

    for (var q of this.getQuestions()) {
        var choice = null;

    // validate
        for (var o of q.getOptions()) {
            if (o.isSelected()) {
                choice = o;
            }
        }

    // evaluate
        if (!choice) { // skip evaluation
            q.renderMissing();
            missing += 1;
            continue;
        }

        if (!q.isRight(choice)) {
            q.renderWrong();
            wrong += 1;
        } else {
            q.renderRight();
            right += 1;
        }
    }

    // show result
    var result = new Result(missing, right, wrong, this.renderToId).render();
};

Quiz.prototype.destroy = function() {
    const formRoot = document.querySelector(`#${this.renderToId}`).parentElement;
    formRoot.innerHTML = '';
}
