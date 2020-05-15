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
exports.isScript = exports.checkFile = exports.getFileAddress = void 0;
// ---- npm modules
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
// ----  internal modules
function getFileAddress(fileName, dirname) {
    if (dirname === void 0) { dirname = process.cwd(); }
    var fName = path.normalize(fileName);
    var fileAddress = path.join(dirname, fName);
    return fileAddress;
}
exports.getFileAddress = getFileAddress;
function checkFile(fileAddress) {
    if (!(fs.existsSync(fileAddress)))
        throw new Error("Oh no! The file does not exist!");
    {
        return true;
    }
}
exports.checkFile = checkFile;
function isScript(input, selectedOption) {
    if (!(typeof (input) === 'string' || input instanceof String))
        return { exist: false, script: '' };
    {
        var fileScript = getFileAddress(input);
        if (!(checkFile(fileScript)))
            throw new Error("Oh no! File doesn't exist!");
        {
            return { exist: true, script: fileScript };
        }
    }
}
exports.isScript = isScript;
//# sourceMappingURL=utils.js.map