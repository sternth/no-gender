chrome.runtime.onInstalled.addListener(() => {
  let counter = 0;
  chrome.runtime.onMessage.addListener(function (message) {
    if (message && message.counter) {
      counter += message.counter;
      chrome.action.setBadgeText({
        text: String(counter.toString()),
      });
    }
  });
});
