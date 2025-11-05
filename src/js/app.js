'use strict';

import pageNavigation from './modules/pageNavigation';
import headerFon from '../components/header/headerFon';
import Header from './../components/header/Header';
import spollers from '../components/spollers/spollers';
import ScrollUpButton from '../components/scrollUpButton/ScrollUpButton';
import CounterAnimationCollection from './../components/CounterAnimation/CounterAnimation';

window.addEventListener('DOMContentLoaded', () => {
  pageNavigation();
  headerFon();
  new Header();
  spollers();
  new ScrollUpButton();
  new CounterAnimationCollection();
});
