"use strict";
class Chat {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    miauler() {
        console.log(`${this.nom} miaule : "Miaou ! Miaou !"`);
    }
}
