const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const consertar = document.getElementById("consertar");
const imagem = document.getElementById("image");

ligar.addEventListener('click', imagemOn);
desligar.addEventListener('click', imagemOff);
consertar.addEventListener('click', imagemConserta);
imagem.addEventListener('mouseover', imagemOn);
imagem.addEventListener('mouseout', imagemOff);
imagem.addEventListener('dblclick', imagemBroken);

function isLampBroken () {
    return imagem.src.indexOf ( 'quebrada' ) > -1
}
function imagemOn  () {
    if(!isLampBroken() ){
        imagem.src = "./img/ligada.jpg";
    } 
    
}

function imagemOff () {
    if(!isLampBroken() ){
        imagem.src="./img/desligada.jpg" ;
    }
    
}

function imagemConserta(){
    if(isLampBroken() ){
        imagem.src = "./img/desligada.jpg"
    }
}

function imagemBroken() {
    imagem.src = "./img/quebrada.jpg"
}