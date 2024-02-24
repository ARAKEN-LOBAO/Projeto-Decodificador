let textarea = document.getElementById("texto");
let criptografar = document.getElementById("criptografar");
let descriptografar = document.getElementById("descriptografar");
let resultado = document.getElementById("resultadoP");
let semMensagem = document.querySelector(".semMensagem");
let criptoMensagem = document.querySelector(".criptoMensagem");
let aviso = document.querySelector(".aviso");
let buttonCopiar = document.getElementById("buttonCopiar");
let svg = document.getElementById('meuSvg');
let path = svg.querySelector('path');

criptografar.addEventListener("click", function() {
    
    let mensagem = textarea.value;

    
    if (!/^[a-z\s]*$/.test(textarea.value)) {
        
        aviso.classList.add("error");
        path.setAttribute('fill', 'red');
        resultado.textContent ='';
        buttonCopiar.classList.add("notvisible");
      } else {
        
        aviso.classList.remove("error");
        path.setAttribute('fill', '#495057');
        buttonCopiar.classList.remove("notvisible");

        
        let mensagemCriptografada = mensagem.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        
        resultado.textContent = mensagemCriptografada;

        
        textarea.value ='';
        imagemDisplay();
      }
    });

descriptografar.addEventListener("click", function() {
    
    let mensagem = textarea.value;

   
    let mensagemCriptografada = mensagem.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    
    resultado.textContent = mensagemCriptografada;

    
    textarea.value ='';
    imagemDisplay();
});

let imgnotmessage = document.getElementById("imgnotmessage");

function imagemDisplay() {
    if (resultado.textContent.trim().length > 0) {
        imgnotmessage.classList.add("notvisible");  
        semMensagem.classList.add("notvisible");
        criptoMensagem.classList.add("notvisible");
        buttonCopiar.classList.remove("notvisible");
    
    } else if (textarea.value.trim() === "" || textarea.includes(' ')) {
        imgnotmessage.classList.remove("notvisible");
        semMensagem.classList.remove("notvisible");
        criptoMensagem.classList.remove("notvisible");
        buttonCopiar.classList.add("notvisible");
    } 
}

function copiarTexto() {
    let copiarTexto = document.getElementById('resultadoP').innerText;
    
    
    navigator.clipboard.writeText(copiarTexto)

    alert('O texto foi copiado para a área de transferência!');
};


