function add(n1: number, n2: number, showResult: boolean, phrase: string){
   
   const result = n1 + n2
    if(showResult === true){
        console.log(phrase + result)
    } else{

        return result
    }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = "Result is: "

 add(number1,number2, printResult, resultPhrase)


//  const person: {
//      name: string;
//      age: number
//  } = {
    enum Rolee { ADMIN = "admin",READ_ONLY = 100, AUTHOR = 200}

    const person= {
     name: "Maxim",
     age : 30,
     hobbies: ["sports","cooking"],
     role: [2,"author"],
     rolee: Rolee.ADMIN
 }

 let favoriteActivities: string[]
 favoriteActivities = ["sports"]

 console.log(person.name)

 for (const hobby of person.hobbies){
     console.log(hobby.toUpperCase())
 }

if(person.rolee === Rolee.AUTHOR) {
    console.log("he is author")
}