console.log(":::: Ejemplo de shapes ::::");

class Person3 {
    first_name:string;
    last_name:string;
    tweter_user:string;

    constructor(){
        this.first_name = "Manuel";
        this.last_name = "Pita";
        this.tweter_user = "@manuel_pita";
    }

    setLastName(last_name:string){
        this.last_name = last_name;
    }
}

var myPerson = new Person3();
myPerson.setLastName("Abreu");
myPerson.first_name = "Antonio";
console.log(myPerson);