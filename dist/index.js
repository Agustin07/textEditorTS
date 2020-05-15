"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ---- external modules
var minimist = __importStar(require("minimist"));
// ----  internal modules
var Utils = __importStar(require("./utils"));
var SCommands = __importStar(require("./SCommand"));
var editorFunctions = __importStar(require("./editorFunctions.js"));
// ---- start app!
try {
    var args = minimist.default(process.argv.slice(2), { string: ['n', 'e', 'i', '_', 'f'] }); //  get args by its respective options
    var commandsList = void 0;
    commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.i, 'i');
    var fileName = args._[0];
    var fileAddress = Utils.getFileAddress(fileName);
    var scriptFile = Utils.isScript(args.f, 'f');
    if (!Utils.checkFile(fileAddress))
        throw new Error("Oh no! File does not exist");
    {
        ((scriptFile.exist) ? // -f script.sed called?
            editorFunctions.runScript(scriptFile.script, commandsList.scmdlist, fileAddress) : // ->  true
            editorFunctions.runEditor(commandsList.scmdlist, fileAddress)); // ->  false
    }
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=index.js.map