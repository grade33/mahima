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

export function isBurger() {
  const burgerBtn = document.querySelector('.burger')
  const popup = document.querySelector('.popup-menu')
  const menu = popup.querySelector('.menu')

  burgerBtn.addEventListener('click', () => {
    document.body.parentElement.style.overflowY = 'hidden'
    burgerBtn.classList.add('burger_active')
    popup.classList.add('popup-menu_active')
    menu.classList.add('menu_active')
  })

  menu.querySelectorAll('.modal-link').forEach(link => {
    popup.addEventListener('click', (e) => burgerClose(e))
    link.addEventListener('click', (e) => burgerClose(e))
  })
  function burgerClose(e) {
    if (e.target.closest('.menu') && !e.target.closest('.modal-link')) return;
    document.body.parentElement.style.overflowY = 'unset'
    burgerBtn.classList.remove('burger_active')
    popup.classList.remove('popup-menu_active')
    menu.classList.remove('menu_active')
  }
}

export function openSectionModal() {
  const menuActivePopup = document.querySelector('.popup-menu_active')
  const popup = document.querySelector('.popup');
  const modal = popup.querySelector('.modal');

  document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', () => {
      const section = link.classList.contains('contact-link') ? modal.querySelector('.contacts') :
        link.classList.contains('diller-link') ? modal.querySelector('.diller') :
        link.classList.contains('sign-in-link') ? modal.querySelector('.sign-in') :
        null

      popup.classList.add('popup_active')
      section.classList.add('modal__block_active')

      popup.addEventListener('click', (e) => {
        if (e.target.closest('.modal__block') && !e.target.closest('.btn-close')) return;
        popup.classList.remove('popup_active')
        section.classList.remove('modal__block_active')
      })
    })
  })
}
