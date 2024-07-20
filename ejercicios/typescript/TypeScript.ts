
//Boolean
let muted: boolean = true;
muted = false

//Numeros
let numerador: number = 5
let denominador: number = 5
let resultado = numerador/denominador;

//String
let nombre: string = "Ruperto"
let saludo = 'Me llamo ${nombre}'

//Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']
people.push('Holi')

//Arrays de varios tipos
let peoplesAndNumbers: Array<string | number> = []
peoplesAndNumbers.push("Hola", 24)
peoplesAndNumbers.push(9000)

//Any
let comodin: any = 'Joker'
comodin = {type: 'WildCard'}

//Object
let someObject: object = {Type: 'WildCard'}

//Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}

let colorFavorito: Color = Color.Rojo

// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;         //opcional
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

//Function
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 4)
console.log(sum);

//Funcion que retorna una funcion
function createAdder(a: number): (number) => number {
  return function(b: number) {
    return a + b;
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

console.log(fourPlus6);

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
