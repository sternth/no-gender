(function main () {
  const innenExp = '([:*_]innen|!nnen)';
  const innenRegExp = new RegExp(innenExp);
  const list = getRegularExpressions();

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
    if (list.length === 0) {
      return;
    }

    const start = Date.now();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let counter = 0;
    let node;
    let str;
    while (node = walker.nextNode()) {
      if (innenRegExp.test(node.nodeValue)) {
        str = node.nodeValue;
        list.forEach(item => {
          const { regExp, replace } = item;
          str = str.replace(regExp, function (match) {
            let replaced = null;
            try {
              if (typeof replace === 'string') {
                replaced = replace;
              } else {
                replaced = replace(match[1]);
              }
            } catch (err) {
              console.debug('item:', item);
              console.error(err);
            }
            counter++;
            return replaced;
          });
        });
        node.nodeValue = str;
      }
    }

    return {
      counter: counter,
      duration: Date.now() - start,
    };
  }

  function getRegularExpressions() {
    const regExpCategoryER = getInnenRegExp('(er)', 'er');
    const wordsOfCategoryE = getWordsOfCategoryE();
    const regExpCategoryE = getInnenRegExp(wordsOfCategoryE, function (word) {
      return word + 'e';
    });
    const regExpInnen = {
      regExp: innenRegExp,
      replace: 'en',
    };

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

  function getWordsOfCategoryE() {
    return [
      'Bischöfinnen',
      'Baroninnen',
      'Füchsinnen',
      'Kapitäninnen',
      'Kassenwartinnen',
      'Lieblinginnen',
      'Musliminnen',
      'Päpstinnen',
      'Prinzipalinnen',
      'Rätinnen',
      'Schmiedinnen',
      'Anwältinnen',
      'Feindinnen',
      'Wirtinnen',
      'Wölfinnen',
      'Zwerginnen',
      'Ärztinnen',
      'Archivarinnen',
      'Bibliothekarinnen',
      'Jubilarinnen',
      'Justitiarinnen',
      'Missionarinnen',
      'Vampirinnen',
      'Vikarinnen',
      'Emissärinnen',
      'Steinmetzinnen',
      'Königinnen',
      'Köchinnen',
      'Freundinnen',
      'Diebinnen',
      'tärinnen',
      'närinnen',
      'eurinnen',
    ].join('|');
  }
}());
