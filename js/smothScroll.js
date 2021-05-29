//const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');


//const SPEED = 0.5;

function smothScroll(SPEED = 0.5) {

    const scrolled = e => {
        
        const target = e.target;
        //console.log('target: ', target);

        if (target.matches('[href^="#"]')) {
            //console.log(target);
            e.preventDefault();
            let start = 0;
            const pageY = window.pageYOffset;
            //const hash = target.href.replace(/[^#]*(.*)/, '$1' );
            const hash = target.getAttribute('href');

            if (hash === '#') return



            const elem = document.querySelector(hash)

            const coordinateElem = elem.getBoundingClientRect().top;
            //console.log(coordinateElem);

            const step = time => {
                if (!start) start = time;
                
                const progress = time - start;

                const r = (coordinateElem < 0 ? 
                    Math.max(pageY - progress / SPEED, pageY + coordinateElem) : 
                    Math.min(pageY + progress / SPEED, pageY + coordinateElem));
                
                window.scrollTo(0, r)

                
                
                if (r < pageY + coordinateElem) requestAnimationFrame(step);
                
            }

            requestAnimationFrame(step)
            //console.log(hash);
        }

    }

    document.body.addEventListener("click", scrolled);
}

export default smothScroll;

//smothScrollElems.forEach(link => {
//    link.addEventListener('click', (event) => {

//        //console.log(event)
//        //убираем прокрутку по умаолчанию от браузера
//        event.preventDefault()
//        //const id = link.href
//        //console.log('id: ', id);
//        //const blockScroll = document.getElementById();

//        const id = link.getAttribute('href').substring(1)
//        //console.log('id: ', id);
//        document.getElementById(id).scrollIntoView({
//            behavior: 'smooth'
//        });
//    })
//})

