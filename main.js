import './scss/style.css'
import { showDishes } from './showDishes.js';
import { createCookieBar } from './cookie.js';

document.addEventListener('DOMContentLoaded', function () {
  showDishes;
  let hideCookieBar = createCookieBar();
})