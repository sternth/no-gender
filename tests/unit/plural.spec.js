require('../../src/content/app')
require('../../src/content/list.plural')
require('../../src/content/list.singular')
require('../../src/content/script')

describe('no-gender - plural', () => {
  const searchAndDestroy = window.noGender.run

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('"_innen"', () => {
    it('should find and replace "Unterstrich: Kund_innen"', () => {
      document.body.innerHTML = 'Gendern mit Unterstrich: Kund_innen.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Gendern mit Unterstrich: Kunden.')
    })

    it('should find and replace König_innen"', () => {
      document.body.innerHTML = 'Sie alle sind König_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Könige!')
    })

    it('should find and replace Köch_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Köch_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Köche!')
    })

    it('should find and replace Freund_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Freund_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Freunde!')
    })

    it('should find and replace Dieb_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Dieb_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Diebe!')
    })

    it('should find and replace Generalsekretär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Generalsekretär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Generalsekretäre!')
    })

    it('should find and replace Komplementär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Komplementär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Komplementäre!')
    })

    it('should find and replace Privatsekretär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Privatsekretär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Privatsekretäre!')
    })

    it('should find and replace Sekretär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Sekretär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Sekretäre!')
    })

    it('should find and replace Staatssekretär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Staatssekretär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Staatssekretäre!')
    })

    it('should find and replace Volontär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Volontär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Volontäre!')
    })

    it('should find and replace Aktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Aktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Aktionäre!')
    })

    it('should find and replace Grossaktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Grossaktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Grossaktionäre!')
    })

    it('should find and replace Großaktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Großaktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Großaktionäre!')
    })

    it('should find and replace Kleinaktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kleinaktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kleinaktionäre!')
    })

    it('should find and replace Legionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Legionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Legionäre!')
    })

    it('should find and replace Lottomillionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Lottomillionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Lottomillionäre!')
    })

    it('should find and replace Mehrheitsaktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Mehrheitsaktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Mehrheitsaktionäre!')
    })

    it('should find and replace Millionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Millionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Millionäre!')
    })

    it('should find and replace Reaktionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Reaktionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Reaktionäre!')
    })

    it('should find and replace Veterinär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Veterinär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Veterinäre!')
    })

    it('should find and replace Visionär_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Visionär_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Visionäre!')
    })

    it('should find and replace Akquisiteur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Akquisiteur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Akquisiteure!')
    })

    it('should find and replace Akteur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Akteur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Akteure!')
    })

    it('should find and replace Chauffeur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Chauffeur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Chauffeure!')
    })

    it('should find and replace Diplomingenieur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Diplomingenieur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Diplomingenieure!')
    })

    it('should find and replace Friseur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Friseur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Friseure!')
    })

    it('should find and replace Gouverneur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Gouverneur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Gouverneure!')
    })

    it('should find and replace Graveur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Graveur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Graveure!')
    })

    it('should find and replace Guillocheur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Guillocheur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Guillocheure!')
    })

    it('should find and replace Heizungsmonteur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Heizungsmonteur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Heizungsmonteure!')
    })

    it('should find and replace Hypnotiseur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Hypnotiseur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Hypnotiseure!')
    })

    it('should find and replace Importeur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Importeur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Importeure!')
    })

    it('should find and replace Ingenieur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Ingenieur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Ingenieure!')
    })

    it('should find and replace Kollaborateur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kollaborateur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kollaborateure!')
    })

    it('should find and replace Konstrukteur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Konstrukteur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Konstrukteure!')
    })

    it('should find and replace Lebensmittelkontrolleur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Lebensmittelkontrolleur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Lebensmittelkontrolleure!')
    })

    it('should find and replace Masseur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Masseur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Masseure!')
    })

    it('should find and replace Medailleur_innen"', () => {
      document.body.innerHTML = 'Sie alle sind Medailleur_innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Medailleure!')
    })
  })

  describe('"*innen"', () => {
    it('should find and replace "Sternchen: Kund*innen"', () => {
      document.body.innerHTML = 'Gendern mit Sternchen: Kund*innen.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Gendern mit Sternchen: Kunden.')
    })

    it('should find and replace "Sternchen: Kunden*innen"', function () {
      document.body.innerHTML = 'Das gilt für Kunden*innen bei körpernahen Dienstleistungen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Das gilt für Kunden bei körpernahen Dienstleistungen!')
    })

    it('should find and replace Bierverkäufer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bierverkäufer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bierverkäufer!')
    })

    it('should find and replace Bierverleger*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bierverleger*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bierverleger!')
    })

    it('should find and replace Bieter*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bieter*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bieter!')
    })

    it('should find and replace Bildersammler*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bildersammler*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bildersammler!')
    })

    it('should find and replace Bildhauer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bildhauer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bildhauer!')
    })

    it('should find and replace Bildungsminister*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bildungsminister*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bildungsminister!')
    })

    it('should find and replace Billardspieler*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Billardspieler*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Billardspieler!')
    })

    it('should find and replace Binder*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Binder*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Binder!')
    })

    it('should find and replace Biologieprofessor*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Biologieprofessor*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Biologieprofessoren!')
    })

    it('should find and replace Biolog*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Biolog*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Biologen!')
    })

    it('should find and replace Bischöf*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bischöf*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bischöfe!')
    })

    it('should find and replace Bittsteller*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bittsteller*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bittsteller!')
    })

    it('should find and replace Blumenhändler*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Blumenhändler*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Blumenhändler!')
    })

    it('should find and replace Blumenverkäufer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Blumenverkäufer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Blumenverkäufer!')
    })

    it('should find and replace Blutspender*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Blutspender*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Blutspender!')
    })

    it('should find and replace Bobfahrer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bobfahrer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bobfahrer!')
    })

    it('should find and replace Bochumer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bochumer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bochumer!')
    })

    it('should find and replace Bodybuilder*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bodybuilder*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bodybuilder!')
    })

    it('should find and replace Bogenschütz*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bogenschütz*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bogenschützen!')
    })

    it('should find and replace Böhm*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Böhm*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Böhmen!')
    })

    it('should find and replace Bolivianer*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bolivianer*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bolivianer!')
    })

    it('should find and replace Bonner*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bonner*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bonner!')
    })

    it('should find and replace Bosnier*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bosnier*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bosnier!')
    })

    it('should find and replace Botaniker*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Botaniker*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Botaniker!')
    })

    it('should find and replace Botokud*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Botokud*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Botokuden!')
    })

    it('should find and replace Botschafter*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Botschafter*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Botschafter!')
    })

    it('should find and replace Bischöf*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bischöf*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bischöfe!')
    })

    it('should find and replace Baron*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Baron*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Barone!')
    })

    it('should find and replace Füchs*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Füchs*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Füchse!')
    })

    it('should find and replace Kapitän*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kapitän*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kapitäne!')
    })

    it('should find and replace Kassenwart*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kassenwart*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kassenwarte!')
    })

    it('should find and replace Liebling*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Liebling*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Lieblinge!')
    })

    it('should find and replace Muslim*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Muslim*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Muslime!')
    })

    it('should find and replace Päpst*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Päpst*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Päpste!')
    })

    it('should find and replace Prinzipal*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Prinzipal*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Prinzipale!')
    })

    it('should find and replace Rät*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Rät*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Räte!')
    })

    it('should find and replace Schmied*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Schmied*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Schmiede!')
    })

    it('should find and replace Anwält*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Anwält*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Anwälte!')
    })

    it('should find and replace Feind*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Feind*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Feinde!')
    })

    it('should find and replace Wirt*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Wirt*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Wirte!')
    })

    it('should find and replace Wölf*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Wölf*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Wölfe!')
    })

    it('should find and replace Zwerg*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Zwerg*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Zwerge!')
    })

    it('should find and replace Ärzt*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Ärzt*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Ärzte!')
    })

    it('should find and replace Archivar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Archivar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Archivare!')
    })

    it('should find and replace Bibliothekar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Bibliothekar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bibliothekare!')
    })

    it('should find and replace Jubilar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Jubilar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Jubilare!')
    })

    it('should find and replace Justitiar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Justitiar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Justitiare!')
    })

    it('should find and replace Missionar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Missionar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Missionare!')
    })

    it('should find and replace Vampir*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Vampir*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Vampire!')
    })

    it('should find and replace Vikar*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Vikar*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Vikare!')
    })

    it('should find and replace Emissär*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Emissär*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Emissäre!')
    })

    it('should find and replace Steinmetz*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Steinmetz*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Steinmetze!')
    })

    it('should find and replace "Wander*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Wander*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Wanderer!')
    })

    it('should find and replace "Kolleg*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kolleg*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kollegen!')
    })

    it('should find and replace "Kollegen*innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kollegen*innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kollegen!')
    })
  })

  describe('":innen"', () => {
    it('should find and replace "Doppelpunkt: Kund:innen"', () => {
      document.body.innerHTML = 'Gendern mit Doppelpunkt: Kund:innen.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Gendern mit Doppelpunkt: Kunden.')
    })

    it('should find and replace Beamt:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Beamt:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Beamten!')
    })

    it('should find and replace "Beobachter:innen"', () => {
      document.body.innerHTML = 'Wir alle sind Beobachter:innen ...'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Wir alle sind Beobachter ...')
    })

    it('should find and replace Provokateur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Provokateur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Provokateure!')
    })

    it('should find and replace Rechercheur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Rechercheur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Rechercheure!')
    })

    it('should find and replace Redakteur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Redakteur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Redakteure!')
    })

    it('should find and replace Regisseur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Regisseur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Regisseure!')
    })

    it('should find and replace Taxichauffeur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Taxichauffeur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Taxichauffeure!')
    })

    it('should find and replace Voyageur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Voyageur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Voyageure!')
    })

    it('should find and replace Voyeur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Voyeur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Voyeure!')
    })

    it('should find and replace Vulkaniseur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Vulkaniseur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Vulkaniseure!')
    })

    it('should find and replace Ziseleur:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Ziseleur:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Ziseleure!')
    })

    it('should find and replace Erzherzog:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Erzherzog:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Erzherzöge!')
    })

    it('should find and replace Fränk:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Fränk:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Franken!')
    })

    it('should find and replace Frei:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Frei:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Freiherren!')
    })

    it('should find and replace Hünd:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Hünd:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Hunde!')
    })

    it('should find and replace Israel:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Israel:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Israeli!')
    })

    it('should find and replace Konsul:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Konsul:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Konsuln!')
    })

    it('should find and replace Landsmänn:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Landsmänn:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Landsmänner!')
    })

    it('should find and replace Moslem:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Moslem:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Moslems!')
    })

    it('should find and replace Jüd:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Jüd:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Juden!')
    })

    it('should find and replace Obmänn:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Obmänn:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Obmänner!')
    })

    it('should find and replace Spitzbüb:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Spitzbüb:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Spitzbuben!')
    })

    it('should find and replace Teufel:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Teufel:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Teufel!')
    })

    it('should find and replace Enkel:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Enkel:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Enkel!')
    })

    it('should find and replace Gräf:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Gräf:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Grafen!')
    })

    it('should find and replace Westfäl:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Westfäl:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Westfalen!')
    })

    it('should find and replace Nachbar:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Nachbar:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Nachbarn!')
    })

    it('should find and replace Tör:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Tör:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Tore!')
    })

    it('should find and replace Kommissar:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kommissar:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kommissare!')
    })

    it('should find and replace Kommissär:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kommissär:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kommissare!')
    })

    it('should find and replace Waffennärr:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Waffennärr:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Waffennarren!')
    })

    it('should find and replace Kätz:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Kätz:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Katzen!')
    })

    it('should find and replace Chef:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Chef:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Chefs!')
    })

    it('should find and replace Prinzess:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Prinzess:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Prinzen!')
    })

    it('should find and replace Gött:innen"', () => {
      document.body.innerHTML = 'Sie alle sind Gött:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Götter!')
    })
  })

  describe('" innen"', () => {
    it('should find but not replace "Gap: Kund innen"', () => {
      document.body.innerHTML = 'Gender Gap: Kund innen.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Gender Gap: Kund innen.')
    })
  })

  describe('". innen"', () => {
    it('should find but not replace "Punkt: Kund. innen"', () => {
      document.body.innerHTML = 'Gendern mit Punkt: Kund.innen.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Gendern mit Punkt: Kund.innen.')
    })
  })

  describe('"Innen"', () => {
    it('should find and replace "ChefInnen"', () => {
      document.body.innerHTML = 'Sie alle sind ChefInnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Chefs!')
    })

    it('should find and replace "GegnerInnen"', () => {
      document.body.innerHTML = 'Sie alle sind GegnerInnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Gegner!')
    })

    it('should find and replace "DirektkandidatInnen"', () => {
      document.body.innerHTML = 'Sie alle sind DirektkandidatInnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Direktkandidaten!')
    })

    it('should find and replace "KandidatInnenliste"', () => {
      document.body.innerHTML = 'Sie alle sind KandidatInnenliste!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Kandidatenliste!')
    })

    it('should not replace words stating with "Innen"', () => {
      document.body.innerHTML = 'Die Innenausstattung ist schön!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Die Innenausstattung ist schön!')
    })

    it('should not replace word Innen', () => {
      document.body.innerHTML = 'Innen ist nicht außen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Innen ist nicht außen!')
    })
  })

  describe('&shy;', () => {
    it('should find and replace "Be&shy;am&shy;t:in&shy;nen"', () => {
      document.body.innerHTML = 'Sie alle sind Beamt:innen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Beamten!')
    })

    it('should find and replace "Kri&shy;ti&shy;ke&shy;r:in&shy;nen"', () => {
      document.body.innerHTML = 'Kri&shy;ti&shy;ke&shy;r:in&shy;nen geht das nicht weit genug.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Kritiker geht das nicht weit genug.')
    })
  })

  describe('"...innen und ..."', () => {
    it('should find and replace "Helferinnen und Helfer"', () => {
      document.body.innerHTML = 'Sie alle sind Helferinnen und Helfer!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Helfer!')
    })

    it('should find and replace "Ärztinnen und Ärzte"', () => {
      document.body.innerHTML = 'Sie alle sind Ärztinnen und Ärzte!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Ärzte!')
    })
  })

  describe('"...innen oder ..."', () => {
    it('should find and replace "Partnerinnen oder Partner"', () => {
      document.body.innerHTML = 'Eine Nachricht an alle Partnerinnen oder Partner!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Eine Nachricht an alle Partner!')
    })
  })

  describe('"... und ...innen"', function () {
    it('should find and replace "Bürger und Bürgerinnen"', function () {
      document.body.innerHTML = 'Sie alle sind Bürger und Bürgerinnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Bürger!')
    })

    it('should find and replace "Besucher und Besucherinnen"', function () {
      document.body.innerHTML = 'Sie alle sind Besucher und Besucherinnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Besucher!')
    })
  })

  describe('"... oder ...innen"', function () {
    it('should find and replace "Mitarbeiter oder Mitarbeiterinnen"', function () {
      document.body.innerHTML = 'Sie alle sind Mitarbeiter oder Mitarbeiterinnen!'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Sie alle sind Mitarbeiter!')
    })
  })
})
