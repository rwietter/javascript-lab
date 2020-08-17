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
const filterFilesEndExtension = (filesPath, pattern) => {
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

const removePatternOfText = (fileText, pattern) => {
  return fileText.filter((text) => !text.includes(pattern));
};

const removePatternOfTextThatContainNumbers = (fileText) => {
  return fileText.filter((text) => {
    const number = parseInt(text.trim(), 10);
    return Number.isNaN(number);
  });
};

module.exports = {
  readFilesPaths,
  createCompleteFilePath,
  filterFilesEndExtension,
  filesIntoUniqueFile,
  removeUnnecessaryLines,
  removePatternOfText,
  removePatternOfTextThatContainNumbers,
};
