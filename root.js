const root = document.querySelector("#root");

function render(func) {
  return `
    <div class="container-xxl position-relative bg-white d-flex p-0">
      <!-- Sidebar Start -->
      <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-light navbar-light">
          <a href="#index" onclick='navigateTo("index")' class="navbar-brand mx-4 mb-3">
            <h3 class="text-dark">Кафедра ПВО</h3>
          </a>

          <div class="navbar-nav w-100">
            <a href="#index" onclick='navigateTo("index")' class="nav-item nav-link active"
              ><i class="fa fa-tachometer-alt me-2"></i>Главная</a
            >
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" data-bs-toggle="dropdown"
                ><i class="fa fa-laptop me-2"></i>Теоретический раздел</a
              >
              <div class="dropdown-menu bg-transparent border-0">
                <a href="#bacis-book" onclick='navigateTo("bacicLiteratur")' class="dropdown-item"
                  >Основная литература</a
                >
                <a href="#addition-books" onclick='navigateTo("additionalLiterature")' class="dropdown-item"
                  >Дополнительная литература</a
                >
                <a href="#electronic-books" onclick='navigateTo("electronicLiterature")' class="dropdown-item"
                  >Электронные пособия</a
                >
              </div>
            </div>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link" data-bs-toggle="dropdown"
                ><i class="fa fa-laptop me-2"></i>Практическкий раздел</a
              >
              <div class="dropdown-menu bg-transparent border-0">
                <a href="button.html" class="dropdown-item">Симуляторы 1</a>
                <a href="typography.html" class="dropdown-item">Симуляторы 2</a>
                <a href="element.html" class="dropdown-item">Симуляторы 3</a>
              </div>
            </div>

            <a
              href="javascript-quiz-library/root.html"
              class="nav-item nav-link"
              ><i class="fa fa-th me-2"></i>Раздел контроля знаний</a
            >

            <div class="nav-item dropdown">
              <a href="#" class="nav-link" data-bs-toggle="dropdown"
                ><i class="fa fa-laptop me-2"></i>Видеоматериалы</a
              >
              <div class="dropdown-menu bg-transparent border-0">
                <a href="#video" onclick='navigateTo("video")' class="dropdown-item">Видеоматериалы</a>
              </div>

              <a
              onclick='navigateTo("lectionCourse")'
              href="#lection-course"
              class="nav-item nav-link"
              ><i class="fa fa-th me-2"></i>Курс лекций</a
            >

            </div>
          </div>
        </nav>
      </div>
      <!-- Sidebar End -->

      <!-- Content Start -->
      <div class="content">
        <!-- Navbar Start -->
        <nav
          class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"
        >
          <a href="#" class="sidebar-toggler flex-shrink-0">
            <i class="fa fa-bars"></i>
          </a>

          <div class="navbar-nav align-items-center ms-auto">
            <div class="nav-item dropdown">
              <a href="#index" onclick='navigateTo("index")' class="nav-link"> Главная </a>
            </div>
            <div class="nav-item dropdown">
              <a href="#about" onclick='navigateTo("about")' class="nav-link" data-bs-toggle="dropdown">
                <span class="d-none d-lg-inline-flex">Справка</span>
              </a>
            </div>
          </div>
        </nav>
        <!-- Navbar End -->
        <!-- Blank Start -->
        <div class="container-fluid pt-4 px-4">
          <div
            class="row bg-light rounded align-items-center justify-content-center mx-0"
          >
            <div class="container mt-4">
              <header class="text-center mb-5">
                <h3>МИНИСТЕРСТВО ОБОРОНЫ РЕСПУБЛИКИ БЕЛАРУСЬ</h3>
                <h4>
                  КАФЕДРА ПРОТИВОВОЗДУШНОЙ ОБОРОНЫ ВОЕННОГО ФАКУЛЬТЕТА В
                  БЕЛОРУССКОМ ГОСУДАРСТВЕННОМ УНИВЕРСИТЕТЕ
                </h4>
                <img
                  src="images/bsu_sign.png"
                  width="274"
                  height="200"
                  class="img-fluid mb-4"
                />
              </header>

              ${func()}

              <div class="row">
                <div class="col text-left">
                  <p class="h6" style="font-weight: normal; font-size: 1.1rem">
                    Учебно-методический комплекс по дисциплине
                  </p>
                  <p class="h6" style="font-weight: normal; font-size: 1.1rem">
                    <span class="">Военно-техническая подготовка</span>
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <p class="text-muted" style="font-size: 13.5pt">
                    Для направления/специальности:
                    <span class="text-primary font-italic">ВУС 043200</span>
                  </p>
                  <p class="text-muted" style="font-size: 13.5pt">
                    Рассмотрено и утверждено на заседании кафедры от ____.
                    Протокол №
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Start -->
        <div id="footer">
          <div class="container">
            <footer
              class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
            >
              <p class="col-md-4 mb-0 text-muted">© 2024 Company, Inc</p>

              <a
                href="/"
                class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              >
                <svg class="bi me-2" width="40" height="32">
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>

              <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item">
                  <a href="#index" onclick='navigateTo("index")' class="nav-link px-2 text-muted"
                    >Главная</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#about" onclick='navigateTo("about")' class="nav-link px-2 text-muted"
                    >Справка</a
                  >
                </li>
              </ul>
            </footer>
          </div>
        </div>
        <!-- Footer End -->
      </div>
      <!-- Content End -->
    </div>`;
}

