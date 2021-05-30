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

  searchAndDestroy()

  /**
   * Listen for getCount requests
   */
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'getCount') {
      sendResponse(counter.toString())
    }
  })

  /**
   * Search and destroy any gender term
   */
  function searchAndDestroy () {
    const duration = iterate()
    console.debug('duration:', duration, 'ms - counter:', counter)
    timeoutId = setTimeout(searchAndDestroy, duration + 2000)
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
    return !/^(STYLE|SCRIPT)$/.test(node.parentNode.nodeName)
  }

  /**
   * Parse nodeValue of given node
   * @param node {Node} node to check
   */
  function parseNode (node) {
    if (regularExpressions.innen.test(node.nodeValue)) {
      node.nodeValue = parse(node.nodeValue, listPlural)
    }
    if (regularExpressions.in.test(node.nodeValue)) {
      node.nodeValue = parse(node.nodeValue, listSingular)
    }
  }

  /**
   * Parse the given text and replace terms by given list
   * @param text {string} text to be parsed
   * @param list {{replace, regExp: RegExp}[]} replace-objects
   * @returns {string} parsed text
   */
  function parse (text, list) {
    list.forEach(item => {
      const { regExp, replace } = item
      text = text.replace(regExp, (match, word) => {
        try {
          counter++
          return typeof replace === 'string' ? replace : replace(word)
        } catch (err) {
          console.debug('item:', item, 'match:', match, 'word:', word)
          console.error(err)
        }
      })
    })
    return text
  }

}(typeof window !== 'undefined' ? window : this))
