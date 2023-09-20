"use strict";
class Chien {
    constructor(race, nom) {
        this.race = race;
        this.nom = nom;
    }
    aboyer() {
        console.log(`${this.nom} aboie : "Ouaf ! Ouaf !"`);
    }
}
