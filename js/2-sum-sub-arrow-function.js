// 2. Feladat
//    Hozz létre két függvény kifejezést arrow functionnel! 
//    A függvények neve summation és subtraction. 
//    Mindegyik függvény két paramétert kap, ezek neve a és b. 
//    Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, 
//    úgy az alapértelemezett érték a 0 legyen.
//    A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével.

'use strict';

const firstNumber = 10;
const secondNumber = 20;

const summation = (a=0,b=0) => {
    console.log('summation: ' + a + ' + ' + b + ' = ' + (a + b));
    return a + b;
}

const subtraction = (a=0,b=0) => {
    console.log('subtraction: ' + a + ' + ' + b + ' = ' + (a - b));
    return a - b;
}


//const subtraction = (a=0,b=0) => a-b;

summation(firstNumber,secondNumber);
subtraction(firstNumber,secondNumber);
