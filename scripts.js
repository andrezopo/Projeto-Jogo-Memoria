let imagens = ["Imagens/explodyparrot.gif", "Imagens/fiestaparrot.gif", "Imagens/metalparrot.gif", "Imagens/revertitparrot.gif", "Imagens/tripletsparrot.gif", "Imagens/unicornparrot.gif", "Imagens/bobrossparrot.gif"];
let cartas = [];
let numeroCartas = prompt(`Com quantas cartas gostaria de jogar?`);
let contadorJogadas = 0;

while (4 > numeroCartas || numeroCartas > 14 || numeroCartas%2 !== 0){

    numeroCartas = prompt(`Com quantas cartas gostaria de jogar?`);

}
function comparador(){
    return Math.random() - 0.5;
}

function definirImagens(){
    imagens = imagens.sort(comparador);
    for (i = 0; i < numeroCartas/2; i++){
        cartas.push(imagens[i]);
        cartas.push(imagens[i]);
    }
    cartas.sort(comparador)

}
definirImagens();

function quantidadeCartas(){
    let elemento = document.querySelector(".conteudo");
    for (i = 0; i < numeroCartas; i++){
        elemento.innerHTML += `
            <div class="carta" onclick="virarCarta(this)">  
                <img src="${cartas[i]}">        
            </div>
        `}
    
}
quantidadeCartas()

function virarCarta(elemento){
    elemento.classList.add("virada")
    contadorJogadas ++;
}
