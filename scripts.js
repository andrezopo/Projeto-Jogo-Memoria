let imagens = ["Imagens/explodyparrot.gif", "Imagens/fiestaparrot.gif", "Imagens/metalparrot.gif", "Imagens/revertitparrot.gif", "Imagens/tripletsparrot.gif", "Imagens/unicornparrot.gif", "Imagens/bobrossparrot.gif"];
let cartas = [];
let numeroCartas = prompt(`Com quantas cartas gostaria de jogar?`);
let contadorJogadas = 0;
let travarVirada = false;
let minuto = 0;
let segundo = 0;

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

function quantidadeCartas(){
    let elemento = document.querySelector(".conteudo");
    for (i = 0; i < numeroCartas; i++){
        elemento.innerHTML += `
            <div class="carta" onclick="virarCartas(this)">  
                <img class="carta${[i]}" src="${cartas[i]}">        
            </div>
        `}
    
}
function desvirarTodas(){
    let numeroViradas = document.querySelectorAll(".virada").length;
    for (i = 0; i < numeroViradas; i++){
        document.querySelector(`.carta${i}`).parentNode.classList.remove("virada");
    }
}

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
            setTimeout(desvirarCartas, 1300);
            
        }
    
    }
    setTimeout(verificarVitoria, 350)
    
       
}

function verificarVitoria(){
    if(document.querySelectorAll(".virada").length === cartas.length){
        clearInterval(idInterval);
        alert(`Você ganhou em ${contadorJogadas} jogadas no tempo de ${minuto} minutos e ${segundo} segundos!`)
        let resposta = prompt("Gostaria de jogar outra partida? Responda com 'sim' ou 'não'.")
        while (resposta !== "sim" && resposta !== "não"){
            resposta = prompt("Gostaria de jogar outra partida? Responda com 'sim' ou 'não'.")
        }
        if (resposta === "sim"){
            let elemento = document.querySelector(".conteudo");
            elemento.innerHTML = "";
            numeroCartas = 0;
            cartas.length = 0;
            contadorJogadas = 0;
            minuto = 0;
            segundo = 0;
            desvirarTodas();
            main();
            idInterval = setInterval(incrementarTempo, 1000);

        }
    }
}

function atualizarTimer(){
    let elemento = document.querySelector(".timer")
    if (segundo > 9 && minuto < 10){
        elemento.innerHTML = `0${minuto.toPrecision(1)}:${segundo.toPrecision(2)}`
    }
    if (segundo < 10 && minuto < 10){
        elemento.innerHTML = `0${minuto.toPrecision(1)}:0${segundo.toPrecision(1)}`
    }
    if (segundo < 10 && minuto > 9){
        elemento.innerHTML = `${minuto.toPrecision(2)}:0${segundo.toPrecision(1)}`
    }
    else{
        elemento.innerHTML = `${minuto.toFixed(0)}:${segundo.tofixed(0)}`
    }
}
function incrementarTempo(){
    segundo ++
    if (segundo === 60){
        minuto ++;
        segundo = 0;
    }

    atualizarTimer()
}

function main(){
    while (4 > numeroCartas || numeroCartas > 14 || numeroCartas%2 !== 0){

        numeroCartas = prompt(`Com quantas cartas gostaria de jogar?`);

    }




    definirImagens();


    quantidadeCartas()




    
}
main()
let idInterval = setInterval(incrementarTempo, 1000);