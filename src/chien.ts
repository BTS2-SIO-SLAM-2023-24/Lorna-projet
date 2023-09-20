class Chien {
    private race: string;
    private nom: string;

    constructor(race: string, nom: string) {
        this.race = race;
        this.nom = nom;
    }

    aboyer(): void {
        console.log(`${this.nom} aboie : "Ouaf ! Ouaf !"`);
    }
}


