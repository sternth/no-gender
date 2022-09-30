(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender

  /* list of plural terms */
  APP.listCustom = [
    /**
     * Custom replace objects
     */
    { regExp: /jede[:*_\/]r/, replace: 'jeder' },
    { regExp: /ein[:*_\/]e/, replace: 'ein' },
    { regExp: /einem[:*_\/]r/, replace: 'einem' },
    { regExp: /eines[:*_\/]einer/, replace: 'eines' },
    { regExp: /den[:*_\/]die/, replace: 'den' },
  ]
}(typeof window !== 'undefined' ? window : this))
