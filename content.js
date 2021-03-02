(function main () {
  const innenExp = '([:*_]innen|!nnen)';
  const inExp = '([:*_]in|!n)';
  const innenRegExp = new RegExp(innenExp);
  const inRegExp = new RegExp(inExp);
  const plurals = getListOfRegExpForPlural();
  const singulars = getListOfRegExpForSingular();

  (function run () {
    const { counter, duration } = searchAndDestroy();
    try {
      chrome.runtime.sendMessage({
        counter: counter,
      });
    } catch (err) {
    }
    console.debug('duration:', duration);
    setTimeout(() => run(), Math.max(2000, duration * 1000));
  }());

  function searchAndDestroy () {
    if (plurals.length === 0 && singulars.length === 0) {
      return;
    }

    const start = Date.now();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let counter = 0;
    let node;
    while (node = walker.nextNode()) {
      if (innenRegExp.test(node.nodeValue)) {
        const parsed = parse(node.nodeValue, plurals);
        node.nodeValue = parsed.value;
        counter += parsed.counter;
      }
      if (inRegExp.test(node.nodeValue)) {
        const parsed = parse(node.nodeValue, singulars);
        node.nodeValue = parsed.value;
        counter += parsed.counter;
      }
    }

    return {
      counter: counter,
      duration: Date.now() - start,
    };
  }

  function parse (str, list) {
    let c = 0;
    list.forEach(item => {
      const { regExp, replace } = item;
      str = str.replace(regExp, function (match, word) {
        let replaced = null;
        try {
          if (typeof replace === 'string') {
            replaced = replace;
          } else {
            console.log('regExp:', regExp, 'word:', word);
            replaced = replace(word);
          }
        } catch (err) {
          console.debug('item:', item);
          console.error(err);
        }
        c++;
        return replaced;
      });
    });
    return {
      value: str,
      counter: c,
    };
  }

  function getListOfRegExpForSingular () {
    const singularsOfCategoryE = '(' + getSingularsOfCategoryE() + ')';
    const regExpCategoryE = getInRegExp(singularsOfCategoryE, word => word + 'e');
    const regExpIn = { regExp: inRegExp, replace: '' };

    return [
      getInRegExp('Bäuer', 'Bauer'),
      getInRegExp('Bürg', 'Bürger'),
      getInRegExp('Ärzt', 'Arzt'),
      getInRegExp('Anwält', 'Anwalt'),
      getInRegExp('Gött', 'Gott'),
      getInRegExp('Rät', 'Rat'),
      getInRegExp('Päpst', 'Papst'),
      getInRegExp('Fürst', 'Furst'),
      getInRegExp('Wölf', 'Wolf'),
      getInRegExp('Prinzess', 'Prinz'),
      getInRegExp('Närr', 'Narr'),
      getInRegExp('Gräf', 'Graf'),
      getInRegExp('Tör', 'Tor'),
      getInRegExp('Köch', 'Koch'),
      getInRegExp('Büb', 'Bub'),
      getInRegExp('Spätz', 'Spatz'),
      getInRegExp('Schwän', 'Schwan'),
      getInRegExp('Männ', 'Mann'),
      getInRegExp('Kustod', 'Kustos'),
      getInRegExp('Kirgis', 'Kirgisin'),
      getInRegExp('Israel', 'Israeli'),
      getInRegExp('Hünd', 'Hund'),
      getInRegExp('Füchs', 'Fuchs'),
      getInRegExp('Frei', 'Freier'),
      getInRegExp('Bischöf', 'Bischof'),
      getInRegExp('Schwäger', 'Schwager'),
      getInRegExp('Zöger', 'Zögerer'),
      regExpCategoryE,
      regExpIn,
    ]
  }

  function getListOfRegExpForPlural () {
    const pluralsOfCategoryE = '(' + getPluralsOfCategoryE() + ')';
    const regExpCategoryER = getInnenRegExp('(er)', 'er');
    const regExpCategoryE = getInnenRegExp(pluralsOfCategoryE, word => word + 'e');
    const regExpInnen = { regExp: innenRegExp, replace: 'en' };

    return [
      getInnenRegExp('Erzherzog', 'Erzherzöge'),
      getInnenRegExp('Fränk', 'Franken'),
      getInnenRegExp('Frei', 'Freiherren'),
      getInnenRegExp('Hünd', 'Hunde'),
      getInnenRegExp('Israel', 'Isreali'),
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
      regExpCategoryER,
      regExpCategoryE,
      regExpInnen,
    ];
  }

  function getInnenRegExp(search, replace) {
    return {
      regExp: new RegExp(search + innenExp, 'g'),
      replace: replace,
    };
  }

  function getInRegExp(search, replace) {
    return {
      regExp: new RegExp(search + inExp, 'g'),
      replace: replace,
    };
  }

  function getPluralsOfCategoryE() {
    return [
      'Bischöf',
      'Baron',
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
    ].join('|');
  }

  function getSingularsOfCategoryE() {
    return [
      'log',
      'gog',
      'oman',
      'Kolleg',
      'Zeug',
      'Strateg',
      'Strateg',
      'Beamt',
      'Expert',
      'Gatt',
      'Pat',
      'Schott',
      'Hirt',
      'Mulatt',
      'Lett',
      'Gefährt',
      'Kroat',
      'Kelt',
      'Est',
      'Brit',
      'Bot',
      'Asket',
      'Asiat',
      'Westfäl',
      'Wend',
      'Welf',
      'Russ',
      'Vietnames',
      'Vestal',
      'Verones',
      'Usbek',
      'Uigur',
      'Turkmen',
      'Türk',
      'Tschech',
      'Tragöd',
      'Togoles',
      'Schütz',
      'Tadschik',
      'Südsudanes',
      'Sudanes',
      'Kund',
      'Sorb',
      'Sklav',
      'Slaw',
      'Slowak',
      'Slowen',
      'Serb',
      'Senegales',
      'Schwed',
      'Schurk',
      'Lots',
      'Schöff',
      'Schimpans',
      'Schaman',
      'Kumpan',
      'Sard',
      'Rival',
      'Rumän',
      'Reuss',
      'Reuß',
      'Rätoroman',
      'Pol',
      'Portugies',
      'Preuss',
      'Preuß',
      'Osman',
      'Oriental',
      'Orthopäd',
      'Nymphoman',
      'Jüd',
      'Nebens',
      'Nepales',
      'Myanmar',
      'Monegass',
      'Mongol',
      'Erb',
      'Mazedon',
      'Makedon',
      'Madagass',
      'Madegass',
      'Löw',
      'Libanes',
      'Langobard',
      'Lapp',
      'Kurd',
      'Banaus',
      'Kors',
      'Kosovar',
      'Kongoles',
      'Kompliz',
      'Kompars',
      'Kommiliton',
      'Kätz',
      'Kasach',
      'Katalan',
      'Kannibal',
      'Jugoslaw',
      'Jagellon',
      'Jeck',
      'Jesid',
      'Ir',
      'Invalid',
      'Insass',
      'Hess',
      'Hellen',
      'Heid',
      'Guatemaltek',
      'Griech',
      'Ghanes',
      'Gespiel',
      'Genoss',
      'German',
      'Genues',
      'Gemahl',
      'Fränk',
      'Französ',
      'Finn',
      'Falasch',
      'Rival',
      'Erb',
      'Elev',
      'Druid',
      'Drus',
      'Drach',
      'Dän',
      'Chilen',
      'Chines',
      'Bulgar',
      'Botokud',
      'Böhm',
      'Awar',
      'Bajuwar',
      'Balines',
      'Apach',
      'Aranes',
      'Ans',
      'Häs',
      'Sächs',
      'Afghan',
      'Äbtiss',
      'Abchas',
    ].join('|');
  }
}());
