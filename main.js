import './scss/style.css'

import { createCookieBar } from './cookie.js';

document.addEventListener('DOMContentLoaded', function () {
  let hideCookieBar = createCookieBar();
});

// Remove disabled from submit btn
const submitBtn = document.querySelector('#submitBtn');
const addressField = document.querySelector('#addressField');

addressField.addEventListener('input', function() {
submitBtn.removeAttribute('disabled', '')
});