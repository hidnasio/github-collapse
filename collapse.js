browser.runtime.onMessage.addListener(doit);

function doit(request, sender, sendReponse) {
  document.querySelectorAll('button[aria-expanded="true"').forEach(b => b.click());
}
