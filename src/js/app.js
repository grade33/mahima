import choices from './modules/choices.js';
import swiper from "./modules/swiper.js";
import AOS from 'aos';
AOS.init();

// Functions
import * as functions from "./modules/functions.js";
functions.isWebp();
functions.addFavorites();
functions.isBurger();
functions.isSearch();
functions.isAccordion()