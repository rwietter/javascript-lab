const path = require('path');

const {
  readFilesPaths,
  createCompleteFilePath,
  filterFilesEndExtension,
  filesIntoUniqueFile,
  removeUnnecessaryLines,
  removePatternOfText,
  removePatternOfTextThatContainNumbers,
} = require('./utils');

const pathName = path.join(__dirname, 'legendas');
const filePaths = readFilesPaths(pathName);

filePaths
  .then((shortFilePaths) => createCompleteFilePath(shortFilePaths))
  .then((filesPaths) => filterFilesEndExtension(filesPaths, '.srt'))
  .then((completeFilePaths) => filesIntoUniqueFile(completeFilePaths))
  .then((fileText) => fileText.join('\n').split('\n'))
  .then(removeUnnecessaryLines)
  .then((fileText) => removePatternOfText(fileText, '-->'))
  .then(removePatternOfTextThatContainNumbers)
  .then(console.log);
