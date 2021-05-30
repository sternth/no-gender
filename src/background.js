(function updateBadge () {
  const timeout = 3000
  const action = chrome.action || chrome.browserAction
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'getCount' }, function (count) {
        if (chrome.runtime.lastError) {
          /* ignore */
        } else if (count) {
          action.setBadgeText({ text: count.toString() })
        }
        setTimeout(updateBadge, timeout)
      })
    } else {
      setTimeout(updateBadge, timeout)
    }
  })
})()
