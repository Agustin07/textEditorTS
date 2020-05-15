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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEditor = exports.runScript = void 0;
// ---- npm modules
var fs = __importStar(require("fs"));
var readline = __importStar(require("readline"));
// ----  internal modules
var SCommands = __importStar(require("./SCommand"));
function runScript(fileScript, listofCommands, fileAddress) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var rl, fList, rl_1, rl_1_1, line, e_1_1, allCommands;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    rl = readline.createInterface(fs.createReadStream(fileScript));
                    fList = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    rl_1 = __asyncValues(rl);
                    _b.label = 2;
                case 2: return [4 /*yield*/, rl_1.next()];
                case 3:
                    if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 5];
                    line = rl_1_1.value;
                    fList.push(SCommands.formater(line, 'f'));
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(rl_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    allCommands = listofCommands.concat(fList);
                    runEditor(allCommands, fileAddress);
                    return [2 /*return*/];
            }
        });
    });
}
exports.runScript = runScript;
function runEditor(listofCommands, fileAddress) {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var rl, conditionN, conditionI, updateContent, rl_2, rl_2_1, line, matches, _i, matches_1, command, e_2_1, fileUpdate, _b, _c, writeaFile, fileUpdate;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    rl = readline.createInterface(fs.createReadStream(fileAddress));
                    conditionN = !!(listofCommands.filter(function (value) { return (value.option === 'n'); }).length);
                    conditionI = !!(listofCommands.filter(function (value) { return (value.option === 'i'); }).length);
                    updateContent = '';
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    rl_2 = __asyncValues(rl);
                    _d.label = 2;
                case 2: return [4 /*yield*/, rl_2.next()];
                case 3:
                    if (!(rl_2_1 = _d.sent(), !rl_2_1.done)) return [3 /*break*/, 5];
                    line = rl_2_1.value;
                    matches = listofCommands.filter(function (value) { return value.expreg.test(line); });
                    for (_i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                        command = matches_1[_i];
                        line = line.replace(command.expreg, command.substitution.substring(0));
                        switch (command.flag) {
                            case 'p':
                                ((conditionI) ? updateContent += line + '\n' : console.log(line)); // conditionI -> true: print on file / false: print on console 
                                break;
                            case 'w':
                                command.writeContent += line + '\n';
                                break;
                        } // end switch
                    } // end for command of matches
                    if (conditionI) {
                        updateContent += line + '\n';
                    }
                    else {
                        if (!conditionN) {
                            console.log(line);
                        }
                    }
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(rl_2_1 && !rl_2_1.done && (_a = rl_2.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(rl_2)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    if (conditionI) { // output on file
                        fileUpdate = fs.createWriteStream(fileAddress);
                        fileUpdate.write(updateContent);
                    }
                    for (_b = 0, _c = listofCommands.filter(function (value) { return (value.flag === 'w'); }); _b < _c.length; _b++) { // write if flag flag
                        writeaFile = _c[_b];
                        fileUpdate = fs.createWriteStream(writeaFile.fileToWrite + '.txt');
                        fileUpdate.write(writeaFile.writeContent);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.runEditor = runEditor;
//# sourceMappingURL=editorFunctions.js.map