(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender
  const INNEN_EXPR = '([:*_]innen|!nnen|Innen)'
  const IN_EXPR = '([:*_]in|!n|In)[^A-Za-zÄÖÜäöüß]'
  const INNEN_UND_ODER_EXPR = '([A-Za-zÄÖÜäöüß]+)(i|I)nnen (?:und|oder) ([A-Za-zÄÖÜäöü]+)'
  const UND_ODER_INNEN_EXPR = '([A-Za-zÄÖÜäöüß]+) (?:und|oder) ([A-Za-zÄÖÜäöü]+)(i|I)nnen'

  /* configuration */
  APP.config = {
    regularExpressions: {
      innen: new RegExp(INNEN_EXPR),
      wordInnen: new RegExp('[A-Za-zÄÖÜäöüß]' + INNEN_EXPR),
      in: new RegExp(IN_EXPR),
      wordIn: new RegExp('[A-Za-zÄÖÜäöüß]' + IN_EXPR),
      innenUndOder: new RegExp(INNEN_UND_ODER_EXPR),
      undOderInnen: new RegExp(UND_ODER_INNEN_EXPR),
    },
  }

  /* helper functions */
  APP.helpers = {
    /**
     * Creates a new replace-object with a regular expression
     * ending with "innen" and a replace string
     *
     * @example
     * ```
     * const obj = getInnenRegExp('Kommissar', 'Kommissare');
     * expect(obj).toEqual({
     *   regExp: /Kommissar([:*_]innen|!nnen)/g,
     *   replace: 'Kommissare',
     * });
     * ```
     *
     * @param search {string|string[]} the search term
     * @param replace {string|function} the replace term or function
     * @returns {{replace, regExp: RegExp}} replace-object
     */
    getInnenRegExp: function (search, replace) {
      const pattern = getPattern(search, INNEN_EXPR)
      const regExp = new RegExp(pattern, 'g')
      return { regExp, replace }
    },
    /**
     * Creates a new replace-object with a regular expression
     * ending with "in" and a replace string
     *
     * @param search {string|string[]} the search term
     * @param replace {string|function} the replace term or function
     * @returns {{replace, regExp: RegExp}} replace-object
     */
    getInRegExp: function (search, replace) {
      const pattern = getPattern(search, IN_EXPR)
      const regExp = new RegExp(pattern, 'g')
      if (typeof replace === 'string') {
        const word = replace
        replace = term => word + term[term.length - 1]
      }
      return { regExp, replace }
    },

    /**
     * Creates a new replace-object for terms of schema
     * "term innen und/oder term"
     *
     * @returns {{replace, regExp: RegExp}} replace-object
     */
    getInnenUndOderRegExp: function () {
      const regExp = new RegExp(INNEN_UND_ODER_EXPR, 'g')
      const replace = (term, word, _1, word2) => {
        if (word2.toLowerCase().startsWith(word.toLowerCase())) {
          return word2
        } else {
          return term
        }
      }
      return { regExp, replace }
    },

    /**
     * Create a new replace-object for expressions of schema
     * "term und/oder term innen"
     *
     * @returns {{replace: (function(*, *): *), regExp: RegExp}}
     */
    getUndOderInnenRegExp: function () {
      const regExp = new RegExp(UND_ODER_INNEN_EXPR, 'g')
      const replace = (term, word, word2) => {
        if (word.toLowerCase().startsWith(word2.toLowerCase())) {
          return word
        } else {
          return term
        }
      }
      return { regExp, replace }
    },
  }

  /**
   *
   * @param search {string|string[]} search term as string or list of strings
   * @param expression {RegExp} regular expression attached to pattern
   * @returns {string}
   */
  function getPattern (search, expression) {
    if (Array.isArray(search)) {
      const terms = search.join('|')
      return `(${terms})` + expression
    } else {
      return search + expression
    }
  }
}(typeof window !== 'undefined' ? window : this))
