let imagens = ["Imagens/explodyparrot.gif", "Imagens/fiestaparrot.gif", "Imagens/metalparrot.gif", "Imagens/revertitparrot.gif", "Imagens/tripletsparrot.gif", "Imagens/unicornparrot.gif", "Imagens/bobrossparrot.gif"];
let cartas = [];
let numeroCartas = prompt(`Com quantas cartas gostaria de jogar?`);
let contadorJogadas = 0;
let travarVirada = false;

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
            <div class="carta" onclick="virarCartas(this)">  
                <img class="carta${[i]}" src="${cartas[i]}">        
            </div>
        `}
    
}
quantidadeCartas()

function virarCartas(elemento){
    
    function desvirarCartas(){
        document.querySelector(`.${posicao}`).parentNode.classList.remove("virada")
        elemento.classList.remove("virada")
        travarVirada = false;
    }

    
    if (travarVirada){
         return
        }

    if (elemento.classList.value.includes("virada")){

    }
    else{

        elemento.classList.add("virada")
        contadorJogadas ++;
        if(document.querySelectorAll(".virada").length%2 !==0){
            nomeImagem = elemento.querySelector("img").src
            posicao = elemento.querySelector("img").classList.value
        }
        else if (nomeImagem === elemento.querySelector("img").src){


        }else{
            travarVirada = true;
            setTimeout(desvirarCartas, 1000);
            
        }
    
    }
    setTimeout(verificarVitoria, 100)
    
       
}
function verificarVitoria(){
    if(document.querySelectorAll(".virada").length === cartas.length){
        alert(`Você ganhou em ${contadorJogadas} jogadas!`)
    }
}
