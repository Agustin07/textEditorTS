// Interface for a substitution command
export interface sCommand{
    s : true;
    expreg : RegExp;
    flag : string | undefined;
    substitution : string;
    option : string;
    fileToWrite ?: string;
    writeContent ?: string;
}

// List of substitution commands 
export interface scmdStack{
    scmdlist : sCommand[];
    isACommand( input : string | [] | undefined, selectedOption : string) : scmdStack;
}

export function readCommand(): scmdStack{
    let commandsList : sCommand[]=[]; 
    return { 
        scmdlist : commandsList,
        isACommand(input, selectedOption) : scmdStack {
            if ( typeof(input) === 'string' || input instanceof String ) { 
                commandsList.push( formater( input as string , selectedOption ) );
                return this;
            } else if ( input instanceof Array ) {
                for ( let element of input ) {
                commandsList.push( formater( element, selectedOption ) );
                }
                return this;
            }
            else {
                return this;
            }
         }
    }
 }


// function formater : Cast a substitution command w the sCommand interface!
export const formater = (input: string, selectedOption: string): sCommand => {
    //let newCommand : SCommand;
    let cmdPart : string[] = input.split('/');
    if (cmdPart[0] !== 's') throw new Error('Oh no! Incorrect substitution command!'); {
        let sExist = true;
        if (cmdPart.length !== 4) throw new Error('Oh no! Incorrect substitution command!'); {
            switch(cmdPart[3]){
                case 'g' :
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1],'g'),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }

                case 'I' :
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1],'i'),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }

                case 'p':
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1]),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }
                case '':
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1]),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }
                default :
                    if ( !(cmdPart[3].match('^w.*$')) ) throw new Error("Oh no! Flag is not valid"); {
                        let wFlag : string[] = cmdPart[3].split(' ');
                        return { 
                            s : sExist,
                            expreg : new RegExp(cmdPart[1]),
                            flag : wFlag[0],
                            substitution : cmdPart[2],
                            option : selectedOption,
                            fileToWrite : wFlag[1],
                            writeContent : ''
                        }
                    }
            } // end of swith( flags )
        }  // end if ( validate of format on substitution command )
    } // end if ( validate of 's' on substitution command )
}