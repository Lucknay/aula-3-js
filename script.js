// const numero= Number(prompt("Digite o primeiro número "))
// const numero2= Number(prompt("Digite o segundo número"))
// const numero3= Number(prompt("Digite o terceiro número"))


// if(numero > numero2 && numero >  numero3){
//     alert(`Olá, esse é o maior número ${numero}`)

// }
// else if(numero2> numero && numero2> numero3){
//     alert(`Olá, esse é o maior número ${numero2}`)}

// else if(numero3 > numero && numero3 > numero2){
//     alert (`Olá, esse é o maior número ${numero3}`)
// }
// else{
//     alert ("São todos iguais")
// }




// const sexo = prompt("Digite a letra do seu sexo [M | F | O]").toUpperCase()

// if(sexo === "M") {
//     alert ("Masculino")
// }
//  else if (sexo === "F"){
//     alert ("Feminino")
//  }
//  else if (sexo === "O"){
//     alert ("Outros")
//  }
//  else (
//     alert ("Opção inválida")
//  )

// const semana = Number(prompt("Digite  um número respectivo ao dia da semana [1, 2, 3, 4, 5, 6, 7"))

// switch(semana){Código de SWITCH CASE
//     case 1:
//     alert("Domingo")
//     break
//     case 2:
//     alert ("Segunda")
//     break
//     case 3:
//     alert("terça")
//     break
//     case 4:
//     alert("Quarta")
//     break
//     case 5:
//     alert("Quinta")
//     break
//     case 6:
//     alert("Sexta")
//      break
//      case 7:
//     alert("Sábado")
//     break
//     default:
//     alert("Opção inválida")
//     break

// }

// const vogal = prompt ("Digite uma letra")


// if(vogal.length === 1 (colocar obrigatoriamente somente um digito)){ 

// if (vogal.toLocaleLowerCase (colocar obrigatoriamente  as letras digitadas para menor).trim(cortar os espaços digitados) === "a" || vogal=== "e" || vogal=== "i" || vogal=== "o" ||vogal=== "u")  {
//     alert ("Essa letra é uma vogal")
// }
// else if (vogal.toLowerCase() .trim() != "a" || vogal != "e" || vogal != "i" || vogal != "o" ||vogal != "u" ){
//     alert ("Essa letra é uma consoante")
// }
// else{
//     alert ("Opção inválida")
// }
// }else{
//     alert ("Digite exatamente 1 ÚNICA letra")
// }


// if(vogal.includes.) o includes serve para pesquisar se o que quero estar incluso na variável, ler de tras pra frente.



// Código de repetição abaixo

// let contador = 0
// while(contador <10){
//     console.log("Olá, seja bem vindo")
//     contador = contador + 5
// } pra código de repetição sempre se usa LET, pode se usar contador ++ para somar contador +1 nas repetições.

// contador = contador - 1 // contador -= 1 // contador --
// contador = contador +1 // contador += 1 // contador ++


// let contador = 20
//  while (contador   < 131){
//     console.log(`Olá, seu contador está no ${contador}`)
//     contador ++
//  }

//  let contador = 130
//  while  (contador > -1){
//     console.log(`Olá, seu contador está no ${contador}`)
//     contador --
//  }
//  let contador = Number(prompt("Digite um número: "))


// while(contador >= 0){
//     console.log(contador)
//     contador--



// let numero = Number(prompt("Digite o primeiro número que você quer que apareça:"))
// let numero2= Number(prompt("Digite o número final que você quer que apareça"))


// while (numero <= numero2){
//     console.log("Seu número é par")
//     if(numero % 2 === 0){
//         console.log(`ò numero: ${numero}`)
//     }
//     numero++
// }

// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.map((numero) => {
//     console.log(numero * 2)
// })

// console.log(numeros) forma de lista de repetição melhor( ainda não aprendi)








while(true){
    const numero = Number(prompt("Digite um número"))

    if(numero === 0){
        alert("Acabou")
        break

    }else{
        console.log(`Você digitiou o número ${numero}`)
    }
    
}


















