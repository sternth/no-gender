const $foundTerms = document.getElementById('found-terms')
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { type: 'getCount' }, function (count) {
    console.log('count:', count)
    if (count === 1) {
      $foundTerms.innerHTML = 'Es wurde <b>ein</b> Gender-Begriff gefunden.'
    } else if (count > 1) {
      $foundTerms.innerHTML = `Es wurden <b>${count}</b> Gender-Begriffe gefunden.`
    } else {
      $foundTerms.innerHTML = 'Es wurden <b>Keine</b> Gender-Begriffe gefunden.'
    }
  })
})
