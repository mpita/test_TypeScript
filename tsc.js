var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log(":::: Ejemplo de decorators ::::");
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hey, ' + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, properatyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("soy el mensaje");
console.log(gree.greet());
var _this = this;
console.log(":::: Ejemplo de basico index ::::");
console.log("Hola mundo");
var full_name = "Manuel Pita";
var age = 33;
var developer = true;
var skills = ['Javascript', 'TypeScript', 'Angular', 'Python', 'Django'];
var numberArray = [206, 647, 103, 373];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
;
var role = Role.Manager;
console.log("roles", role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Texto dentro del getHello'));
inConsole(full_name);
inConsole("esto es un simple string");
var data = ['AngularJS', 'Python', 'Django'];
data.forEach(function (frameWorsLibs) {
    _this.inConsole(frameWorsLibs);
});
console.log(":::: Ejemplo de interfaces ::::");
var personaUno = {
    first_name: 'Manuel',
    last_name: 'Pita',
    twitter_account: '@manuel_pita'
};
var personaDos = {
    first_name: 'Antonio',
    last_name: 'Abreu'
};
console.log(personaUno);
console.log(personaDos);
console.log(":::: Ejemplo de objetos ::::");
var MyPerson = (function () {
    function MyPerson(frist_name, last_name) {
        console.log("frist_name", frist_name);
        console.log("last_name", last_name);
        this.first_name = frist_name;
        this.last_name = last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '(o.o(o,o)o.o)';
        return "Saludos:\n        " + this.first_name + " " + this.last_name + ",\n        te enviamos un emojis de la consola\n        " + emojis;
    };
    return MyPerson;
}());
var personaTres = new MyPerson('Manuel', 'Pita');
console.log(personaTres.getSaludo());
console.log(":::: Ejemplo de shapes ::::");
var Person3 = (function () {
    function Person3() {
        this.first_name = "Manuel";
        this.last_name = "Pita";
        this.tweter_user = "@manuel_pita";
    }
    Person3.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person3;
}());
var myPerson = new Person3();
myPerson.setLastName("Abreu");
myPerson.first_name = "Antonio";
console.log(myPerson);
//# sourceMappingURL=tsc.js.map