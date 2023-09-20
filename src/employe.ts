class Employe{
    private id: number;
    private nom: string;

    constructor(id: number, nom: string) {
        this.id = id;
        this.nom = nom;
    }

    travailAvec(): void {
        console.log("");
    }


    assignerAnimal(): void {
        console.log(`${this.nom} je t'assigne cet animal` )
    }

    retirerAnimal(): void {
        console.log('');
    }


}