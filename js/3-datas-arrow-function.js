// 3. Feladat
// Hozz létre egy függvény kifejezést arrow functionnel!
// A függvény neve personDataLog legyen.
// A függvény paraméterként egy objektumot vár, ami
// egy firstname, lastname, és age tulajdonságokkal rendelkezik.
// Amennyiben bármelyik tulajdonság hiányozna úgy rendre
// a következő alapértelemezett értékeket vegyék fel:
// - firstname: John - lastname: Doe - age: 33
// A függvény kiírja az adott illető adatait a konzolra az adott formátumban:
// My name is firstname, lastname. I'm age years old.
// A firstname, lastname és age helyére a paraméterként kapott
// objektum tulajdonságok értékét kell behelyettesíteni.

'use strict';


const personDataLog = ({ object = { firstname: 'John', lastname: 'Doe', age: 33 } } = {}) => {
    console.log('My name is ' + object.firstname + ' ' + object.lastname + ". I'm " + object.age + ' years old.');
}

const personalDatas = {
    firstname: 'Jack',
    age: 42
};

personDataLog(personalDatas);