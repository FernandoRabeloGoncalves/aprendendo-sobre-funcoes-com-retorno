class Personagem {

    constructor(knightSword, eliteKnight) {
        this.knightSword = knightSword
        this.eliteKnight = eliteKnight
    }

    escrever() {
        console.log(`Um Guerreiro ${this.eliteKnight} que utiliza Espada ${this.knightSword}`)
    }
}


let character = new Personagem("Giant Sword", "Elite Knight")

character.escrever()
