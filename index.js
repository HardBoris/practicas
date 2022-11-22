/* Crie um algoritmo que transforme as notas do sistema
 numérico para sistema de notas em caracteres tipo A B C
    * de 90 para cima   - A
    * entre 80 e 89     - B
    * entre 70 e 79     - C
    * entre 60 e 69     - D
    * menor que 60      - F

 */

const alfa = (nota) => {
    if (nota >= 0 && nota < 60) {
        return "F"
    }
    if (nota >= 60 && nota < 70) {
        return "D"
    }
    if (nota >= 70 && nota < 80) {
        return "C"
    }
    if (nota >= 80 && nota < 90) {
        return "B"
    }
    if (nota >= 90 && nota <= 100) {
        return "A"
    }
    return "Nota Inválida"
}

// console.log(alfa(62))

/* Sistema de gastos familiar
Crie um projeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar uma mensagem se a familia está com saldo
positivo ou negativo, seguido do valor do saldo
*/

const family = {
    incomes: [2500,3200,250.43,350.45],
    expenses: [320.34,128.45,176.87,1450.80],
}

const totalParcial = (lista)=> {
    return lista.reduce((a,b) => a+b, 0)
}

const total = (objeto) => {
    let saldo = totalParcial(objeto.incomes) - totalParcial(objeto.expenses)
    if (saldo < 0) {
        return "Saldo Negativo " + saldo
    }
    if (saldo === 0) {
        return "Saldo = 0"
    }
    if (saldo > 0) {
        return "Saldo Positivo " + saldo
    }
}

// console.log(total(family))

/* 
Celsius ou farenheit

    Crie uma função que receba uma string em celsius
    ou frenheit e faça a transformação de uma unidade
    para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

const conversor = (degree) => {
    let unit = degree.slice(-1).toLowerCase()
    let value = Number(degree.toLowerCase().replace(unit, ""))
    if (unit !== "f" && unit !== "c") {
        return "Unidade " + unit + " inválida"
    }
    if (unit === "f") {
        return ((value - 32) * 5/9).toFixed(2) + "C"
    }
    if (unit === "c") {
        return (value * 9/5 + 32).toFixed(2) + "F"
    }
}


/* console.log(conversor("25f"))
console.log(conversor("32C"))
console.log(conversor("45Y")) */

/* 
Buscando e contando dados em um array

Baseado no Array de Livros por categorias abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros de cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor
      e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da Narco milionária",
                author: "T. Mark E"
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é casualidade",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade = Como enfrentar o rei do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen"
            }
        ]
    }
]

const categoriasCounter = booksByCategory.length
let autors = []
const libros = () => {
    let qty = 0
    for (let i = 0; i < booksByCategory.length; i++) {
        const element = booksByCategory[i];
        qty = element.books.length
        return qty += qty
    }
}

const autores = () => {
    let qty = 0
    for (let i = 0; i < booksByCategory.length; i++) {
        const element = booksByCategory[i];
        for (let j = 0; j < element.books.length; j++) {
            const ele = element.books[j];
            if (!autors.includes(ele.author)) {
                autors.push(ele.author)
            }
        }
        
    }
    return qty = autors.length
}

const librosPorAutor = (autor) => {
    let libros = []
    for (let i = 0; i < booksByCategory.length; i++) {
        const element = booksByCategory[i];
        for (let j = 0; j < element.books.length; j++) {
            const ele = element.books[j];
            if (autor === ele.author) {
                libros.push(ele.title)
            }
        }
    }
    return libros
}
console.log("categorias: " + categoriasCounter)
console.log("libros: " + libros())
console.log("autores: " + autores())
console.log(librosPorAutor("Stephen"))
console.log(librosPorAutor("Augusto Cury"))