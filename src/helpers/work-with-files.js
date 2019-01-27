const fs = require('fs');
const path = require('path');
const defaultDirectory = path.resolve(__dirname, './..');
const pathCopyFile = path.resolve(defaultDirectory, './\/index.html');
const pathToBundleJs =  path.resolve(defaultDirectory, './\/..\/build/\/bundle.js');

fs.copyFile(pathCopyFile, `${defaultDirectory}/../build/index.html`, (err) => {
    if (err) {
        console.log(`${pathCopyFile} is not copied`);
    } else {
        console.log(`${pathCopyFile} was copied`);
    }
});

fs.unlink(pathToBundleJs, (err) => {
    if (err) {
        console.log(`${pathToBundleJs} is not exists`);
    } else {
        console.log(`file ${pathToBundleJs} was deleted`);
    }   
});