function renderIndex() {
  return `
            <div class="row">
                <div class="col text-left">
                  <h5>
                    <span class="text-dark">Автор:</span> старший преподаватель
                    кафедры ПВО военного факультета БГУ подполковник Романенко
                    Константин Олегович
                  </h5>
                </div>
            </div>
    `;
}

function renderAbout() {
  return `
              <div class="row">
                  <div class="col text-left">
                    <h5>
                      О нас
                    </h5>
                  </div>
              </div>
      `;
}

function renderBacisBooks() {
  return `
    <div class="row m-3 justify-content-space-between">
                <div class="col-md-4 mb-3">
                  <div class="card" style="width: 18rem">
                    <img
                      class="card-img-top"
                      src="images/books/c-300-nevky.jpg"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Невский бастион</h5>
                      <p>Зенитная ракетная система С-300</p>
                      <p>Автор: С.М. Ганин и А.М. Карпенко</p>
                      <p>Издательство: Гангут</p>
                      <p>Год издания: 2001</p>
                      <a href="./books/c-300-nevky.pdf" class="btn btn-primary"
                        >Читать</a
                      >
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3">
                  <div class="card" style="width: 18rem">
                    <img
                      class="card-img-top"
                      src="images/books/с-300-chramov.png"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">C-300</h5>
                      <p>Зенитные ракетные системы C-300</p>
                      <p>Автор: Храмов, Борис Андреевич, С.А. ЯКОВЛЕВ</p>
                      <p>Издательство: Санкт-Петербург</p>
                      <p>Год издания: 2012</p>
                      <a
                        href="./books/с-300-chramov.pdf"
                        class="btn btn-primary"
                        >Читать</a
                      >
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 18rem">
                    <img
                        class="card-img-top"
                        src="./images/books/с-300-web-page-army-today.png"
                        alt="Card image cap"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                        С-300
                        </h5>
                        <p>Зенитные ракетные системы C-300</p>
                        <p>Зенитно-ракетные комплексы С-300, характеристика</p>
                        <p>© 2024 Армия Cегодня - сайт про военное дело</p>
                        <a href="https://army-today.ru/tehnika/c-300" class="btn btn-primary"
                        >Читать</a
                        >
                    </div>
                </div>
              </div>

              </div>
    `;
}

