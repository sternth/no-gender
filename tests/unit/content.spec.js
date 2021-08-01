const {
  htmlMockWithScriptTag,
  expectedScriptTag,
  htmlMockWithStyleTag,
  expectedStyleTag,
  htmlMockWithVariants,
  expectedVariants,
} = require('../fixtures/body.fixture')

require('../../src/content/app')
require('../../src/content/list.plural')
require('../../src/content/list.singular')
require('../../src/content/script')

describe('no-gender', () => {
  const searchAndDestroy = window.noGender.run

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('common', () => {
    it('should have an application object', () => {
      expect(window.noGender).toBeDefined()
    })

    it('should ignore script tags', () => {
      document.body.innerHTML = htmlMockWithScriptTag
      searchAndDestroy()
      expect(document.body.innerHTML).toBe(expectedScriptTag)
    })

    it('should ignore style tags', () => {
      document.body.innerHTML = htmlMockWithStyleTag
      searchAndDestroy()
      expect(document.body.innerHTML).toBe(expectedStyleTag)
    })

    it('should recognize multiple variants', () => {
      document.body.innerHTML = htmlMockWithVariants
      searchAndDestroy()
      expect(document.body.innerHTML).toBe(expectedVariants)
    })

    it('should return an empty string for empty input', () => {
      document.body.innerHTML = ''
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('')
    })

    it('should replace nothing', () => {
      document.body.innerHTML = 'Lorem ipsum dolor sit amet'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Lorem ipsum dolor sit amet')
    })

    it('should not clean content if no gender expression exists', () => {
      document.body.innerHTML = 'Lo&shy;rem ip&shy;sum do&shy;lor sit amet'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Lo\u00ADrem ip\u00ADsum do\u00ADlor sit amet')
    })
  })

  describe('plural terms', () => {
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
        document.body.innerHTML = 'Sie alle sind Be&shy;am&shy;t:in&shy;nen!'
        searchAndDestroy()
        expect(document.body.innerHTML).toBe('Sie alle sind Beamten!')
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
  })

  describe('singular terms', () => {
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
    })
  })
})
