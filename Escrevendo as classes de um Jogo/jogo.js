class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } 
    else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } 
    else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } 
    else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } 
    else {
      ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
const herois = [
  new Heroi("Elite Knight", 99, "guerreiro"),
  new Heroi("Master Sorcerer", 150, "mago"),
  new Heroi("Monk", 80, "monge"),
  new Heroi("Hattori Hanzō", 325, "ninja")
];
for (let heroi of herois) {
  heroi.atacar();
}