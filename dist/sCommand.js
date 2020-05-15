"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formater = exports.readCommand = void 0;
function readCommand() {
    var commandsList = [];
    return {
        scmdlist: commandsList,
        isACommand: function (input, selectedOption) {
            if (typeof (input) === 'string' || input instanceof String) {
                commandsList.push(exports.formater(input, selectedOption));
                return this;
            }
            else if (input instanceof Array) {
                for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                    var element = input_1[_i];
                    commandsList.push(exports.formater(element, selectedOption));
                }
                return this;
            }
            else {
                return this;
            }
        }
    };
}
exports.readCommand = readCommand;
// function formater : Cast a substitution command w the sCommand interface!
exports.formater = function (input, selectedOption) {
    //let newCommand : SCommand;
    var cmdPart = input.split('/');
    if (cmdPart[0] !== 's')
        throw new Error('Oh no! Incorrect substitution command!');
    {
        var sExist = true;
        if (cmdPart.length !== 4)
            throw new Error('Oh no! Incorrect substitution command!');
        {
            switch (cmdPart[3]) {
                case 'g': // global substitution!
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1], 'g'),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                case 'I': // ignores case sensitive
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1], 'i'),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                case 'p': // print 
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1]),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                case '':
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1]),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                default:
                    if (!(cmdPart[3].match('^w.*$')))
                        throw new Error("Oh no! Flag is not valid");
                    { // write a file!
                        var wFlag = cmdPart[3].split(' ');
                        return {
                            s: sExist,
                            expreg: new RegExp(cmdPart[1]),
                            flag: wFlag[0],
                            substitution: cmdPart[2],
                            option: selectedOption,
                            fileToWrite: wFlag[1],
                            writeContent: ''
                        };
                    }
            } // end of swith( flags )
        } // end if ( validate of format on substitution command )
    } // end if ( validate of 's' on substitution command )
};
//# sourceMappingURL=SCommand.js.map