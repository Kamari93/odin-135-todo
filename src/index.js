// this is the entry point for the app
alert('Keep Going');

// import toggle the toggle module
import toggleTheme from './theme';

import { addProjectPopup } from './addProjectPopup.js'

//on start up checked whether its on light mode or dark mode
const themeSelect = document.getElementById("theme-select");

const addProjectBtn = document.getElementById("button-add-project");

themeSelect.addEventListener('change', toggleTheme);

addProjectBtn.addEventListener('click', addProjectPopup);