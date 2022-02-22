require('../../src/content/app')
require('../../src/content/list.custom')
require('../../src/content/list.plural')
require('../../src/content/list.singular')
require('../../src/content/script')

describe('no-gender - singular', () => {
  const searchAndDestroy = window.noGender.run

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('"*in"', () => {
    it('should find and replace "Bürg*in"', () => {
      document.body.innerHTML = 'Sie als Bürg*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bürger sind dazu verpflichtet.')
    })

    it('should find and replace "Ärzt*in"', () => {
      document.body.innerHTML = 'Sie als Ärzt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Arzt sind dazu verpflichtet.')
    })

    it('should find and replace "Anwält*in"', () => {
      document.body.innerHTML = 'Sie als Anwält*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Anwalt sind dazu verpflichtet.')
    })

    it('should find and replace "Gött*in"', () => {
      document.body.innerHTML = 'Sie als Gött*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gott sind dazu verpflichtet.')
    })

    it('should find and replace "Rät*in"', () => {
      document.body.innerHTML = 'Sie als Rät*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Rat sind dazu verpflichtet.')
    })

    it('should find and replace "Päpst*in"', () => {
      document.body.innerHTML = 'Sie als Päpst*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Papst sind dazu verpflichtet.')
    })

    it('should find and replace "Fürst*in"', () => {
      document.body.innerHTML = 'Sie als Fürst*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Fürst sind dazu verpflichtet.')
    })

    it('should find and replace "Kolleg*in"', () => {
      document.body.innerHTML = 'Sie als Kolleg*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kollege sind dazu verpflichtet.')
    })

    it('should find and replace "Zeug*in"', () => {
      document.body.innerHTML = 'Sie als Zeug*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Zeuge sind dazu verpflichtet.')
    })

    it('should find and replace "Strateg*in"', () => {
      document.body.innerHTML = 'Sie als Strateg*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Stratege sind dazu verpflichtet.')
    })

    it('should find and replace "Beamt*in"', () => {
      document.body.innerHTML = 'Sie als Beamt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Beamte sind dazu verpflichtet.')
    })

    it('should find and replace "Expert*in"', () => {
      document.body.innerHTML = 'Sie als Expert*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Experte sind dazu verpflichtet.')
    })

    it('should find and replace "Gatt*in"', () => {
      document.body.innerHTML = 'Sie als Gatt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gatte sind dazu verpflichtet.')
    })

    it('should find and replace "Pat*in"', () => {
      document.body.innerHTML = 'Sie als Pat*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Pate sind dazu verpflichtet.')
    })

    it('should find and replace "Schott*in"', () => {
      document.body.innerHTML = 'Sie als Schott*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schotte sind dazu verpflichtet.')
    })

    it('should find and replace "Hirt*in"', () => {
      document.body.innerHTML = 'Sie als Hirt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Hirte sind dazu verpflichtet.')
    })

    it('should find and replace "Mulatt*in"', () => {
      document.body.innerHTML = 'Sie als Mulatt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Mulatte sind dazu verpflichtet.')
    })

    it('should find and replace "Lett*in"', () => {
      document.body.innerHTML = 'Sie als Lett*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Lette sind dazu verpflichtet.')
    })

    it('should find and replace "Gefährt*in"', () => {
      document.body.innerHTML = 'Sie als Gefährt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gefährte sind dazu verpflichtet.')
    })

    it('should find and replace "Kroat*in"', () => {
      document.body.innerHTML = 'Sie als Kroat*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kroate sind dazu verpflichtet.')
    })

    it('should find and replace "Kelt*in"', () => {
      document.body.innerHTML = 'Sie als Kelt*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kelte sind dazu verpflichtet.')
    })

    it('should find and replace "Est*in"', () => {
      document.body.innerHTML = 'Sie als Est*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Este sind dazu verpflichtet.')
    })

    it('should find and replace "Brit*in"', () => {
      document.body.innerHTML = 'Sie als Brit*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Brite sind dazu verpflichtet.')
    })

    it('should find and replace "Bot*in"', () => {
      document.body.innerHTML = 'Sie als Bot*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bote sind dazu verpflichtet.')
    })

    it('should find and replace "Asket*in"', () => {
      document.body.innerHTML = 'Sie als Asket*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Askete sind dazu verpflichtet.')
    })

    it('should find and replace "Asiat*in"', () => {
      document.body.innerHTML = 'Sie als Asiat*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Asiate sind dazu verpflichtet.')
    })

    it('should find and replace "Westfäl*in"', () => {
      document.body.innerHTML = 'Sie als Westfäl*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Westfale sind dazu verpflichtet.')
    })

    it('should find and replace "Wend*in"', () => {
      document.body.innerHTML = 'Sie als Wend*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Wende sind dazu verpflichtet.')
    })

    it('should find and replace "Welf*in"', () => {
      document.body.innerHTML = 'Sie als Welf*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Welfe sind dazu verpflichtet.')
    })

    it('should find and replace "Russ*in"', () => {
      document.body.innerHTML = 'Sie als Russ*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Russe sind dazu verpflichtet.')
    })

    it('should find and replace "Vietnames*in"', () => {
      document.body.innerHTML = 'Sie als Vietnames*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Vietnamese sind dazu verpflichtet.')
    })

    it('should find and replace "Vestal*in"', () => {
      document.body.innerHTML = 'Sie als Vestal*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Vestale sind dazu verpflichtet.')
    })

    it('should find and replace "Verones*in"', () => {
      document.body.innerHTML = 'Sie als Verones*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Veronese sind dazu verpflichtet.')
    })

    it('should find and replace "Usbek*in"', () => {
      document.body.innerHTML = 'Sie als Usbek*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Usbeke sind dazu verpflichtet.')
    })

    it('should find and replace "Uigur*in"', () => {
      document.body.innerHTML = 'Sie als Uigur*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Uigure sind dazu verpflichtet.')
    })

    it('should find and replace "Turkmen*in"', () => {
      document.body.innerHTML = 'Sie als Turkmen*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Turkmene sind dazu verpflichtet.')
    })

    it('should find and replace "Türk*in"', () => {
      document.body.innerHTML = 'Sie als Türk*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Türke sind dazu verpflichtet.')
    })

    it('should find and replace "Tschech*in"', () => {
      document.body.innerHTML = 'Sie als Tschech*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Tscheche sind dazu verpflichtet.')
    })

    it('should find and replace "Tragöd*in"', () => {
      document.body.innerHTML = 'Sie als Tragöd*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Tragöde sind dazu verpflichtet.')
    })

    it('should find and replace "Togoles*in"', () => {
      document.body.innerHTML = 'Sie als Togoles*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Togolese sind dazu verpflichtet.')
    })

    it('should find and replace "Schütz*in"', () => {
      document.body.innerHTML = 'Sie als Schütz*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schütze sind dazu verpflichtet.')
    })

    it('should find and replace "Tadschik*in"', () => {
      document.body.innerHTML = 'Sie als Tadschik*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Tadschike sind dazu verpflichtet.')
    })

    it('should find and replace "Südsudanes*in"', () => {
      document.body.innerHTML = 'Sie als Südsudanes*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Südsudanese sind dazu verpflichtet.')
    })

    it('should find and replace "Sudanes*in"', () => {
      document.body.innerHTML = 'Sie als Sudanes*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Sudanese sind dazu verpflichtet.')
    })

    it('should find and replace "Kund*in"', () => {
      document.body.innerHTML = 'Sie als Kund*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kunde sind dazu verpflichtet.')
    })

    it('should find and replace "Sorb*in"', () => {
      document.body.innerHTML = 'Sie als Sorb*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Sorbe sind dazu verpflichtet.')
    })

    it('should find and replace "Sklav*in"', () => {
      document.body.innerHTML = 'Sie als Sklav*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Sklave sind dazu verpflichtet.')
    })

    it('should find and replace "Slaw*in"', () => {
      document.body.innerHTML = 'Sie als Slaw*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Slawe sind dazu verpflichtet.')
    })

    it('should find and replace "Slowak*in"', () => {
      document.body.innerHTML = 'Sie als Slowak*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Slowake sind dazu verpflichtet.')
    })

    it('should find and replace "Slowen*in"', () => {
      document.body.innerHTML = 'Sie als Slowen*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Slowene sind dazu verpflichtet.')
    })

    it('should find and replace "Serb*in"', () => {
      document.body.innerHTML = 'Sie als Serb*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Serbe sind dazu verpflichtet.')
    })

    it('should find and replace "Senegales*in"', () => {
      document.body.innerHTML = 'Sie als Senegales*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Senegalese sind dazu verpflichtet.')
    })

    it('should find and replace "Schwed*in"', () => {
      document.body.innerHTML = 'Sie als Schwed*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schwede sind dazu verpflichtet.')
    })

    it('should find and replace "Schurk*in"', () => {
      document.body.innerHTML = 'Sie als Schurk*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schurke sind dazu verpflichtet.')
    })

    it('should find and replace "Lots*in"', () => {
      document.body.innerHTML = 'Sie als Lots*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Lotse sind dazu verpflichtet.')
    })

    it('should find and replace "Schöff*in"', () => {
      document.body.innerHTML = 'Sie als Schöff*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schöffe sind dazu verpflichtet.')
    })

    it('should find and replace "Schimpans*in"', () => {
      document.body.innerHTML = 'Sie als Schimpans*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schimpanse sind dazu verpflichtet.')
    })

    it('should find and replace "Schaman*in"', () => {
      document.body.innerHTML = 'Sie als Schaman*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schamane sind dazu verpflichtet.')
    })

    it('should find and replace "Kumpan*in"', () => {
      document.body.innerHTML = 'Sie als Kumpan*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kumpane sind dazu verpflichtet.')
    })

    it('should find and replace "Sard*in"', () => {
      document.body.innerHTML = 'Sie als Sard*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Sarde sind dazu verpflichtet.')
    })

    it('should find and replace "Rival*in"', () => {
      document.body.innerHTML = 'Sie als Rival*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Rivale sind dazu verpflichtet.')
    })

    it('should find and replace "Rumän*in"', () => {
      document.body.innerHTML = 'Sie als Rumän*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Rumäne sind dazu verpflichtet.')
    })

    it('should find and replace "Reuss*in"', () => {
      document.body.innerHTML = 'Sie als Reuss*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Reusse sind dazu verpflichtet.')
    })

    it('should find and replace "Reuß*in"', () => {
      document.body.innerHTML = 'Sie als Reuß*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Reuße sind dazu verpflichtet.')
    })

    it('should find and replace "Rätoroman*in"', () => {
      document.body.innerHTML = 'Sie als Rätoroman*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Rätoromane sind dazu verpflichtet.')
    })

    it('should find and replace "Bär*in"', () => {
      document.body.innerHTML = 'Sie als Bär*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bär sind dazu verpflichtet.')
    })

    it('should find and replace "Barkeeper*in"', () => {
      document.body.innerHTML = 'Sie als Barkeeper*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Barkeeper sind dazu verpflichtet.')
    })

    it('should find and replace "Baron*in"', () => {
      document.body.innerHTML = 'Sie als Baron*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Baron sind dazu verpflichtet.')
    })

    it('should find and replace "Baseler*in"', () => {
      document.body.innerHTML = 'Sie als Baseler*in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Baseler sind dazu verpflichtet.')
    })

    it('should not replace terms ending with "*insight"', function () {
      document.body.innerHTML = 'level*insight=unknown'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('level*insight=unknown')
    })
  })

  describe('":in"', () => {
    it('should find and replace "Wölf:in"', () => {
      document.body.innerHTML = 'Sie als Wölf:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Wolf sind dazu verpflichtet.')
    })

    it('should find and replace "Prinzess:in"', () => {
      document.body.innerHTML = 'Sie als Prinzess:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Prinz sind dazu verpflichtet.')
    })

    it('should find and replace "Närr:in"', () => {
      document.body.innerHTML = 'Sie als Närr:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Narr sind dazu verpflichtet.')
    })

    it('should find and replace "Gräf:in"', () => {
      document.body.innerHTML = 'Sie als Gräf:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Graf sind dazu verpflichtet.')
    })

    it('should find and replace "Tör:in"', () => {
      document.body.innerHTML = 'Sie als Tör:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Tor sind dazu verpflichtet.')
    })

    it('should find and replace "Köch:in"', () => {
      document.body.innerHTML = 'Sie als Köch:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Koch sind dazu verpflichtet.')
    })

    it('should find and replace "Büb:in"', () => {
      document.body.innerHTML = 'Sie als Büb:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bub sind dazu verpflichtet.')
    })

    it('should find and replace "Spätz:in"', () => {
      document.body.innerHTML = 'Sie als Spätz:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Spatz sind dazu verpflichtet.')
    })

    it('should find and replace "Schwän:in"', () => {
      document.body.innerHTML = 'Sie als Schwän:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schwan sind dazu verpflichtet.')
    })

    it('should find and replace "Pol:in"', () => {
      document.body.innerHTML = 'Sie als Pol:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Pole sind dazu verpflichtet.')
    })

    it('should find and replace "Portugies:in"', () => {
      document.body.innerHTML = 'Sie als Portugies:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Portugiese sind dazu verpflichtet.')
    })

    it('should find and replace "Preuss:in"', () => {
      document.body.innerHTML = 'Sie als Preuss:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Preusse sind dazu verpflichtet.')
    })

    it('should find and replace "Preuß:in"', () => {
      document.body.innerHTML = 'Sie als Preuß:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Preuße sind dazu verpflichtet.')
    })

    it('should find and replace "Osman:in"', () => {
      document.body.innerHTML = 'Sie als Osman:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Osmane sind dazu verpflichtet.')
    })

    it('should find and replace "Oriental:in"', () => {
      document.body.innerHTML = 'Sie als Oriental:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Orientale sind dazu verpflichtet.')
    })

    it('should find and replace "Orthopäd:in"', () => {
      document.body.innerHTML = 'Sie als Orthopäd:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Orthopäde sind dazu verpflichtet.')
    })

    it('should find and replace "Nymphoman:in"', () => {
      document.body.innerHTML = 'Sie als Nymphoman:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Nymphomane sind dazu verpflichtet.')
    })

    it('should find and replace "Jüd:in"', () => {
      document.body.innerHTML = 'Sie als Jüd:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Jude sind dazu verpflichtet.')
    })

    it('should find and replace "Nebens:in"', () => {
      document.body.innerHTML = 'Sie als Nebens:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Nebense sind dazu verpflichtet.')
    })

    it('should find and replace "Nepales:in"', () => {
      document.body.innerHTML = 'Sie als Nepales:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Nepalese sind dazu verpflichtet.')
    })

    it('should find and replace "Myanmar:in"', () => {
      document.body.innerHTML = 'Sie als Myanmar:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Myanmare sind dazu verpflichtet.')
    })

    it('should find and replace "Monegass:in"', () => {
      document.body.innerHTML = 'Sie als Monegass:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Monegasse sind dazu verpflichtet.')
    })

    it('should find and replace "Mongol:in"', () => {
      document.body.innerHTML = 'Sie als Mongol:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Mongole sind dazu verpflichtet.')
    })

    it('should find and replace "Erb:in"', () => {
      document.body.innerHTML = 'Sie als Erb:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Erbe sind dazu verpflichtet.')
    })

    it('should find and replace "Mazedon:in"', () => {
      document.body.innerHTML = 'Sie als Mazedon:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Mazedone sind dazu verpflichtet.')
    })

    it('should find and replace "Makedon:in"', () => {
      document.body.innerHTML = 'Sie als Makedon:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Makedone sind dazu verpflichtet.')
    })

    it('should find and replace "Madagass:in"', () => {
      document.body.innerHTML = 'Sie als Madagass:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Madagasse sind dazu verpflichtet.')
    })

    it('should find and replace "Madegass:in"', () => {
      document.body.innerHTML = 'Sie als Madegass:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Madegasse sind dazu verpflichtet.')
    })

    it('should find and replace "Löw:in"', () => {
      document.body.innerHTML = 'Sie als Löw:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Löwe sind dazu verpflichtet.')
    })

    it('should find and replace "Libanes:in"', () => {
      document.body.innerHTML = 'Sie als Libanes:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Libanese sind dazu verpflichtet.')
    })

    it('should find and replace "Langobard:in"', () => {
      document.body.innerHTML = 'Sie als Langobard:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Langobarde sind dazu verpflichtet.')
    })

    it('should find and replace "Lapp:in"', () => {
      document.body.innerHTML = 'Sie als Lapp:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Lappe sind dazu verpflichtet.')
    })

    it('should find and replace "Kurd:in"', () => {
      document.body.innerHTML = 'Sie als Kurd:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kurde sind dazu verpflichtet.')
    })

    it('should find and replace "Banaus:in"', () => {
      document.body.innerHTML = 'Sie als Banaus:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Banause sind dazu verpflichtet.')
    })

    it('should find and replace "Kors:in"', () => {
      document.body.innerHTML = 'Sie als Kors:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Korse sind dazu verpflichtet.')
    })

    it('should find and replace "Kosovar:in"', () => {
      document.body.innerHTML = 'Sie als Kosovar:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kosovare sind dazu verpflichtet.')
    })

    it('should find and replace "Kongoles:in"', () => {
      document.body.innerHTML = 'Sie als Kongoles:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kongolese sind dazu verpflichtet.')
    })

    it('should find and replace "Kompliz:in"', () => {
      document.body.innerHTML = 'Sie als Kompliz:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Komplize sind dazu verpflichtet.')
    })

    it('should find and replace "Kompars:in"', () => {
      document.body.innerHTML = 'Sie als Kompars:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Komparse sind dazu verpflichtet.')
    })

    it('should find and replace "Kommiliton:in"', () => {
      document.body.innerHTML = 'Sie als Kommiliton:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kommilitone sind dazu verpflichtet.')
    })

    it('should find and replace "Kätz:in"', () => {
      document.body.innerHTML = 'Sie als Kätz:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Katze sind dazu verpflichtet.')
    })

    it('should find and replace "Kasach:in"', () => {
      document.body.innerHTML = 'Sie als Kasach:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kasache sind dazu verpflichtet.')
    })

    it('should find and replace "Katalan:in"', () => {
      document.body.innerHTML = 'Sie als Katalan:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Katalane sind dazu verpflichtet.')
    })

    it('should find and replace "Kannibal:in"', () => {
      document.body.innerHTML = 'Sie als Kannibal:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kannibale sind dazu verpflichtet.')
    })

    it('should find and replace "Jugoslaw:in"', () => {
      document.body.innerHTML = 'Sie als Jugoslaw:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Jugoslawe sind dazu verpflichtet.')
    })

    it('should find and replace "Jagellon:in"', () => {
      document.body.innerHTML = 'Sie als Jagellon:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Jagellone sind dazu verpflichtet.')
    })

    it('should find and replace "Jeck:in"', () => {
      document.body.innerHTML = 'Sie als Jeck:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Jecke sind dazu verpflichtet.')
    })

    it('should find and replace "Jesid:in"', () => {
      document.body.innerHTML = 'Sie als Jesid:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Jeside sind dazu verpflichtet.')
    })

    it('should find and replace "Ir:in"', () => {
      document.body.innerHTML = 'Sie als Ir:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Ire sind dazu verpflichtet.')
    })

    it('should find and replace "Invalid:in"', () => {
      document.body.innerHTML = 'Sie als Invalid:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Invalide sind dazu verpflichtet.')
    })

    it('should find and replace "Insass:in"', () => {
      document.body.innerHTML = 'Sie als Insass:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Insasse sind dazu verpflichtet.')
    })

    it('should find and replace "Hess:in"', () => {
      document.body.innerHTML = 'Sie als Hess:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Hesse sind dazu verpflichtet.')
    })

    it('should find and replace "Hellen:in"', () => {
      document.body.innerHTML = 'Sie als Hellen:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Hellene sind dazu verpflichtet.')
    })

    it('should find and replace "Heid:in"', () => {
      document.body.innerHTML = 'Sie als Heid:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Heide sind dazu verpflichtet.')
    })

    it('should find and replace "Guatemaltek:in"', () => {
      document.body.innerHTML = 'Sie als Guatemaltek:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Guatemalteke sind dazu verpflichtet.')
    })

    it('should find and replace "Griech:in"', () => {
      document.body.innerHTML = 'Sie als Griech:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Grieche sind dazu verpflichtet.')
    })

    it('should find and replace "Ghanes:in"', () => {
      document.body.innerHTML = 'Sie als Ghanes:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Ghanese sind dazu verpflichtet.')
    })

    it('should find and replace "Gespiel:in"', () => {
      document.body.innerHTML = 'Sie als Gespiel:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gespiele sind dazu verpflichtet.')
    })

    it('should find and replace "Genoss:in"', () => {
      document.body.innerHTML = 'Sie als Genoss:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Genosse sind dazu verpflichtet.')
    })

    it('should find and replace "German:in"', () => {
      document.body.innerHTML = 'Sie als German:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Germane sind dazu verpflichtet.')
    })

    it('should find and replace "Genues:in"', () => {
      document.body.innerHTML = 'Sie als Genues:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Genuese sind dazu verpflichtet.')
    })

    it('should find and replace "Gemahl:in"', () => {
      document.body.innerHTML = 'Sie als Gemahl:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gemahle sind dazu verpflichtet.')
    })

    it('should find and replace "Fränk:in"', () => {
      document.body.innerHTML = 'Sie als Fränk:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Franke sind dazu verpflichtet.')
    })

    it('should find and replace "Französ:in"', () => {
      document.body.innerHTML = 'Sie als Französ:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Franzose sind dazu verpflichtet.')
    })

    it('should find and replace "Finn:in"', () => {
      document.body.innerHTML = 'Sie als Finn:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Finne sind dazu verpflichtet.')
    })

    it('should find and replace "Falasch:in"', () => {
      document.body.innerHTML = 'Sie als Falasch:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Falasche sind dazu verpflichtet.')
    })

    it('should find and replace "Basketballer:in"', () => {
      document.body.innerHTML = 'Sie als Basketballer:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Basketballer sind dazu verpflichtet.')
    })

    it('should find and replace "Basketballspieler:in"', () => {
      document.body.innerHTML = 'Sie als Basketballspieler:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Basketballspieler sind dazu verpflichtet.')
    })

    it('should find and replace "Basler:in"', () => {
      document.body.innerHTML = 'Sie als Basler:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Basler sind dazu verpflichtet.')
    })

    it('should find and replace "Bassist:in"', () => {
      document.body.innerHTML = 'Sie als Bassist:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bassist sind dazu verpflichtet.')
    })

    it('should find and replace "Bauarbeiter:in"', () => {
      document.body.innerHTML = 'Sie als Bauarbeiter:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauarbeiter sind dazu verpflichtet.')
    })

    it('should find and replace "Bauchtänzer:in"', () => {
      document.body.innerHTML = 'Sie als Bauchtänzer:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauchtänzer sind dazu verpflichtet.')
    })

    it('should find and replace "Bäuer:in"', () => {
      document.body.innerHTML = 'Sie als Bäuer:in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauer sind dazu verpflichtet.')
    })

    it('should not replace terms ending with ":info"', function () {
      document.body.innerHTML = 'the package:info is important'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('the package:info is important')
    })
  })

  describe('"_in"', () => {
    it('should find and replace "Männ_in"', () => {
      document.body.innerHTML = 'Sie als Männ_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Mann sind dazu verpflichtet.')
    })

    it('should find and replace "Kustod_in"', () => {
      document.body.innerHTML = 'Sie als Kustod_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kustos sind dazu verpflichtet.')
    })

    it('should find and replace "Kirgis_in"', () => {
      document.body.innerHTML = 'Sie als Kirgis_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Kirgise sind dazu verpflichtet.')
    })

    it('should find and replace "Israel_in"', () => {
      document.body.innerHTML = 'Sie als Israel_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Israeli sind dazu verpflichtet.')
    })

    it('should find and replace "Hünd_in"', () => {
      document.body.innerHTML = 'Sie als Hünd_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Hund sind dazu verpflichtet.')
    })

    it('should find and replace "Füchs_in"', () => {
      document.body.innerHTML = 'Sie als Füchs_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Fuchs sind dazu verpflichtet.')
    })

    it('should find and replace "Frei_in"', () => {
      document.body.innerHTML = 'Sie als Frei_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Freier sind dazu verpflichtet.')
    })

    it('should find and replace "Bischöf_in"', () => {
      document.body.innerHTML = 'Sie als Bischöf_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bischof sind dazu verpflichtet.')
    })

    it('should find and replace "Rival_in"', () => {
      document.body.innerHTML = 'Sie als Rival_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Rivale sind dazu verpflichtet.')
    })

    it('should find and replace "Erb_in"', () => {
      document.body.innerHTML = 'Sie als Erb_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Erbe sind dazu verpflichtet.')
    })

    it('should find and replace "Elev_in"', () => {
      document.body.innerHTML = 'Sie als Elev_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Eleve sind dazu verpflichtet.')
    })

    it('should find and replace "Druid_in"', () => {
      document.body.innerHTML = 'Sie als Druid_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Druide sind dazu verpflichtet.')
    })

    it('should find and replace "Drus_in"', () => {
      document.body.innerHTML = 'Sie als Drus_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Druse sind dazu verpflichtet.')
    })

    it('should find and replace "Drach_in"', () => {
      document.body.innerHTML = 'Sie als Drach_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Drache sind dazu verpflichtet.')
    })

    it('should find and replace "Dän_in"', () => {
      document.body.innerHTML = 'Sie als Dän_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Däne sind dazu verpflichtet.')
    })

    it('should find and replace "Chilen_in"', () => {
      document.body.innerHTML = 'Sie als Chilen_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Chilene sind dazu verpflichtet.')
    })

    it('should find and replace "Chines_in"', () => {
      document.body.innerHTML = 'Sie als Chines_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Chinese sind dazu verpflichtet.')
    })

    it('should find and replace "Bulgar_in"', () => {
      document.body.innerHTML = 'Sie als Bulgar_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bulgare sind dazu verpflichtet.')
    })

    it('should find and replace "Botokud_in"', () => {
      document.body.innerHTML = 'Sie als Botokud_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Botokude sind dazu verpflichtet.')
    })

    it('should find and replace "Böhm_in"', () => {
      document.body.innerHTML = 'Sie als Böhm_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Böhme sind dazu verpflichtet.')
    })

    it('should find and replace "Awar_in"', () => {
      document.body.innerHTML = 'Sie als Awar_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Aware sind dazu verpflichtet.')
    })

    it('should find and replace "Bajuwar_in"', () => {
      document.body.innerHTML = 'Sie als Bajuwar_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bajuware sind dazu verpflichtet.')
    })

    it('should find and replace "Balines_in"', () => {
      document.body.innerHTML = 'Sie als Balines_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Balinese sind dazu verpflichtet.')
    })

    it('should find and replace "Apach_in"', () => {
      document.body.innerHTML = 'Sie als Apach_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Apache sind dazu verpflichtet.')
    })

    it('should find and replace "Aranes_in"', () => {
      document.body.innerHTML = 'Sie als Aranes_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Aranese sind dazu verpflichtet.')
    })

    it('should find and replace "Ans_in"', () => {
      document.body.innerHTML = 'Sie als Ans_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Anse sind dazu verpflichtet.')
    })

    it('should find and replace "Häs_in"', () => {
      document.body.innerHTML = 'Sie als Häs_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Hase sind dazu verpflichtet.')
    })

    it('should find and replace "Sächs_in"', () => {
      document.body.innerHTML = 'Sie als Sächs_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Sächse sind dazu verpflichtet.')
    })

    it('should find and replace "Afghan_in"', () => {
      document.body.innerHTML = 'Sie als Afghan_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Afghane sind dazu verpflichtet.')
    })

    it('should find and replace "Äbtiss_in"', () => {
      document.body.innerHTML = 'Sie als Äbtiss_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Äbtisse sind dazu verpflichtet.')
    })

    it('should find and replace "Abchas_in"', () => {
      document.body.innerHTML = 'Sie als Abchas_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Abchase sind dazu verpflichtet.')
    })

    it('should find and replace "Bauhandwerker_in"', () => {
      document.body.innerHTML = 'Sie als Bauhandwerker_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauhandwerker sind dazu verpflichtet.')
    })

    it('should find and replace "Bauherr_in"', () => {
      document.body.innerHTML = 'Sie als Bauherr_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauherr sind dazu verpflichtet.')
    })

    it('should find and replace "Bauleiter_in"', () => {
      document.body.innerHTML = 'Sie als Bauleiter_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bauleiter sind dazu verpflichtet.')
    })

    it('should find and replace "Bayer_in"', () => {
      document.body.innerHTML = 'Sie als Bayer_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bayer sind dazu verpflichtet.')
    })

    it('should find and replace "Schwäger_in"', () => {
      document.body.innerHTML = 'Sie als Schwäger_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schwager sind dazu verpflichtet.')
    })

    it('should find and replace "Zöger_in"', () => {
      document.body.innerHTML = 'Sie als Zöger_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Zögerer sind dazu verpflichtet.')
    })

    it('should find and replace "Wander_in"', () => {
      document.body.innerHTML = 'Sie als Wander_in sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Wanderer sind dazu verpflichtet.')
    })

    it('should not replace terms ending with "_info"', function () {
      document.body.innerHTML = 'the package_info is important'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('the package_info is important')
    })
  })

  describe('"In"', () => {
    it('should find and replace "BayerIn"', () => {
      document.body.innerHTML = 'Sie als BayerIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Bayer sind dazu verpflichtet.')
    })

    it('should find and replace "SchwägerIn"', () => {
      document.body.innerHTML = 'Sie als SchwägerIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Schwager sind dazu verpflichtet.')
    })

    it('should find and replace "ZögerIn"', () => {
      document.body.innerHTML = 'Sie als ZögerIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Zögerer sind dazu verpflichtet.')
    })

    it('should find and replace "WanderIn"', () => {
      document.body.innerHTML = 'Sie als WanderIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Wanderer sind dazu verpflichtet.')
    })

    it('should find and replace "GegnerIn"', () => {
      document.body.innerHTML = 'Sie als GegnerIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Gegner sind dazu verpflichtet.')
    })

    it('should find and replace "DirektkandidatIn"', () => {
      document.body.innerHTML = 'Sie als DirektkandidatIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Direktkandidat sind dazu verpflichtet.')
    })

    it('should find and replace "ChefIn"', () => {
      document.body.innerHTML = 'Sie als ChefIn sind dazu verpflichtet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie als Chef sind dazu verpflichtet.')
    })

    it('should not replace words stating with "In"', () => {
      document.body.innerHTML = 'Der Film Inside ist ein sehr guter Film!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Der Film Inside ist ein sehr guter Film!')
    })

    it('should not replace word In', () => {
      document.body.innerHTML = 'Auf dem Trampolin springen ist In, aber auch gefährlich!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Auf dem Trampolin springen ist In, aber auch gefährlich!')
    })

    it('should not replace terms ending with "Info"', function () {
      document.body.innerHTML = 'the packageInfo is important'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('the packageInfo is important')
    })
  })

  describe('special', function () {
    it('should recognize space after gender term', function () {
      document.body.innerHTML = 'Alchemist*in sein ist gefragt.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Alchemist sein ist gefragt.')
    })

    it('should recognize dot after gender term', function () {
      document.body.innerHTML = 'Suche Alchemist*in.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Suche Alchemist.')
    })

    it('should recognize comma after gender term', function () {
      document.body.innerHTML = 'Suche Alchemist*in, schnell.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Suche Alchemist, schnell.')
    })

    it('should recognize exclamation mark after gender term', function () {
      document.body.innerHTML = 'Suche Alchemist*in!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Suche Alchemist!')
    })

    it('should recognize question mark after gender term', function () {
      document.body.innerHTML = 'Suche Alchemist*in?'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Suche Alchemist?')
    })

    it('should recognize colon after gender term', function () {
      document.body.innerHTML = 'Suche Alchemist*in: Dringend!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Suche Alchemist: Dringend!')
    })

    it('should recognize ein:e before a gender term', function () {
      document.body.innerHTML = 'ein:e Nachfolger:in wird bereits gesucht'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('ein Nachfolger wird bereits gesucht')
    })
  })
})
