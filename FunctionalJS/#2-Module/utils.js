const fs = require('fs');
const path = require('path');

const createCompleteFilePath = (dirPaths) => {
  return dirPaths.map((file) => path.join(__dirname, 'legendas', file));
};

const readFilesPaths = (pathName) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readdir(pathName, (err, file) => {
        resolve(file);
      });
    } catch (error) {
      reject(error);
    }
  });
};

// filter files end with .srt extension

const filterFilesEndExtension = (pattern) => (filesPath) => {
  return filesPath.filter((filePath) => filePath.endsWith(pattern));
};

// transform all files into unique file with strings

const joinFilesIntoUniqueFile = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const stringFile = fs.readFileSync(filePath, {
        encoding: 'utf-8',
      });
      resolve(stringFile.toString());
    } catch (error) {
      reject(new Error(error));
    }
  });
};

const filesIntoUniqueFile = (filesPath) => {
  return Promise.all(
    filesPath.map((filePath) => joinFilesIntoUniqueFile(filePath))
  );
};

const removeUnnecessaryLines = (fileText) => {
  return fileText.filter((text) => text.trim());
};

const removePatternOfText = (pattern) => (fileText) => {
  return fileText.filter((text) => !text.includes(pattern));
};

const removePatternOfTextThatContainNumbers = (fileText) => {
  return fileText.filter((text) => {
    const number = parseInt(text.trim(), 10);
    return Number.isNaN(number);
  });
};

const breakLines = (fileText) => fileText.join('\n').split('\n');

const arrToStr = (arr) => arr.toString();

const splitBadCharacters = (char) => (arr) => {
  const str = arrToStr(arr);
  return str.replace(/[^\w|ç|<i>|?|!|']/g, ' ').split(char);
};

const textToWords = (arr) => arrToStr(arr).split(' ');

const countUseWords = (arr) => {
  return Object.values(
    arr.reduce((acc, el) => {
      const word = el.toLowerCase();
      const repeatedWord = acc[word] ? acc[word].repeatedWord + 1 : 1;
      acc[word] = { word, repeatedWord };
      return acc;
    }, {})
  );
};

const sorting = (attr) => (type = 'asc') => (arr) => {
  const order = {
    asc: (a, b) => b[attr] - a[attr],
    desc: (a, b) => a[attr] - b[attr],
  };
  return arr.sort(order[type]);
};

module.exports = {
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
};
