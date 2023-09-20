class Chat {
    private nom: string;
     private age: number;
  
    constructor(nom: string, age: number) {
      this.nom = nom;
      this.age = age;
    }
  
    miauler(): void {
      console.log(`${this.nom} miaule : "Miaou ! Miaou !"`);
    }
  }