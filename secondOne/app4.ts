let userInput: unknown
let userName: string

userInput = 5
userInput = "Max"
if(typeof userInput === "string"){
    userName = userInput

}

function generateError(message: string, code: number): never{
     throw {message: message, errorCode: code}
}

generateError("An error occured", 500)


//TERMINAL COMANDS 

// tsc app.ts -w => auto refreshuje tenhle daný soubor
// tsc --init => začne compilovat celou složku
// tsc -w => po innit následně začne refreshovat všechny soubory v teto složce