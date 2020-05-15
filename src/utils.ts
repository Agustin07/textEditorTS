// ---- npm modules
import * as fs from "fs";
import * as path from "path";

// format a path!
export function getFileAddress(fileName: string, dirname: string = process.cwd()): string {
    let fName : string = path.normalize(fileName as string);
    let fileAddress = path.join(dirname as string,fName);
    return fileAddress;
}

// check if file is valid
export function checkFile(fileAddress: string): Boolean {
    if ( !(fs.existsSync(fileAddress)) )  throw new Error("Oh no! The file does not exist!"); { 
        return true;
    }
} 

// validates script
export function isScript( input: string | undefined | [], selectedOption : string ): { exist: Boolean, script : string } {
    if ( !(typeof(input) === 'string' || input instanceof String)  ) return { exist: false, script: '' }; {
        let fileScript : string = getFileAddress(input as string);
        if( !(checkFile( fileScript)) ) throw new Error("Oh no! File doesn't exist!"); {
            return { exist: true, script: fileScript }
         }
    }    
}