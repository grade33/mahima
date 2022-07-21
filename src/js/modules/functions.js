// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

export function addFavorites() {
  document.querySelectorAll('.btn-favorites').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('btn-favorites_active')
    })
  })
}

export function isBurger() {
  let popup = document.createElement('div');
  popup.className = "popup";
  popup.innerHTML = `<div class="menu">
  <div class="container menu__container">
    <nav class="nav"><a class="nav__link" href="./catalog.html">Каталог</a><a class="nav__link" href="./blog.html">Блог</a>
      <button class="contacts-link nav__link" type="button">Контакты</button>
      <button class="nav__link" type="button">Дилерам</button>
    </nav>
    <hr class="hr">
    <div class="nav-acc"><a class="nav-acc-link" href="#">Помощь</a><a class="nav-acc-link" href="#">Регистрация</a><a class="nav-acc-link" href="#">Вход</a></div>
    <hr class="hr">
    <div class="header__tel-time"><a class="header__tel" href="tel:+88007774999">8 800 777-4-999</a><span class="header__time">7:00 – 22:00 МСК</span></div>
  </div>
</div>`
  const burgerBtn = document.querySelector('.burger')
  const menu = popup.querySelector('.menu')

  burgerBtn.addEventListener('click', () => {
    document.body.append(popup);
    setTimeout(() => {
      popup.classList.add('popup_active')
      document.body.parentElement.style.overflowY = 'hidden'
      burgerBtn.classList.add('burger_active')
      menu.classList.add('menu_active')
    }, 5);
  })

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      document.body.parentElement.style.overflowY = 'unset'
      burgerBtn.classList.remove('burger_active')
      menu.classList.remove('menu_active')
      popup.classList.remove('popup_active')
      setTimeout(() => {
        popup.remove()
      }, 300);
    }
  })
}

export function isSearch() {
  const search = document.querySelector('.search')
  const searchBtn = search.querySelector('.search__btn')
  const searchField = search.querySelector('.search__field')
  const header = search.closest('.header')
  searchBtn.addEventListener('click', () => {
    search.classList.add('search_active')
    header.querySelector('.header__logo').classList.add('visually-hidden')
    header.querySelector('.header__user-nav').classList.add('visually-hidden')
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) {
      search.classList.remove('search_active')
      searchField.value = ""
      setTimeout(() => {
        header.querySelector('.header__logo').classList.remove('visually-hidden')
        header.querySelector('.header__user-nav').classList.remove('visually-hidden')
      }, 500);
    }
  })
}

export function isAccordion() {
  document.querySelectorAll('.acc').forEach(acc => {
    const accBtn = acc.querySelector('.acc__trigger')
    const accPanel = acc.querySelector('.acc__panel')
    accBtn.addEventListener('click', function () {
      acc.classList.toggle('acc_active')
      if (accPanel.style.maxHeight) {
        accPanel.style.maxHeight = null;
      } else {
        accPanel.style.maxHeight = accPanel.scrollHeight + "px";
      }
    })
  })
}

export function isCounter() {
  document.querySelectorAll('.counter').forEach(counter => {
    const text = counter.querySelector('.counter__text');
    const minusBtn = counter.querySelector('.counter__btn_minus');
    const plusBtn = counter.querySelector('.counter__btn_plus');
    if (+text.innerHTML <= 1) {
      minusBtn.setAttribute("disabled", "disabled");
    }
    minusBtn.addEventListener('click', () => {
      if (+text.innerHTML == 2) {
        text.innerHTML = Number(--text.innerHTML)
        minusBtn.setAttribute("disabled", "disabled");
      } else {
        text.innerHTML = Number(--text.innerHTML)
      }
    })
    plusBtn.addEventListener('click', () => {
      minusBtn.removeAttribute("disabled", "disabled");
      text.innerHTML = Number(++text.innerHTML)
    })
  })
}

export function openContacts() {
  document.querySelectorAll('.contacts-link').forEach(link => {
    let popup = document.createElement('div');
    popup.className = "popup";
    popup.innerHTML = `<div class="modal">
    <section class="contacts modal__block">
      <div class="container modal__container">
        <button class="btn-close" type="button" aria-label="Закрыть"><img src="img/close-icon.svg" alt=""/></button>
        <h2 class="section-title modal__title">Контакты</h2>
        <div class="modal__link-wrap"><a class="modal__link" href="mailto:Mahima@info.ru">Mahima@info.ru</a><a class="modal__link" href="tel:+79221110500">+7-922-111-05-00</a></div>
        <div class="modal__form">
          <div class="modal__field-wrap">
            <input class="modal__field" type="text" placeholder="Имя">
            <input class="modal__field" type="email" placeholder="Email">
            <input class="modal__field" type="tel" placeholder="Телефон">
            <textarea class="modal__field modal__textarea" placeholder="Сообщение"></textarea>
          </div>
          <button class="btn modal__btn btn__green" type="submit">Обратный звонок</button>
        </div>
      </div>
    </section>
  </div>`
    link.addEventListener('click', () => {
      document.body.append(popup);
      setTimeout(() => {
        popup.classList.add('popup_active')
      }, 5);
    })
    popup.addEventListener('click', (e) => {
      if (!(!e.target.closest('.modal__block') || e.target.closest('.btn-close'))) return;
      popup.classList.remove('popup_active')
      setTimeout(() => {
        popup.remove()
      }, 300);
    })
  })
}
