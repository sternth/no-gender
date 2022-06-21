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
    { regExp: /Forschende/, replace: 'Forscher' },
    { regExp: /Mitarbeitende/, replace: 'Mitarbeiter' },
    { regExp: /Studierenden*/, replace: 'Studenten' },
    { regExp: /Teilnehmenden*/, replace: 'Teilnehmer' },
  ]
}(typeof window !== 'undefined' ? window : this))
