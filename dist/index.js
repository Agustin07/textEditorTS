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
//import * as editorFunctions from "./editorFunctions.js";
// ---- start app!
var args = minimist.default(process.argv.slice(2), { string: ['n', 'e', 'i', '_', 'f'] }); //  get args by its respective options
try {
    var args_1 = minimist.default(process.argv.slice(2), { string: ['n', 'e', 'i', '_', 'f'] }); //  get args by its respective options
    var commandsList = void 0;
    commandsList = SCommands.readCommand().isACommand(args_1.n, 'n').isACommand(args_1.e, 'e').isACommand(args_1.i, 'i');
    var fileName = args_1._[0];
    var fileAddress = Utils.getFileAddress(fileName);
    console.log('hola');
    var script = Utils.isScript(args_1.f, 'f');
    if (!Utils.checkFile(fileAddress))
        throw new Error("Oh no! File does not exist");
    {
        ((script.exist) ?
            /* Utils.runScript( script.script, commandsList.lista,fileAddress) */ 1 : 2 /* editorFunctions.runEditor(commandsList.lista,fileAddress) */);
        //editorFunctions.runEditor(commandsList.lista,fileAddress);
    }
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=index.js.map