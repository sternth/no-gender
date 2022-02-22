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
require('../../src/content/list.custom')
require('../../src/content/list.singular')
require('../../src/content/script')

describe('no-gender - common', () => {
  const searchAndDestroy = window.noGender.run

  afterEach(() => {
    document.body.innerHTML = ''
  })

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

  describe('normalizing', () => {
    it('should remove disturbing &shy; html entities even if there is no gender term', () => {
      document.body.innerHTML = 'Lo&shy;rem ip&shy;sum do&shy;lor sit amet'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Lorem ipsum dolor sit amet')
    })
  })

  describe('detection', () => {
    let replaceMock

    beforeEach(() => {
      replaceMock = jest.spyOn(String.prototype, 'replace')
    })

    afterEach(() => {
      replaceMock.mockClear()
    })

    it('should not replace sentences starting with In', () => {
      document.body.innerHTML = 'In Lissabon spricht man portugiesisch.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('In Lissabon spricht man portugiesisch.')
      expect(replaceMock).not.toHaveBeenCalled()
    })

    it('should not replace sentences starting with Innen', () => {
      document.body.innerHTML = 'Innen scheint die Sonne nicht.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Innen scheint die Sonne nicht.')
      expect(replaceMock).not.toHaveBeenCalled()
    })
  })

  describe('special terms', () => {
    it('should find and replace "jede:r"', () => {
      document.body.innerHTML = 'Rund jede:r Sechste ist von Armut gefährdet.'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('Rund jeder Sechste ist von Armut gefährdet.')
    })
  })

  describe('input elements', () => {
    it('should ignore contenteditable elements', () => {
      document.body.innerHTML = '<div contenteditable="true">Held*in</div>'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('<div contenteditable="true">Held*in</div>')
    })

    it('should ignore nodes inside contenteditable elements', () => {
      document.body.innerHTML = '<div contenteditable="true"><span>Held*in</span></div>'
      searchAndDestroy()
      expect(document.body.innerHTML).toBe('<div contenteditable="true"><span>Held*in</span></div>')
    })
  })
})
