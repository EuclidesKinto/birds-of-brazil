// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach((item) => {
//     console.log(item.innerText)
// });


// const img = document.querySelector('img');
// console.log(img.getAttribute('src'));


// ::::::::::::::::::01 - Adicione a classe ativo a todos os itens do menu
// const itensMenu = document.querySelectorAll('.menu a');
//
// itensMenu.forEach((item) =>{
    // //     item.classList.add('ativo');
// });


// ::::::::::::::::::02 - Remover a classe ativo de todos os itens do menu e matenho apenas o primeiro
// itensMenu.forEach((item)=>{
//     item.classList.remove('ativo');
// });
// itensMenu[0].classList.add('ativo');


// ::::::::::::::::::03 - Verifiquei se as imagens possuem o atributo alt
// const imgs = document.querySelectorAll('img');
// imgs.forEach((img)=>{
//     const possuiAtributo = img.hasAttribute('alt');
//     console.log(img, possuiAtributo);
// })


// //:::::::::::::::::::04 - Modifiquei o link externo do menu
// const link = document.querySelector('a[href^="http"]');
// link.setAttribute('href', 'https://www.google.com.br');


//::::::::::::::::::::::05 - Verifiquei a distância da primeira img em relação ao topo da pag
// const img = document.querySelector('img');
// const imgTop = img.offsetTop;
// console.log('A distância da primeira imagem ao topo é: ' + imgTop + 'px');


// //::::::::::::::::::::::06 - Retornei a soma da largura de todas as img
// // function somaImagens(){
//     const imagens = document.querySelectorAll('img');
//     let soma = 0;
//     imagens.forEach((imagem)=>{
//         soma += imagem.offsetWidth;
//     })
//     console.log('A soma de todas as imagens: ' + soma);
// }
//
// window.onload = function (){
//     somaImagens();
// }
//
// const img = document.querySelectorAll('img');
//
// function callback(event) {
//     console.log(event.target);
// }
// img.addEventListener('click', callback);

//::::::::::::::::::::::::::Selecionei o primeiro h2 dentro de .passaros-descricao
// const passarosH2 = document.querySelector('.passaros-descricao h2');
// console.log(passarosH2);

//:::::::::::::::::::::::::::Selecionei o ultimo paragrafo
// const todosP = document.querySelectorAll('p');
// console.log(todosP[todosP.length - 1]);



function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () =>{
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length){
        const activeClass = 'ativo';
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

function initScroll(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
        /* Metodo alternativo de scroll
        const topo = section.offsetTop;
         window.scrollTo({
             top: topo,
             behavior: "smooth"
         })
         */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScroll();

function initSectionsScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const windoMetade = window.innerHeight * 0.55;
        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windoMetade) < 0;
                if (isSectionVisible){
                    section.classList.add('ativo');
                }
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initSectionsScroll();

























