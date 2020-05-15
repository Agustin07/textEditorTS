// ---- external modules
import * as minimist from "minimist"

// ---- npm modules
import * as fs from "fs";
import * as readline from "readline";

// ----  internal modules
import * as Utils from "./utils";
import * as SCommands from "./SCommand";
//import * as editorFunctions from "./editorFunctions.js";

// ---- start app!

const args = minimist.default(process.argv.slice(2), { string: [ 'n','e','i','_','f'] }); //  get args by its respective options

try {
    const args = minimist.default(process.argv.slice(2), { string: [ 'n','e','i','_','f'] }); //  get args by its respective options

    let commandsList : SCommands.scmdStack;
    commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.i, 'i') as SCommands.scmdStack;

    let fileName= args._[0] as string;
    let fileAddress = Utils.getFileAddress(fileName);
    console.log('hola');

    let script : {exist:Boolean, script:string} = Utils.isScript(args.f,'f');

    if (!Utils.checkFile(fileAddress)) throw new Error("Oh no! File does not exist"); {
        ( (script.exist) ? 
        /* Utils.runScript( script.script, commandsList.lista,fileAddress) */ 1 : 2 /* editorFunctions.runEditor(commandsList.lista,fileAddress) */ );
        //editorFunctions.runEditor(commandsList.lista,fileAddress);
    }

} catch(err) {
    console.log((<Error>err).message);
}