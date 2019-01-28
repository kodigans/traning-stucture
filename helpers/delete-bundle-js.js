'use strict';

const constants = require('./const');

function deleteBundleJs() {        
  const pathToBundleJs = constants.path.resolve(constants.defaultDirectory, './\/build\/bundle.js');

  constants.fs.unlink(pathToBundleJs, (err) => {
    if (err) {
      console.log(`${pathToBundleJs} is not exists`);
    } else {
      console.log(`file ${pathToBundleJs} was deleted`);
    }   
  });
}

module.exports = deleteBundleJs;