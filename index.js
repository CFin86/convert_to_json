import fs from "fs";
import clipboardy from "clipboardy";

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
let urls = data.split(" ");

const jsonArr = urls.map(i => ' "' + i + '"');
jsonArr.splice(jsonArr.length-1)
jsonArr.join();
clipboardy.writeSync("[" +jsonArr + " ]");
console.log("Copied to clipboard!");
});