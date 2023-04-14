
let hide = (referencia) => {referencia.style.display="none";}

const botaoCriptografar = document.getElementById("botao-criptografar")
const botaoDescriptografar = document.getElementById("botao-descriptografar")
const botaoCopiar = document.getElementById("botao-copiar")
let copiar = (valor) => {botaoCopiar.addEventListener("click", () => {navigator.clipboard.writeText(valor)})}

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
    botaoCopiar.classList.remove("hide");
    descodificaLetras()
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
    botaoCopiar.addEventListener("click", copiar(textoInput))
}

function descodificaLetras(){
    let textoInput = inputTexto.value
    
    if (/[aeiou]/.test(textoInput)){
        textoInput = textoInput.replace(/ai/g, "a");
        textoInput = textoInput.replace(/enter/g, "e");
        textoInput = textoInput.replace(/imes/g, "i");
        textoInput = textoInput.replace(/ober/g, "o");
        textoInput = textoInput.replace(/ufat/g, "u");
    }

    textoResposta.innerText = textoInput;
    boxTextoResposta.style.display="flex"; 
    botaoCopiar.addEventListener("click", copiar(textoInput)) 
}




