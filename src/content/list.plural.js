(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender
  const { getInnenRegExp } = APP.helpers

  /* list of plural terms */
  APP.listPlural = [
    /**
     * Replace objects of plural terms that have no generic replacer
     */
    getInnenRegExp('Erzherzog', 'Erzherzöge'),
    getInnenRegExp('Fränk', 'Franken'),
    getInnenRegExp('Frei', 'Freiherren'),
    getInnenRegExp('Hünd', 'Hunde'),
    getInnenRegExp('Israel', 'Israeli'),
    getInnenRegExp('Konsul', 'Konsuln'),
    getInnenRegExp('Landsmänn', 'Landsmänner'),
    getInnenRegExp('Moslem', 'Moslems'),
    getInnenRegExp('Jüd', 'Juden'),
    getInnenRegExp('Obmänn', 'Obmänner'),
    getInnenRegExp('Spitzbüb', 'Spitzbuben'),
    getInnenRegExp('Teufel', 'Teufel'),
    getInnenRegExp('Enkel', 'Enkel'),
    getInnenRegExp('Gräf', 'Grafen'),
    getInnenRegExp('Westfäl', 'Westfalen'),
    getInnenRegExp('Nachbar', 'Nachbarn'),
    getInnenRegExp('Tör', 'Tore'),
    getInnenRegExp('Kommissar', 'Kommissare'),
    getInnenRegExp('Kommissär', 'Kommissare'),
    getInnenRegExp('Waffennärr', 'Waffennarren'),
    getInnenRegExp('Kätz', 'Katzen'),
    getInnenRegExp('Chef', 'Chefs'),
    getInnenRegExp('Prinzess', 'Prinzen'),
    getInnenRegExp('Gött', 'Götter'),
    getInnenRegExp('Chilen', 'Chilenen'),
    getInnenRegExp('Wander', 'Wanderer'),
    getInnenRegExp('Kollegen', 'Kollegen'),
  ].concat([
    /**
     * Replace objects for plural terms like:
     * - Aachener*innen -> Aachener
     * - Käufer*innen -> Käufer
     * - Ordnungshüter*innen -> Ordnungshüter
     */
    getInnenRegExp('(er)', 'er'),
  ]).concat([
    /**
     * Replace object for plural terms ending with e:
     * - Baron*innen -> Barone
     * - Kassenwart*innen -> Kassenwarte
     * - Liebling*innen -> Lieblinge
     */
    getInnenRegExp([
      'Bischöf',
      'Baron',
      'Bösewicht',
      'Füchs',
      'Kapitän',
      'Kassenwart',
      'Liebling',
      'Muslim',
      'Päpst',
      'Prinzipal',
      'Rät',
      'Schmied',
      'Anwält',
      'Feind',
      'Wirt',
      'Wölf',
      'Zwerg',
      'Ärzt',
      'Archivar',
      'Bibliothekar',
      'Jubilar',
      'Justitiar',
      'Missionar',
      'Vampir',
      'Vikar',
      'Emissär',
      'Steinmetz',
      'König',
      'Köch',
      'Freund',
      'Dieb',
      'tär',
      'när',
      'eur',
    ], (term, word) => word + 'e'),
  ].concat([
    /**
     * Replace objects for all other plural terms:
     * - Alechemist*innen -> Alchemisten
     * - Erb*innen -> Erben
     * - Held*innen -> Helden
     */
    getInnenRegExp('', 'en'),
  ]))
}(typeof window !== 'undefined' ? window : this))
