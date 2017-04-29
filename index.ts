console.log(":::: Ejemplo de basico index ::::");
console.log("Hola mundo");

//primitivas
var full_name:string = "Manuel Pita";
var age:number = 33;
var developer:boolean = true;

//arrays
var skills:Array<string> = ['Javascript', 'TypeScript', 'Angular', 'Python', 'Django'];
var numberArray:number[] = [206, 647,103, 373];

enum Role { Employee, Manager, Admin, Developer };
var role:Role = Role.Manager;

console.log("roles", role);

function setName(name:string):void {
    this.full_name = name;
}

function getHello(pretext:string):string {
    return pretext + " " + full_name;
}

function inConsole(nameFunction:any):void {
    console.log(nameFunction);
}

inConsole(getHello('Texto dentro del getHello'));

inConsole(full_name);

inConsole("esto es un simple string");

var data:string[] = ['AngularJS', 'Python', 'Django'];

data.forEach(
    (frameWorsLibs) => {
        this.inConsole(frameWorsLibs);
    }
)