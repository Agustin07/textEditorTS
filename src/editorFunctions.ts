// ---- npm modules
import * as fs from "fs";
import * as readline from "readline";

// ----  internal modules
import * as SCommands from "./SCommand";

// read script, get substitution commands, run editor!
export async function runScript(fileScript : string, listofCommands : SCommands.sCommand[], fileAddress : string) {
    let rl = readline.createInterface(fs.createReadStream(fileScript));
    let fList : SCommands.sCommand[] = [];
    for await (let line of rl) {
        fList.push( SCommands.formater(line, 'f') );
    }
    let allCommands : SCommands.sCommand[] = listofCommands.concat(fList);
    runEditor(allCommands, fileAddress);
  }

// run editor!
export async function runEditor(listofCommands : SCommands.sCommand[], fileAddress : string ) {
    const rl = readline.createInterface(fs.createReadStream(fileAddress));
    let conditionN : Boolean = !!(listofCommands.filter( value => (value.option === 'n')).length);
    let conditionI : Boolean = !!(listofCommands.filter( value => (value.option === 'i')).length);
    let updateContent : string = '';
    
    for await (let line of rl) {
        let matches : SCommands.sCommand[] = listofCommands.filter(value => value.expreg.test(line));
        for (let command of matches){
            line = line.replace(command.expreg,command.substitution.substring(0));
            switch (command.flag){
                case 'p' :
                    ( (conditionI) ? updateContent += line+'\n' : console.log(line) );  // conditionI -> true: print on file / false: print on console 
                break;

                case 'w' :
                    command.writeContent += line+'\n';
                break;
            } // end switch
        }  // end for command of matches
        if (conditionI) { 
            updateContent += line+'\n'; 
        } else {
            if (!conditionN) {  console.log(line); } 
        }
    } // end for line of rl
    if (conditionI) {  // output on file
        let fileUpdate = fs.createWriteStream(fileAddress);
        fileUpdate.write(updateContent);
    }
    for ( let writeaFile of listofCommands.filter( value => ( value.flag === 'w' ) ) ) { // write if flag flag
        let fileUpdate = fs.createWriteStream(writeaFile.fileToWrite+'.txt');
        fileUpdate.write(writeaFile.writeContent);
    }
}