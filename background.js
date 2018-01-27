const filesRegEx = /https:\/\/github.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/pull\/[0-9]+\/files/gi;

function configureBrowserAction(url) {
  if (url === undefined)
    return;

  if (filesRegEx.exec(url) !== null) {
    chrome.browserAction.setTitle({ title: "GitHub Collapse" });
    chrome.browserAction.enable();
  } else {
    chrome.browserAction.setTitle({ title: "This is not a Files changed page" });
    chrome.browserAction.disable();
  }
}

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    configureBrowserAction(tab.url);
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  var tabUrl = changeInfo.url;

  chrome.tabs.query({ active: true }, (result) => {
    if (result[0].id == tabId) {
      configureBrowserAction(tabUrl);
    }
  });
});

chrome.browserAction.disable();