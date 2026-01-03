// ==UserScript==
// @name     A simpler time
// @version  1
// @description Replaces 2026 with 2016 on google calendar
// @author   https://github.com/SimonCantCode and chat gpt lol
// @include  https://calendar.google.com/calendar/u/0/r*
// @grant    none
// ==/UserScript==

// Check if the website is loaded
window.addEventListener('load', function () {
	main();
});
  
function main() {
  // find and replace
  var spanElement = document.querySelector('.mkaajd[jsname="B1A7Xe"]');

  // Check if the element exists and change its text
  if (spanElement) {
      spanElement.innerText = spanElement.innerText.replace("2026", "2016");
  } else {
      console.log('Span element not found.');
  }

  
  // Select the <div> element using its class
  var divElement = document.querySelector('.UyW9db');

  // Check if the element exists and change its text
  if (divElement) {
      divElement.innerText = divElement.innerText.replace("2026", "2016");
  } else {
      console.log('Div element not found.');
	}
}
