/*
 * Controls Chrome.
 */

var chromix = require("chromix-too")().chromix;

var openTab = function(url) {
  chromix("chrome.tabs.create", {}, {url: url, active: true}, function(tab) {
    focusWindow(tab.windowId);
  });
}

var focusWindow = function(windowId) {
  chromix("chrome.windows.update", {}, windowId, {
    selected: true,
    state: "fullscreen"
  });
}

var reloadTab = function(tabId) {
  chromix("chrome.tabs.reload", {}, tabId);
}

var closeTab = function(tabId) {
  chromix("chrome.tabs.remove", {}, tabId);
}

var closeAllUnfocusedTabs = function() {
  chromix("chrome.tabs.query", {}, {active: false}, function(tabs) {
    for (tab of tabs) {
      close(tab.windowId);
    }
  });
}

module.exports = {
  openTab, openTab,
  focusWindow: focusWindow,
  reloadTab: reloadTab,
  closeTab: closeTab,
  closeAllUnfocusedTabs: closeAllUnfocusedTabs
}
