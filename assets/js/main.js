
    const botaoCriptografar = document.getElementById("botao-criptografar");
    const botaoDescriptografar = document.getElementById("botao-descriptografar");
    const botaoCopiar = document.getElementById("botao-copiar");
  
    const inputTexto = document.getElementById("input-texto");
    const textoResposta = document.getElementById("textoResposta");
    const respostaSemTexto = document.getElementById("respostaSemTexto");
    const areaTextoResposta = document.getElementById("box-textoResposta")
  
    const algoritmo = [
      /* Vogais */
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
      /* Consoantes */
      ["b", "xla"],
      ["c", "xlb"],
      ["d", "xlc"],
      ["f", "xld"],
      ["g", "xle"],
      ["h", "xlf"],
      ["j", "xlg"],
      ["k", "xlh"],
      ["l", "xli"],
      ["m", "xlj"],
      ["p", "xlk"],
      ["q", "xll"],
      ["r", "xlm"],
      ["s", "xln"],
      ["t", "xlo"],
      ["v", "xlp"],
      ["w", "xlq"],
      ["x", "xlr"],
      ["y", "xls"],
      ["z", "xlt"],
      ["ã", "ao"],
      ["ç", "dilha"],
    ];
  
    const mostrarResultado = (texto) => {
      respostaSemTexto.style.display="none"
      botaoCopiar.style.display="block"
      areaTextoResposta.style.display="flex"
      textoResposta.value = texto;
    };
  
    const copiar = (valor) => {
      botaoCopiar.addEventListener("click", () => {navigator.clipboard.writeText(valor)});
      
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
      mostrarResultado(textoCriptografado);
      copiar(textoCriptografado)
    });
  
    botaoDescriptografar.addEventListener("click", () => {
      let textoDescriptografado = inputTexto.value.toLowerCase();
      for (let i = 0; i < algoritmo.length; i++) {
        textoDescriptografado = textoDescriptografado.replaceAll(algoritmo[i][1], algoritmo[i][0]);
      }
      mostrarResultado(textoDescriptografado);
      copiar(textoDescriptografado)
    });

   

  