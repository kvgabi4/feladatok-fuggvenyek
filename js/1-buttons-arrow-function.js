// 1. Feladat
// Hozz létre egy html fájlt benne 3 gombbal! 
// A gombok szövegei az alábbiak legyenek: Első, Második, Harmadik. 
// Mindegyik gombnak add meg a button class-t!
// Készíts egy JavaScript fájlt, és linkeld be a html oldaladba! 
// Írj egy függvény kifejezést arrow function segítségével. 
// A függvény neve handleClick legyen. 
// A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, 
// amely kattintásra kiírja a gomb szövegét a konzolra. 
// A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőt!

'use strict';

let elements = document.querySelectorAll('.button');

// const handleClick = (i) => (
//            elements[i].addEventListener('click', function () {
//             console.log(elements[i]['name']);
//         }))

// for (let i = 0; i < elements.length; i += 1) {
//     handleClick(i);
// }

const handleClick = () => {
    for (let i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', () => {
            console.log(elements[i]['name']);
        })
    }
}
handleClick();

