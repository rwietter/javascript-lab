const path = require('path');

const { log } = require('console');
const {
  readFilesPaths,
  createCompleteFilePath,
  filterFilesEndExtension,
  filesIntoUniqueFile,
  removeUnnecessaryLines,
  removePatternOfText,
  removePatternOfTextThatContainNumbers,
  breakLines,
  splitBadCharacters,
  textToWords,
  countUseWords,
  sorting,
} = require('./utils');

const pathName = path.join(__dirname, 'legendas');
const filePaths = readFilesPaths(pathName);

/* -------------------------------------------- */
/* passed not implicit parameter to reference function
/* -------------------------------------------- */

const joinCharacters = (arr) => arr.join(' ');

filePaths
  .then(createCompleteFilePath)
  .then(filterFilesEndExtension('.srt'))
  .then(filesIntoUniqueFile)
  .then(breakLines)
  .then(removeUnnecessaryLines)
  .then(removePatternOfText('-->'))
  .then(removePatternOfTextThatContainNumbers)
  .then(splitBadCharacters('<i>'))
  .then(splitBadCharacters('i>'))
  .then(splitBadCharacters('<'))
  .then(joinCharacters)
  .then(textToWords)
  .then(removeUnnecessaryLines)
  .then(countUseWords)
  .then(sorting('repeatedWord')('asc'))
  .then(console.log);
