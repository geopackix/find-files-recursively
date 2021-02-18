/**
 * OPTION A
 */
/*
const recu = require('recursive-files');

let fileList = [];

recu('./directoryToSerach', {
  hidden: false,
}, (err, file)=>{
  if(!err){
    fileList.push(file);
    console.log(file);
  }
})


*/
/**
 * OPTION B
 */
/*
const recu = require("recursive-readdir");
 
recu("./directoryToSerach", function (err, files) {
  // `files` is an array of file paths
  console.log(files);
});
*/
/**
 * OPTION C (own)
 */

const fs = require('fs');
const path = require('path');

function traverseDir(dir, resultArray) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
          //console.log(fullPath);
          traverseDir(fullPath, resultArray);
     } else {
      resultArray.push(fullPath)
          //console.log(fullPath);
     }  
  });
}
let files = [];
traverseDir('./directoryToSerach', files);
console.log(files)


