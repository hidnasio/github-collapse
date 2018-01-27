var PopupController = function () {
  this.initActionsListeners();
};

PopupController.prototype = {

  onActionClick: function (e) {
    var action = e.target.getAttribute("data-btn-action");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(action);
      chrome.tabs.sendMessage(tabs[0].id, { action: action }, function () {
        window.close();
      });
    });
  },

  initActionsListeners: function () {
    document.querySelectorAll("[data-btn-action]").forEach((btn) => {
      btn.addEventListener("click", this.onActionClick.bind(this));
    });
  },
};

document.addEventListener("DOMContentLoaded", function () {
  window.PC = new PopupController();
});
