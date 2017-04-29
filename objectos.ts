console.log(":::: Ejemplo de objetos ::::");
class MyPerson {
    first_name:string;
    last_name:string;
    constructor(frist_name?:string, last_name?:string){
        console.log("frist_name", frist_name);
        console.log("last_name", last_name);
        this.first_name = frist_name;
        this.last_name = last_name;
    }

    getSaludo():string {
        let emojis = '(o.o(o,o)o.o)';
        return `Saludos:
        ${this.first_name} ${this.last_name},
        te enviamos un emojis de la consola
        ` + emojis;
    }
}

let personaTres = new MyPerson('Manuel', 'Pita');
console.log(personaTres.getSaludo());