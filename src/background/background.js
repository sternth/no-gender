chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener(function (message) {
    if (message && message.counter) {
      const action = chrome.action || chrome.browserAction
      action.setBadgeText({
        text: String(message.counter.toString()),
      })
    }
  })
})
