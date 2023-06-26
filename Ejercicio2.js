function convertirTexto() {
    const textoInput = document.getElementById("textoInput").value;
    
    const textoConvertido = textoInput.toUpperCase().replace(/ /g, "_");
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = textoConvertido;
  }