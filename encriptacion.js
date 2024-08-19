let textArea = document.getElementById('text_AreaHTML');
let B_encriptar = document.getElementById('B_EncriptarHTML');
let mostrar_msj = document.getElementById('mostrar_msjHTML');
let foto_mono = document.querySelector('#fotoHTML');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function encriptarTexto() {
    asignarTextoElemento('#Ningun_msj', '');
    asignarTextoElemento('#Ingresa_textoHTML', '');
    if (foto_mono) {
        foto_mono.remove();
    }

    document.querySelector('#B_Copiarhtml').style.display = 'flex';

    let cadenaProce = textArea.value;
    let reemplazos = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    
    let cadenaAux = cadenaProce.replace(/[eioua]/g, function(match) {
        return reemplazos[match];
    });

    asignarTextoElemento('.Mensaje_Cifrado', cadenaAux);
}

function desencriptarTexto() {
    asignarTextoElemento('#Ningun_msj', '');
    asignarTextoElemento('#Ingresa_textoHTML', '');
    if (foto_mono) {
        foto_mono.remove();
    }

    let cadenaProce = textArea.value;
    let cadenaAux = cadenaProce;
    let reemplazos = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };

    for (let [patron, reemplazo] of Object.entries(reemplazos)) {
        let regex = new RegExp(patron, 'g');
        cadenaAux = cadenaAux.replace(regex, reemplazo);
    }

    asignarTextoElemento('.Mensaje_Cifrado', cadenaAux);
}

function copiarTexto() {
    let parrafo = document.querySelector('#mostrar_msjHTML').textContent;
    navigator.clipboard.writeText(parrafo);
}
