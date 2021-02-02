"use strict"

var hora = 0
var min = 0
var seg = 0
var mseg = 0

var tempo = 17 //tempo em milisegundos, utilizei como parametro meu próprio cronômetro
var cron

//inicia o cronometro
function start() {

    cron = setInterval(() => {timer(); }, tempo)

}

//pausa o cronometro
function pause() {
    clearInterval(cron)
}

//zera o cronometro
function stop() {
    clearInterval(cron)
    hora = 0
    min = 0
    seg = 0
    mseg = 0
    document.getElementById('time').innerText = '00:00:00:00'
    
}

//contagem do tempo e exibição
function timer() {

    mseg++

    if(mseg == 59){
        mseg = 0
        seg++

        if (seg == 59) {
            seg = 0
            min ++

            if (min == 59) {
                min = 0
                hora ++
            }
        }

    }

    //varíavel de exibição HH:MM:SS:MS
    var exibir =`${hora < 10 ? '0' + hora : hora}:${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + seg : seg}:${mseg < 10 ? '0' + mseg : mseg}` 
    
    //Insere o valor tratado no elemento counter
    document.getElementById('time').innerText = exibir;

    //Retorna o valor tratado
    return exibir;


}

