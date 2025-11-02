class formaDeBolo{

    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio

    }
   escrever (){
    console.log (`Um Delicioso Bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
   }
   assar(){
    console.log("bolo assando de " + this.saborDaMassa)
   }
}

let boloFesta = new formaDeBolo("Chocolate", "Nutella")
let boloCasamento = new formaDeBolo("Baunilha", "Coco")


boloFesta.saborDaMassa = "Floresta Negra"

boloFesta.escrever()
boloCasamento.escrever()
boloCasamento.assar()