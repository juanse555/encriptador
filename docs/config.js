const mensaje = document.querySelector(".mensaje1");
const salida = document.querySelector(".mensaje2");

mensaje.focus();

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");


let encriptar = (texto) => {
    const letras = [ ["e", "enter"], ["i", "iman"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < letras.length; i++) {
        if(texto.includes(letras[i][0])) {
            texto = texto.replaceAll(letras[i][0], letras[i][1]);
        }
    }
    
    return texto;
}

let desencriptar = (texto) => {
    const letras = [["a", "ai"], ["e", "enter"], ["i", "iman"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < letras.length; i++) {
        if(texto.includes(letras[i][1])) {
            texto = texto.replaceAll(letras[i][1], letras[i][0]);
        }
    }
    
    return texto;
}

let convertir = () => {
    const textoEncriptado = encriptar(mensaje.value);
    salida.value = textoEncriptado;
    mensaje.value = "";
}
let transformar = () => {
    const textoEncriptado = desencriptar(mensaje.value);
    salida.value = textoEncriptado;
    mensaje.value = "";
}
let copiar = () => {
    salida.select()
    navigator.clipboard.writeText(salida.value);
    salida.value = "";
    alert("Mensaje copiado");
}


btn1.onclick = convertir;
btn2.onclick = transformar;
btn3.onclick = copiar;