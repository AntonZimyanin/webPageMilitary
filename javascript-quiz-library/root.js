const root = document.querySelector("#root");
let globalState = {};

function renderQuiz() {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var inx = random(0, 4);
  var qNum = getQuizNumber();
  var quiz = new Quiz(
    'Раздел контроля знаний<p class="p__exam__ticket">Билет '
      .concat("", qNum)
      .concat("", ' </p> <p class="p__exam__ticket">')
      .concat("", globalState.name)
      .concat("", "</p><p class='p__home__page__go'><a ")
      .concat(
        "",
        `onclick='navigateTo("quiz")' class='a__home__page__go' href='./../root.html'>вернуться на главную</a></p>`
      ),
    questions[qNum - 1],
    { shuffle: true },
    "quiz"
  );
  globalState.quiz = quiz;
}

function renderQuizNumber() { 
  var qNum = '';
  for (var i = 0; i < 24; i++) {
    
    qNum += `<li><a class="dropdown-item" href="#">Тест s${i + 1}</a></li>`;
  }
  return qNum;
}

const pages = {
  quiz: {
    title: "Раздел контроля знаний",
    head:`
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="css/form.css" />
    <link rel="stylesheet" type="text/css" media="print" href="css/print.css" />
  `,
    content: `<div><div id="quiz"></div></div>`,
    scripts: [
      {
        content: `renderQuiz();`,
      },
    ],
  },
  form: {
    title: "Раздел контроля знаний",
    head: `
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/input.page.css" />


    `
    ,
    content: `
    
    <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../images/bsu_sign.png" class="img-fluid" alt="Sample image" />
      </div>
  
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onsubmit='auth();' action="#">
  
          <p class="lead fw-normal mb-0 me-3">Введите ваше ФИО</p>
  
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="name" id="nameOfStudent" class="form-control form-control-lg"
              placeholder="Алексей Алексеев Алексеевич" required />
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
            <a href="#./qiuz" type="submit" onclick='auth()' class="btn btn-primary">Перейти к тестам</a>
          </div>
        </form>

        <br>
        <div id="dropdown" class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Выбрать тест
          </a>

          <ul id="dropdown-menu" class="dropdown-menu scroll-list" aria-labelledby="dropdownMenuLink">
            ${renderQuizNumber()}
           
            <li><a class="dropdown-item" href="#">Тест 11 Тест 1Тест 1Тест 1Тест 1Тест 1Тест 1Тест 1Тест 1Тест 1Тест 1</a></li>
          </ul>
        </div>

        <br>
        <p>Номер теста по умолчанию: ${getQuizNumber() + 1} </p>




        
      </div>

      
    </div>
      
    </div>
  </div>
        `,
  },
  
};

function navigateTo(pageId) {
  const page = pages[pageId];

  if (page.head) {
    const head = document.querySelector("head");
    head.innerHTML = page.head;
  }

  if (page.title) {
    document.title = page.title;
  }

  setContent(page.content);

  if (page.scripts) {
    page.scripts.forEach((script) => {
      const scriptElement = document.createElement("script");

      if (script.path) {
        scriptElement.src = script.path;
      } else {
        scriptElement.innerHTML = script.content;
      }

      root.appendChild(scriptElement);
    });
  }
}

function setContent(content) {
  root.innerHTML = content;
}

function setName() {
  const name = document.getElementById("nameOfStudent").value;

  if (!name) {
    return false;
  }

  globalState.name = name;

  return true;
}

function auth() {
  if (!setName()) {
    return;
  }
  navigateTo("quiz");
}


function setQuizNumber() { 
  var getParentAnchor = function (element) {
    while (element !== null) {
      if (element.tagName && element.tagName.toUpperCase() === "A") {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  };
  
  document.querySelector("#dropdown-menu").addEventListener('click', function(e) {
    var anchor = getParentAnchor(e.target);
    if(anchor !== null) {

      var quizNumberLabel = anchor.textContent;
      var quizNumber = quizNumberLabel.split(" ")[1];

      console.log(quizNumber);
      globalState.quizNumber = quizNumber;

    }
  }, false);


  
}


function getQuizNumber() {
  var quizNumber = globalState.quizNumber;
  if (quizNumber === undefined) {
    return 0;
  }
  return quizNumber;
}

navigateTo("form");
setQuizNumber();