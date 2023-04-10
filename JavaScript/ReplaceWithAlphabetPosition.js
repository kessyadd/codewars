// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  let arr = [];
  const str = text
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .map((e) => (arr = [...arr, getIndex(e)]));
  const res = arr.join(" ");
  return res;
}

function getIndex(alphabet) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabets.indexOf(alphabet) + 1;
}
