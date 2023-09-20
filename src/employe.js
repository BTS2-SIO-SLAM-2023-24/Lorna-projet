"use strict";
class Employe {
    constructor(id, nom) {
        this.id = id;
        this.nom = nom;
    }
    travailAvec() {
        console.log("");
    }
    assignerAnimal() {
        console.log(`${this.nom} je t'assigne cet animal`);
    }
    retirerAnimal() {
        console.log('');
    }
}
