import { parseString } from 'xml2js';
import { readFile } from 'fs';

function parseXMLFile(): Promise<any> {
  return new Promise((resolve, reject) => {
    readFile('./coverage/clover.xml', 'utf8', (err, data) => {
      if (err) {
        reject('File Dose not exist!');
        return;
      }

      parseString(data, (err, result) => {
        if (err) {
          reject('Something Went wrong!');
          return;
        }

        resolve(result);
      });
    });
  });
}

const data = await parseXMLFile();
const codeStats = data.coverage.project[0].metrics[0].$;

if (95 > Math.floor((Number(codeStats.coveredstatements) / Number(codeStats.statements)) * 100)) {
  throw new Error('Statements is required to be 95% or higher');
}
if (95 > Math.floor((Number(codeStats.coveredconditionals) / Number(codeStats.conditionals)) * 100)) {
  throw new Error('Conditionals is required to be 95% or higher');
}
if (95 > Math.floor((Number(codeStats.coveredmethods) / Number(codeStats.methods)) * 100)) {
  throw new Error('Methods is required to be 95% or higher');
}
