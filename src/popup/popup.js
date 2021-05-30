const $foundTerms = document.getElementById('found-terms')
const $toggleBtn = document.getElementById('toggle-btn')
const $reloadBtn = document.getElementById('reload-btn')
let checkResultTimeoutId = null
let active = false

chrome.storage.local.get(['inactive'], result => {
  active = !result.inactive
  $toggleBtn.innerText = active ? 'deaktivieren' : 'aktivieren'
  $toggleBtn.disabled = false
  $toggleBtn.addEventListener('click', toggleExtension)
  $reloadBtn.addEventListener('click', reloadPage)
  checkResult()
})

function toggleExtension () {
  active = !active
  clearTimeout(checkResultTimeoutId)
  if (active) {
    chrome.storage.local.remove('inactive')
    checkResult()
  } else {
    chrome.storage.local.set({ inactive: true })
    $foundTerms.innerHTML = 'Web-Extension ist <b>deaktiviert</b>.'
  }
  $toggleBtn.innerText = active ? 'deaktivieren' : 'aktivieren'
  $reloadBtn.style.display = 'block'
}

function reloadPage () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.reload(tabs[0].id)
    $reloadBtn.style.display = 'none'
  })
}

function checkResult () {
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
      if (active) {
        checkResultTimeoutId = setTimeout(checkResult, 2000)
      }
    })
  })
}
