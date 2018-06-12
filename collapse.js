const file_collapse_button = '#files .file button[aria-expanded]';
const touch_divs = '.modal-backdrop.js-touch-events';

browser.runtime.onMessage.addListener(doit);

function doit(request, sender, sendReponse) {
  document.querySelectorAll(file_collapse_button).forEach(b => b.click());
  document.querySelectorAll(touch_divs).forEach(
    b => b.parentNode.removeChild(b)
  );
}
