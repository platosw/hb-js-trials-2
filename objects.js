'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCount = {};

  for(const word of phrase.split(' ')) {
    if(wordCount.hasOwnProperty(word)) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
};

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.5: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if(melonPrices.hasOwnProperty(price) === false) {
    return;
  }

  return melonPrices[price].sort();
};
