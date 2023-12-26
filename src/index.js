// this is the entry point for the app
alert('Keep Going');

// import toggle the toggle module
import toggleTheme from './theme';

//on start up checked whether its on light mode or dark mode
const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener('change', toggleTheme);