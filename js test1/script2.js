"use strict";

function longWord(word) {
  if (word === word.toUpperCase()) console.log(word.toLowerCase());
  else {
    var a = word[0];
    word = word.slice(1, word.length);
    if (word == word.toUpperCase())
      console.log(a.toUpperCase() + word.toLowerCase());
    else {
      console.log(a + word);
    }
  }
}
longWord("cAPS");
longWord("Lock");
longWord("wHY DO wE NEED cAPS lOCK?");
longWord("FuNkY iS nOt CaPs!");
