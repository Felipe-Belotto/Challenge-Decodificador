
    const botaoCriptografar = document.getElementById("botao-criptografar");
    const botaoDescriptografar = document.getElementById("botao-descriptografar");
    const botaoCopiar = document.getElementById("botao-copiar");
  
    const inputTexto = document.getElementById("input-texto");
    const textoResposta = document.getElementById("textoResposta");
    const respostaSemTexto = document.getElementById("respostaSemTexto");
    const areaTextoResposta = document.getElementById("box-textoResposta")
    const boxTextoResposta = document.querySelector(".box-resposta")
  
    const algoritmo = [ ["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]] ;
  
    const mostrarResultado = (texto) => {
      respostaSemTexto.style.display="none"
      botaoCopiar.style.display="block"
      areaTextoResposta.style.display="flex"
      boxTextoResposta.style.justifyContent="start"
      
      textoResposta.value = texto;
    };

    function retornaResultado(){
      respostaSemTexto.style.display="flex"
      botaoCopiar.style.display="none"
      areaTextoResposta.style.display="none"
      boxTextoResposta.style.justifyContent="center"
    }
  
    const copiar = (valor) => {
      botaoCopiar.addEventListener("click", () => {
        navigator.clipboard.writeText(valor)
        window.scroll(0,0);
        inputTexto.value = "Digite seu texto"
        retornaResultado()
      });
    };

    inputTexto.addEventListener("click", () => {
    if(inputTexto.value == "Digite seu texto"){
        inputTexto.value =""; 
    }
    else {inputTexto.value = inputTexto.value}
})
  
    botaoCriptografar.addEventListener("click", () => {
      let textoCriptografado = inputTexto.value.toLowerCase();
      for (let i = 0; i < algoritmo.length; i++) {
        textoCriptografado = textoCriptografado.replaceAll(algoritmo[i][0], algoritmo[i][1]);
      }
      window.scroll(0, document.documentElement.scrollHeight)
      mostrarResultado(textoCriptografado);
      copiar(textoCriptografado)
    });
  
    botaoDescriptografar.addEventListener("click", () => {
      let textoDescriptografado = inputTexto.value.toLowerCase();
      for (let i = 0; i < algoritmo.length; i++) {
        textoDescriptografado = textoDescriptografado.replaceAll(algoritmo[i][1], algoritmo[i][0]);
      }
      window.scroll(0, document.documentElement.scrollHeight)
      mostrarResultado(textoDescriptografado);
      copiar(textoDescriptografado)
    });

   

  