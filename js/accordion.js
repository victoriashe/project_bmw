//document.addEventListener('DOMContentLoaded', () => {

export default () => {


    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');



//console.log(featureLinkElems);
//console.log(featureSubElems);

    const handlerAccordion  = (btn, index) => {

        btn.addEventListener('click', () => {
            
            featureSubElems.forEach((featureSubElem, i) => {
                if (index === i) {
                    featureSubElems[index].classList.toggle('hidden');
                } else {
                    featureSubElem.classList.add('hidden');
                }
            });
    
            featureLinkElems.forEach(featureLinkElem => {
                if (featureLinkElem === btn) {
                    btn.classList.toggle('feature__link_active');
                } else {
                    featureLinkElem.classList.remove('feature__link_active');
                }
            });
                
        });

    }

    featureLinkElems.forEach(handlerAccordion);



};

//const logo = document.querySelector('.header__logo')
//console.log('logo: ', logo);