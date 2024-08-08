/* Let and Const
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. LET & CONST SONT BLOCK-SCOPED, VAR EST FUNCTION-SCOPED.
*/
/* if(true) {
    var test1 = "Test 1"
    let test2 = "Test 2"
    const test3 = "Test 3"
}
console.log(test1);
console.log(test2);
console.log(test3); */

/* function foo() {
    var number1 = 10
    let number2 = 20
    const number3 = 30
}
console.log(number1); 
console.log(number2);
console.log(number3); */

/* 
    2. ON NE PEUT PAS DECLARER DE CONST VIDE, CONTRAIREMENT A LET OU VAR.
*/
/* var animal
let lion
// const cat // Error
const cat = "Miaow"
console.log(animal); // undefined
console.log(lion); // undefined
console.log(cat); // undefined */

/*
   3. ON PEUT REDECLARER DES VARIABLES VAR SANS PROVOQUER D'ERREURS.
*/
var dog = "Olaf"
console.log(dog);
var dog = "Gantalf"
console.log(dog);

let cat = "Feline"
// let cat // Error
const car = "BMW"
// const car // Error


/* 
    4. Une variable var se fait hoisted et peut être utilisée avant sa déclaration, car elle est initialisée à undefined.
    Let & const sont hoisted mais pas initialisées.
    
    Hoisting JavaScript
    Les déclarations de fonctions et de variables sont hissées en JavaScript. Cela signifie qu'elles sont stockées dans la mémoire du VO(Variables Object) du contexte d'exécution actuel et rendues disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence.
*/

/* 
    5. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const peuvent se faire enregistrer globalement, mais sans être accessibles comme propriétés directes de window, elles sont inscrites dans l'environnement lexical de l'objet global (l'ensemble des déclarations accessibles par ce dernier).
*/

