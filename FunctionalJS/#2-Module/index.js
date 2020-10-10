const path = require('path');

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
  joinCharacters,
  sorting,
  compose,
} = require('./utils');

const pathName = path.join(__dirname, 'legendas');

compose(
  readFilesPaths,
  createCompleteFilePath,
  filterFilesEndExtension('.srt'),
  filesIntoUniqueFile,
  breakLines,
  removeUnnecessaryLines,
  removePatternOfText('-->'),
  removePatternOfTextThatContainNumbers,
  splitBadCharacters('<i>'),
  splitBadCharacters('i>'),
  splitBadCharacters('<'),
  joinCharacters,
  textToWords,
  removeUnnecessaryLines,
  countUseWords,
  sorting('repeatedWord')('asc'),
  console.log
)(pathName);

/*
const filePaths = readFilesPaths(pathName);
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
*/
