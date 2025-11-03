'use strict';

import scrollUp from './modules/scrollUp';
import spollers from './modules/spollers';
import headerFon from './modules/headerFon';
import pageNavigation from './modules/page-navigation';
import menuBurger from './modules/menu-burger';

window.addEventListener('DOMContentLoaded', () => {
  scrollUp();
  spollers();
  headerFon();
  pageNavigation();
  menuBurger();
});
