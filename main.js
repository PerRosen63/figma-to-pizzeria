import './scss/style.css'
import { showDishes } from './showDishes.js';
import { createCookieBar } from './cookie.js';

document.addEventListener('DOMContentLoaded', function () {
  showDishes;
  let hideCookieBar = createCookieBar();
});

// Remove disabled from submit btn
const submitBtn = document.querySelector('#submitBtn');
const addressField = document.querySelector('#addressField');

addressField.addEventListener('input', function() {
submitBtn.removeAttribute('disabled', '')
});