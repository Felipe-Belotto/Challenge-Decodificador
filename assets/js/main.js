
let hide = (referencia) => {referencia.style.display="none";}

const botaoCriptografar = document.getElementById("botao-criptografar")
const botaoDescriptografar = document.getElementById("botao-descriptografar")

const inputTexto = document.getElementById ("input-texto")
const resposta = document.getElementById("resposta")
const respostaSemTexto = document.getElementById("respostaSemTexto")

botaoCriptografar.addEventListener("click", criptografar)
botaoDescriptografar.addEventListener("click", descriptografar)

inputTexto.addEventListener("click", () => {
    if(inputTexto.value == "Digite seu texto"){
    inputTexto.value ="";
    }
})

function criptografar (){
    hide(respostaSemTexto)
}

function descriptografar(){
    hide(respostaSemTexto)
}

