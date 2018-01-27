chrome.runtime.onMessage.addListener(function (request, sender, sendReponse) {
  var buttons = [];

  switch (request.action) {
    case "collapse-all":
      buttons = document.querySelectorAll('#files .file button[aria-expanded="true"');
      break
    case "collapse-not-commented":
      buttons = document.querySelectorAll('#files .file:not(.has-inline-notes) button[aria-expanded="true"');
      break
    case "expand-all":
      buttons = document.querySelectorAll('#files .file button[aria-expanded="false"');
      break
    default:
      break;
  }

  buttons.forEach(b => b.click());
});
