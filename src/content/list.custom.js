(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender

  /* list of plural terms */
  APP.listCustom = [
    /**
     * Custom replace objects
     */
    { regExp: /jede[:*_]r/, replace: 'jeder' },
    { regExp: /ein[:*_]e/, replace: 'ein' },
  ]
}(typeof window !== 'undefined' ? window : this))
