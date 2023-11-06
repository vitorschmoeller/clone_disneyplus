document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight //Pegando a altura de um elemento(section)

    window.addEventListener('scroll',function(){ //Quando houver rolagem essa função sera ativada
        const posicaoAtual = window.scrollY; //função que recebe o scroll de onde você esta

        /*if (posicaoAtual > alturaHero) {  dessa forma perdemos performace 
            exibeElementosDoHeader();

        } else {
            ocultaElementosDoHeader();
        }*/

        if (posicaoAtual < alturaHero){ //Quando a posição atual que recebe o scroll da pagina for menor que o hero o elemento sera ocultado
            ocultaElementosDoHeader();
        } else { //Quando passar pelo hero
            exibeElementosDoHeader();
        }
    })
        //Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++ ){
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
    //Seção FAQ, accordion
    for (let i = 0;i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);

    }
})

function exibeElementosDoHeader() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden')
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}