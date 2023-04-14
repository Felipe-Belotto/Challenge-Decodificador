
let hide = (referencia) => {referencia.style.display="none";}

const botaoCriptografar = document.getElementById("botao-criptografar")
const botaoDescriptografar = document.getElementById("botao-descriptografar")
const botaoCopiar = document.getElementById("botao-copiar")

const inputTexto = document.getElementById ("input-texto")


const boxTextoResposta = document.querySelector(".box-textoResposta")
const textoResposta = document.getElementById("textoResposta")
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
    botaoCopiar.classList.remove("hide");
    codificaLetras()
}

function descriptografar(){
    hide(respostaSemTexto)
}

function codificaLetras () {
    let textoInput = inputTexto.value

    if (/[aeiou]/.test(textoInput)){
        textoInput = textoInput.replace(/a/g, "ai")
        textoInput = textoInput.replace(/e/g, "enter")
        textoInput = textoInput.replace(/i/g, "imes")
        textoInput = textoInput.replace(/o/g, "ober")
        textoInput = textoInput.replace(/u/g, "ufat")
    }

    textoResposta.innerText = textoInput
    boxTextoResposta.style.display="flex";
}

