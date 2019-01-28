'use strict';

const constants = require('./const');

function copyHtml() {    
  const pathCopyFile = constants.path.resolve(constants.defaultDirectory, './\/src\/index.html');       
    
  constants.fs.copyFile(pathCopyFile, `${constants.defaultDirectory}/build/index.html`, (err) => {
    if (err) {
      console.log(`${pathCopyFile} is not copied`);
    } else {
      console.log(`${pathCopyFile} was copied`);
    }
  });
}

module.exports = copyHtml;