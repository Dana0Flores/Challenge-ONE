const entradaTexto = document.querySelector(".entrada-texto");
const salida = document.querySelector(".salida-texto");

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function sololetras(e){
    let key = e.keyCode || e.which;
        let teclado = String.fromCharCode(key).toLowerCase();
    let letras = ",.abcdefghijklmnñopqrstuvwxyz0123456789";
    let especiales=[8,13,32,37,38,46,164]; 
    let teclado_especial = false;
    for(let i in especiales){
       if (key==especiales[i]) {
         teclado_especial = true;
         break;
       }
    }
       if (letras.indexOf(teclado) == -1 && ! teclado_especial) {
         return false; 
       }
}

function btnEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value)
    salida.value = textoEncriptado
    salida.style.backgroundImage = "none"
    document.getElementById('copiarbtn').removeAttribute('disabled');
}

function encriptar(stringEncriptado){
    matrizCodigo
    stringEncriptado = stringEncriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(entradaTexto.value)
    salida.value = textoDesencriptado
    salida.style.backgroundImage = "none"
    document.getElementById('copiarbtn').removeAttribute('disabled');
}

function desencriptar(stringDesencriptado){
    matrizCodigo;
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
} 


function copiar(){
    let textoSalida = salida.value
    let botonCopiar = document.getElementById('copiarbtn')

    navigator.clipboard.writeText(textoSalida);
    botonCopiar.textContent = '¡Copiado!';
}

function btnBorrar(){
    entradaTexto.value = ''
    salida.value = ''
    document.querySelector('.btn-copiar').innerHTML = 'Copiar';
}
