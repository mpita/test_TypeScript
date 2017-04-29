console.log(":::: Ejemplo de interfaces ::::");

interface MyPerson2{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personaUno:MyPerson2 = {
    first_name: 'Manuel',
    last_name: 'Pita',
    twitter_account: '@manuel_pita'
}

let personaDos:MyPerson2 = {
    first_name: 'Antonio',
    last_name: 'Abreu'
}

console.log(personaUno);
console.log(personaDos);
