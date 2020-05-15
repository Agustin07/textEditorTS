// ---- external modules
import * as minimist from "minimist"

// ----  internal modules
import * as Utils from "./utils";
import * as SCommands from "./SCommand";
import * as editorFunctions from "./editorFunctions.js";

// ---- start app!

try {
    const args : minimist.ParsedArgs = minimist.default(process.argv.slice(2), { string: [ 'n','e','i','_','f'] }); //  get args by its respective options

    let commandsList : SCommands.scmdStack;
    commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.i, 'i') as SCommands.scmdStack;

    let fileName= args._[0] as string;
    let fileAddress : string = Utils.getFileAddress(fileName);

    let scriptFile : { exist : Boolean, script : string } = Utils.isScript(args.f,'f');

    if (!Utils.checkFile(fileAddress)) throw new Error("Oh no! File does not exist"); {
        ( (scriptFile.exist) ?                                                                 // -f script.sed called?
         editorFunctions.runScript( scriptFile.script, commandsList.scmdlist, fileAddress) :   // ->  true
         editorFunctions.runEditor( commandsList.scmdlist , fileAddress ) );               // ->  false
    }
} catch(err) {
    console.log((<Error>err).message);
}