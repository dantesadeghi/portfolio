import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const options = {
      bottom: '86vh', // default: '32px'
      right: '5vw', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#272341',  // default: '#100f2c'
      buttonColorLight: '#d8dcbe', // default: '#fff'
      saveInCookies: false, // default: true,
      // label: '🌙', // default: ''
      label: '☽',
      autoMatchOsTheme: false // default: true
}
    
const darkmode = new Darkmode(options);
darkmode.showWidget();

var darkModeToggle = document.querySelector(".darkmode-toggle");
console.log(darkModeToggle);

function toggleDarkModeSymbol (event) {
      // const initialText = '🌙';
      const initialText = '☽';
      if (darkModeToggle.textContent.includes(initialText)) {
            // darkModeToggle.textContent = '☀️';
            darkModeToggle.textContent = '☼';
            darkModeToggle.style.color = 'black';
      } else {
            darkModeToggle.textContent = initialText;
            darkModeToggle.style.color = 'white';
      }
}

darkModeToggle.addEventListener("click", toggleDarkModeSymbol);