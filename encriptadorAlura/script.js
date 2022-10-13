const encriptar = () => {
    let texto = document.getElementById('input-text').value.toLowerCase();
var textoCifrado = texto.replace(/e/img,"enter");
var textoCifrado = textoCifrado.replace(/o/img,"ober");
var textoCifrado = textoCifrado.replace(/i/img,"imes");
var textoCifrado = textoCifrado.replace(/a/img,"ai");
var textoCifrado = textoCifrado.replace(/u/img,"ufat");

document.getElementById('img-nino').style.display = 'none';
document.getElementById('texto').style.display = 'none';
document.getElementById('texto2').innerHTML = textoCifrado;
document.getElementById('copiar').style.display = "show";
document.getElementById('copiar').style.display = 'inherit';
}

const desencriptar = () => {
    let texto = document.getElementById('input-text').value.toLowerCase();
var textoCifrado = texto.replace(/enter/img,"e");
var textoCifrado = textoCifrado.replace(/ober/img,"o");
var textoCifrado = textoCifrado.replace(/imes/img,"i");
var textoCifrado = textoCifrado.replace(/ai/img,"a");
var textoCifrado = textoCifrado.replace(/ufat/img,"u");

document.getElementById('img-nino').style.display = 'none';
document.getElementById('texto').style.display = 'none';
document.getElementById('texto2').innerHTML = textoCifrado;
document.getElementById('copiar').style.display = "show";
document.getElementById('copiar').style.display = 'inherit';
}


const copiar = () =>{
    var contenido = document.querySelector('#texto2');
    contenido.select();
    document.execCommand('copy');
    alert('Se copió')
}
