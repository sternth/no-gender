const $foundTerms = document.getElementById('found-terms')
const $toggleBtn = document.getElementById('toggle-btn')
const $reloadBtn = document.getElementById('reload-btn')
const disabledExtensionText = 'Web-Extension ist <b>deaktiviert</b>.'
let checkResultTimeoutId = null
let active = false

chrome.storage.local.get(['inactive'], result => {
  active = !result.inactive
  $toggleBtn.innerText = active ? 'deaktivieren' : 'aktivieren'
  $toggleBtn.disabled = false
  $toggleBtn.addEventListener('click', toggleExtension)
  $reloadBtn.addEventListener('click', reloadPage)
  if (active) {
    checkResult()
  } else {
    $foundTerms.innerHTML = disabledExtensionText
  }
})

function toggleExtension () {
  active = !active
  clearTimeout(checkResultTimeoutId)
  if (active) {
    activateExtension()
  } else {
    deactivateExtension()
  }
  $toggleBtn.innerText = active ? 'deaktivieren' : 'aktivieren'
}

function reloadPage () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.reload(tabs[0].id)
    $reloadBtn.style.display = 'none'
  })
}

function activateExtension () {
  sendMessageToActiveTab('start')
  chrome.storage.local.remove('inactive')
  $reloadBtn.style.display = 'none'
  checkResult()
}

function deactivateExtension () {
  sendMessageToActiveTab('stop')
  $foundTerms.innerHTML = disabledExtensionText
  chrome.storage.local.set({ inactive: true })
  $reloadBtn.style.display = 'block'
}

function checkResult () {
  sendMessageToActiveTab('count', function (count) {
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
}

function sendMessageToActiveTab (type, responseCallback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type }, responseCallback)
  })
}
