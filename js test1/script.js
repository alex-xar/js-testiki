"use strict";

function longWord(word) {
  if (word.length > 10) {
    console.log(
      word[0] +
        word.substring(1, word.length - 1).length +
        word[word.length - 1]
    );
  } else {
    console.log(word);
  }
}

longWord("localization");
longWord("internationalization");
longWord("word");
longWord("");
longWord("1");
