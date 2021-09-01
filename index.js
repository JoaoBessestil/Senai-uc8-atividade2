// Informando a Data do Evento 

let DataEvento = "30/08/2021"
console.log(DataEvento)

// Informando a Data Atual

let DataAtual = "20/08/2021"
    console.log(DataAtual)
if (DataEvento > DataAtual) {
    console.log("Continue o Cadastro")
} else {
    console.log("Cadastro não Permitido")
}

// Conferindo a Idade do Participante

let AnodeNascimento = 2001
let AnoAtual = 2021

if (AnoAtual - AnodeNascimento >= 18) {
    console.log("Idade Permitida")
} else {
    console.log("Cadastro não Permitido, Você tem menos de 18 Anos")
}

// Conferindo se a Quantidade de Participantes é Menor de 100

let ListadeParticipantes = ["Andrey", "Beatriz", "Claudio", "Drauzio", "Ernesto", "Fátima", "Guilherme", "Humberto", "Igor", "João", "Karla", "Leonardo", "Manoel", "Nilton", "Olivia"]
    console.log(ListadeParticipantes)
if (ListadeParticipantes.length < 100) {
    console.log("Cadastro Permitido")
} else {
    console.log("Cadastro não Permitido, Lista já está completa")
}