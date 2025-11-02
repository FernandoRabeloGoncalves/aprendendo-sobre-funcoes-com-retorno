// Criando o objeto invoice.
let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["Mouse 2XWM", 29.90],
        1: ["Teclado Mecânico", 129.99],
        2: ["Monitor", 899.99],
    }
}

// Chamando a função passando o objeto inteiro.
generateInvoice(invoice)

// Função que recebe o objeto e imprime os dados.
function generateInvoice(invoice){
    console.log(`O COMPRADOR É: ${invoice.name}`)
    console.log(`A IDADE É: ${invoice.age}`)
    console.log("-----------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }
}
