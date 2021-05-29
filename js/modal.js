

//import {enableScroll, disableScroll} from './blockScrolled.js';
import blockScrolled from './blockScrolled.js';
const {disableScroll, enableScroll} = blockScrolled;

export default function modal() {

    const designBlockElem = document.querySelector('.design-block');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
        disableScroll();
    };
    
    const closeModal = () => {
        modalElem.classList.add('hidden');
        enableScroll();
    };
    
    
    
    
    
    
    designBlockElem.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.more')) {
            openModal();
        }
    });

    //moreElems.forEach(moreElem => {
    //    moreElem.addEventListener('click', openModal);
    //})

    modalElem.addEventListener('click', (event) => {
        //console.log(event.target)
        const target = event.target;

        if (target.matches('.overlay, .modal__close')) {
            closeModal()
        }
        //if (target.classList.contains('modal__title')) {
        //    target.style.color = 'red'
        //}
    })
}
