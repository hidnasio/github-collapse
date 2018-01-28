const file_collapse_button = '#files .file button[aria-expanded]';

browser.runtime.onMessage.addListener(doit);

function doit(request, sender, sendReponse) {
  document.querySelectorAll(file_collapse_button).forEach(b => b.click());
}
