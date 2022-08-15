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

export function error() {
  let error = document.querySelector('.error')
  let btnClose = error.querySelector('.error__btn-close')
  btnClose.addEventListener('click', () => {
    error.classList.remove('error_active')
  })
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
        accPanel.style.maxHeight = accPanel.scrollHeight + 120 + "px";
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

export function passwordControl() {
  document.querySelectorAll('.password').forEach(passBlock => {
    let input = passBlock.querySelector('input');
    let passBtn = passBlock.querySelector('button');
    passBtn.addEventListener('click', () => {
      if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'name')
        passBtn.classList.add('password__btn_show')
      } else {
        input.setAttribute('type', 'password')
        passBtn.classList.remove('password__btn_show')
      }
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

export function openModal() {
  const popup = document.querySelector('.popup');
  const modal = popup.querySelector('.modal');
  document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.modal__block').forEach(modalBlock => {
        modalBlock.classList.remove('modal__block_active');
      })

      scroll(0,0)

      const modalBlock = link.classList.contains('contact-link') ? modal.querySelector('.contacts') :
        link.classList.contains('diller-link') ? modal.querySelector('.diller') :
        link.classList.contains('sign-in-link') ? modal.querySelector('.sign-in') :
        link.classList.contains('sign-up-link') ? modal.querySelector('.sign-up') :
        link.classList.contains('verification-code-link') ? modal.querySelector('.verification-code') :
        link.classList.contains('review__write-link') ? modal.querySelector('.review-modal') :
        link.classList.contains('forgot-link') ? modal.querySelector('.forgot') :
        link.classList.contains('new-pass-link') ? modal.querySelector('.new-pass') :
        link.classList.contains('desc-link') ? modal.querySelector('.product-desc') :
        null

      document.body.style.overflow = 'hidden'
      popup.classList.add('popup_active');
      modalBlock.classList.add('modal__block_active');
      document.body.parentElement.style.overflowY = 'hidden';


      popup.addEventListener('click', (e) => {
        if (e.target.closest('.modal__block') && !e.target.closest('.modal__btn-close')) return;
        modalBlock.querySelectorAll('input, textarea').forEach(field => {
          field.value = ''
        })

        document.body.style.overflow = 'unset'
        popup.classList.remove('popup_active');
        modalBlock.classList.remove('modal__block_active');
        document.body.parentElement.style.overflowY = 'unset';
      })
    })
  })
}

export function surveillanceModalDisabledBtn() {
  document.querySelectorAll('button.modal__btn[type="submit"][disabled]').forEach(btn => {

    let fieldsArr = Array.from(btn.closest('.modal__block').querySelectorAll('.modal__field'));

    fieldsArr.forEach(field => {
      let fieldCondition;

      field.addEventListener('change', () => {
        fieldCondition = fieldsArr.every(field => field.value !== '')

        if (fieldCondition) {
          btn.removeAttribute('disabled')
        } else {
          btn.setAttribute('disabled', 'disabled')
        }
      })
    })
  })
}

export function leaveReview() {
  let starBlock = document.querySelector('.modal__rating')
  let starBtnList = starBlock.querySelectorAll('.rating__btn')
  let starIconList = starBlock.querySelectorAll('.rating__icon')

  starBtnList.forEach((starBtn, idx) => {
    starBtn.addEventListener('mouseover', () => {
      if (starBlock.classList.contains('modal__rating_selected')) return;
      for (let i = idx; i >= 0; i--) {
        starIconList[i].classList.add('rating__icon_fill')
      }
    })
    starBtn.addEventListener('mouseout', () => {
      if (starBlock.classList.contains('modal__rating_selected')) return;
      starIconList.forEach(starIcon => {
        starIcon.classList.remove('rating__icon_fill')
      })
    })
  })
  starBtnList.forEach((starBtn, idx) => {
    starBtn.addEventListener('click', () => {
      starIconList.forEach(starIcon => {
        starIcon.classList.remove('rating__icon_fill')
      })
      for (let i = idx; i >= 0; i--) {
        starIconList[i].classList.add('rating__icon_fill')
      }
      starBlock.setAttribute('aria-label', `${idx + 1}/5 звезд`)
      starBlock.classList.add('modal__rating_selected')
    })
  })

}

export function ProfileSuccessfulChange() {
  let btnWrap = document?.querySelector('.profile__btn-wrap')
  let btn = btnWrap?.querySelector('.profile__btn')
  let successful = btnWrap?.querySelector('.profile__successful')
  btn?.addEventListener('click', () => {
    successful.classList.add('profile__successful_active')
  })
}

export function promocode() {
  let arrangeBtn = document.querySelector('.total__promocode-btn');
  let btnCheck = document.querySelector('.total__promocode-input-btn');
  let inputWrap = document.querySelector('.total__promocode-input-wrap');
  let input = document.querySelector('.total__promocode-input');
  let text = document.querySelector('.total__promocode-text')
  let error = document.querySelector('.error');
  arrangeBtn?.addEventListener('click', () => {
    arrangeBtn.classList.add('visually-hidden');
    inputWrap.classList.remove('visually-hidden');
  })
  btnCheck?.addEventListener('click', () => {
    if (input.value === '') {
      console.log(1);
      error.querySelector('.error__text').innerHTML = 'Промокод не найден';
      error.classList.add('error_active');
    } else {
      text.classList.add('total__promocode-text_active')
    }
  })
}

export function imageZoom() {
  let imgList = document.querySelectorAll('.product__images-img');
  let zoom = document.querySelector('.zoom');
  let zoomImgBtnList = zoom?.querySelectorAll('.zoom__btn');
  let closeBtn = zoom?.querySelector('.zoom__close');
  let mainImg = zoom?.querySelector('.zoom__main-img');



  imgList?.forEach(img => {
    img.addEventListener('click', () => {
      zoom.classList.add('zoom_active');
      let src = img.getAttribute('src');
      let imgItem = zoom.querySelector(`img[src="${src}"]`);
      imgItem.classList.add('zoom__item_active');
      mainImg.setAttribute('src', src);
      let imgBtn = imgItem.closest('.zoom__btn').classList.add('zoom__btn_active')
    })
  })

  zoomImgBtnList?.forEach(btn => {
    btn.addEventListener('click', () => {
      zoomImgBtnList.forEach(btn => {
        btn.classList.remove('zoom__btn_active')
      })
      btn.classList.add('zoom__btn_active')
      let src = btn.querySelector('.zoom__img').getAttribute('src')
      mainImg.setAttribute('src', src)
    })
  })

  closeBtn?.addEventListener('click', closeBtnFunc)
  zoom?.querySelector('.zoom__bg').addEventListener('click', closeBtnFunc)

  function closeBtnFunc() {
    mainImg.setAttribute('src', '#');
    zoom.classList.remove('zoom_active');
    zoomImgBtnList.forEach(btn => {
      btn.classList.remove('zoom__btn_active')
    })
  }
}

export function openFilter() {
  let filter = document?.querySelector('.filter-modal')
  let btn = document?.querySelector('.filter__open')
  let btnClose = filter?.querySelector('.filter-modal__btn-close')
  btn?.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    filter.classList.add('filter-modal_active')
  })
  btnClose?.addEventListener('click', () => {
    document.body.style.overflow = 'unset'
    filter.classList.remove('filter-modal_active')
  })
}