function renderElectronicBooks() {
  return ` 
    <div class="row m-3 justify-content-space-between">
                <div class="col-md-4 mb-3">
                  <div class="card" style="width: 18rem">
                    <img
                      class="card-img-top"
                      src="images/electronic/c-300-military-web-paga.png"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Зенитная ракетная система С-300</h5>
                        <p>С-300 «Фаворит»</p>
                        <p>Армия Росии</p>
                        <p>Издательство: Гангут</p>
                      <a href="https://studylib.ru/doc/2715386/tema-N-2.-osnovy-postroeniya-zrs." class="btn btn-primary">Читать</a>
                    </div>
                  </div>
                </div>

                  <div class="col-md-4 mb-3">
                    <div class="card" style="width: 18rem">
                      <img
                        class="card-img-top"
                        src="images/electronic/osnovy-postroeniya.png"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Основы построения ЗРС</h5>
                          <p>Основы построения ЗРС</p>
                          <p>Тема № 2</p>
                        <a href="https://studylib.ru/doc/2715386/tema-N-2.-osnovy-postroeniya-zrs." class="btn btn-primary">Читать</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 mb-3">
                    <div class="card" style="width: 18rem">
                        <img
                            class="card-img-top"
                            src="images/electronic/c-300-bel-service.png"
                            alt="Card image cap"
                        />
                        <div class="card-body">
                            <h5 class="card-title">С–300</h5>
                            <p>Зенитные ракетные системы  </p>
                            <p>Тактико-технические характеристики</p>
                            <a 
                            href="https://www.bvpservice.by/catalog/vooruzhenie-voysk-pvo/zenitnyy-raketnyy-kompleks-s-300" 
                            class="btn btn-primary">Читать</a>  
                        </div>
                    </div>
                  </div>
              </div>
    `;
}

function renderVideo() {
  return `
    <div class="d-flex justify-content-center gap-sm-1">
    <div class="row">
        <div class="col">
        <video
            id="my-video"
            class="video-js vjs-16-9"
            controls
            preload="auto"
            width="auto"
            height="264"
            poster="images/video/calc-work-c-300.png"
            data-setup="{}"
        >
            <source
            src="video/calculating-work-c-300.mp4"
            type="video/mp4"
            />
            <p class="vjs-no-js">
            To view this video please enable JavaScript, and
            consider upgrading to a web browser that
            <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                >supports HTML5 video</a
            >
            </p>
        </video>
        </div>
    </div>

    <div class="row">
        <div class="col">
        <video
            id="my-video"
            class="video-js vjs-16-9"
            controls
            preload="auto"
            width="auto"
            height="264"
            poster="images/video/shooting-с-300.png"
            data-setup="{}"
        >
            <source src="video/shooting-c-300.mp4" type="video/mp4" />
            <p class="vjs-no-js">
            To view this video please enable JavaScript, and
            consider upgrading to a web browser that
            <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                >supports HTML5 video</a
            >
            </p>
        </video>
        </div>
    </div>
    </div>

    <div class="d-flex justify-content-center gap-sm-1 mb-lg-4">
    <div class="row">
        <div class="col">
        <video
            id="my-video"
            class="video-js vjs-16-9"
            controls
            preload="auto"
            width="auto"
            height="264"
            poster="images/video/calc-work-c-300.png"
            data-setup="{}"
        >
            <source
            src="video/calculating-work-c-300.mp4"
            type="video/mp4"
            />
            <p class="vjs-no-js">
            To view this video please enable JavaScript, and
            consider upgrading to a web browser that
            <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                >supports HTML5 video</a
            >
            </p>
        </video>
        </div>
    </div>

    <div class="row">
        <div class="col">
        <video
            id="my-video"
            class="video-js vjs-16-9"
            controls
            preload="auto"
            width="auto"
            height="264"
            poster="images/video/shooting-с-300.png"
            data-setup="{}"
        >
            <source src="video/shooting-c-300.mp4" type="video/mp4" />
            <p class="vjs-no-js">
            To view this video please enable JavaScript, and
            consider upgrading to a web browser that
            <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                >supports HTML5 video</a
            >
            </p>
        </video>
        </div>
    </div>
    </div>
    `;
}

function renderlectionCourse() { 
  return `
    <h1>lectionCourse</h1>
  `;
}

function renderHead() {
  return `
    <!-- Icon Font Stylesheet -->
    <link href="css/fontawesome/css/all.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet" />    
    `;
}

const pages = {
  index: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderIndex),
  },

  about: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderAbout),
  },

  bacicLiteratur: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderBacisBooks),
  },

  additionalLiterature: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderBacisBooks),
  },

  electronicLiterature: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderElectronicBooks),
  },

  video: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderVideo),
  },
  
  lectionCourse: {
    title: "Образовательный комплекс",
    head: renderHead(),
    content: render(renderlectionCourse),
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

navigateTo("index");
