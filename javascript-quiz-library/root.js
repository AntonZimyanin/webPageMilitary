const root = document.querySelector("#root");
let globalState = {};

function renderQuiz() {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var inx = random(0, 4);
  var quiz = new Quiz(
    'Раздел контроля знаний<p class="p__exam__ticket">Билет '
      .concat("", inx + 1)
      .concat("", ' </p> <p class="p__exam__ticket">')
      .concat("", globalState.name)
      .concat("", "</p><p class='p__home__page__go'><a ")
      .concat(
        "",
        `onclick='navigateTo("quiz")' class='a__home__page__go' href='./../root.html'>вернуться на главную</a></p>`
      ),
    questions[inx],
    { shuffle: true },
    "quiz"
  );
  globalState.quiz = quiz;
}

const pages = {
  quiz: {
    title: "Раздел контроля знаний",
    head: `
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
    head: `<link rel="stylesheet" href="../css/bootstrap.min.css" />`,
    content: `
            <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img
                src="../images/bsu_sign.png"
                class="img-fluid"
                alt="Sample image"
                />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onsubmit='auth();' action="#">
                
                <p class="lead fw-normal mb-0 me-3">Введите ваше имя</p>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                    type="name"
                    id="nameOfStudent"
                    class="form-control form-control-lg"
                    placeholder="Алексей Алексеев"
                    required
                    />
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                    <a
                    href="#./qiuz"
                    type="submit"
                    onclick='auth()'
                    class="btn btn-primary"
                    >Перейти к тестам</a>
                </div>
                </form>
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

const reloadQuizPage = () => {
  globalState.quiz.destroy();

  navigateTo("quiz");
};

navigateTo("form");
