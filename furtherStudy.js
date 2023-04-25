'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }

  return Array.from(result)
}

function kidsGame(names) {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if(!firstLetterToWords.hasOwnProperty(name[0])) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);

    }
  }
  
  while (true) {
    let lastWord = output[output.length - 1];
    let lastLetter = lastWord[lastWord.length - 1];

    

    if(
      !firstLetterToWords.hasOwnProperty(lastLetter) || 
      firstLetterToWords[lastLetter].length === 0
    ) {
      break;
    }

    const word = firstLetterToWords[lastLetter].shift(); //undefined
    output.push(word);
  }

  return output;
}

