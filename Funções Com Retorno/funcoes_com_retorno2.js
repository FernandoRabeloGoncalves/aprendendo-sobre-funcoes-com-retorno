let userName = getFirstName ("Fernando Rabelo", " ")
console.log (" Seja bem vindo " + userName)

userName = getFirstName ("Lucas-Gabriel", "-")
console.log (" Seja bem vindo " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName

}