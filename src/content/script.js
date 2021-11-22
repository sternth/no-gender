(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender
  const { regularExpressions } = APP.config
  const { listPlural, listSingular } = APP
  let timeoutId = null
  let counter = 0

  APP.run = function () {
    clearTimeout(timeoutId)
    searchAndDestroy()
  }

  chrome.storage.local.get(['inactive'], result => {
    if (!result.inactive) {
      APP.run()
    }
  })

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
      case 'count':
        sendResponse(counter.toString())
        break
      case 'start':
        APP.run()
        break
      case 'stop':
        clearTimeout(timeoutId)
        break
    }
  })

  /**
   * Search and destroy any gender term
   */
  function searchAndDestroy () {
    const duration = iterate()
    const timeout = (duration * 10) + 2000
    timeoutId = setTimeout(searchAndDestroy, timeout)
  }

  /**
   * Iterate each node and parse relevant nodes
   * @returns {number} duration of iteration
   */
  function iterate () {
    const start = Date.now()
    const root = window.document.body
    const walker = window.document
      .createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
    let node = walker.nextNode()
    while (node) {
      if (isRelevantNode(node)) {
        parseNode(node)
      }
      node = walker.nextNode()
    }
    return Date.now() - start
  }

  /**
   * Check if node is relevant for searching
   * @param node {Node} node to check
   * @returns {boolean} `true` if not a style or script node
   */
  function isRelevantNode (node) {
    const isContenteditable = checkContentIsEditable(node.parentElement, 3)
    const isStyleOrScriptTag = /^(STYLE|SCRIPT)$/.test(node.parentNode.nodeName)
    return !isContenteditable && !isStyleOrScriptTag
  }

  /**
   * Check if any parent element has attribute contenteditable,
   * which would break with this add-on
   * @param parentElement parent element of node
   * @param depth how deep should be looked for attribute contenteditable
   * @returns {boolean} some parent has attribute contenteditable set `true`
   */
  function checkContentIsEditable (parentElement, depth) {
    while (parentElement && --depth >= 0) {
      const contenteditable = parentElement.getAttribute('contenteditable')
      if (!contenteditable) {
        parentElement = parentElement.parentElement
      } else {
        return true
      }
    }
  }

  /**
   * Parse nodeValue of given node
   * @param node {Node} node to check
   */
  function parseNode (node) {
    normalizeNodeValue(node)
    if (regularExpressions.innenUndOder.test(node.nodeValue)) {
      const { regExp, replace } = APP.helpers.getInnenUndOderRegExp()
      node.nodeValue = node.nodeValue.replace(regExp, replace)
    }
    if (regularExpressions.special.test(node.nodeValue)) {
      const { regExp, replace } = APP.helpers.getSpecialRegExp()
      node.nodeValue = node.nodeValue.replace(regExp, replace)
    }
    if (regularExpressions.wordInnen.test(node.nodeValue)) {
      node.nodeValue = parseList(node.nodeValue, listPlural)
    }
    if (regularExpressions.wordIn.test(node.nodeValue)) {
      node.nodeValue = parseList(node.nodeValue, listSingular)
    }
  }

  /**
   * Normalize nodeValue by removing disturbing characters:
   * - soft hyphens
   * @param node {Node} node to normalize
   */
  function normalizeNodeValue (node) {
    if (/[\u00AD]/.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(/[\u00AD]/g, '')
    }
  }

  /**
   * Parse the given text and replace terms by given list
   * @param text {string} text to be parsed
   * @param list {{replace, regExp: RegExp}[]} replace-objects
   * @returns {string} parsed text
   */
  function parseList (text, list) {
    list.forEach(item => {
      const { regExp, replace } = item
      text = text.replace(regExp, (match, word) => {
        try {
          counter++
          return typeof replace === 'string' ? replace : replace(match, word)
        } catch (err) {
          console.debug('item:', item, 'match:', match, 'word:', word)
          console.error(err)
        }
      })
    })
    return text
  }

}(typeof window !== 'undefined' ? window : this))
