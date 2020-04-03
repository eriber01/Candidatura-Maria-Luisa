
/* reload page */
document.querySelector('#home').addEventListener('click', function(eve){
    location.reload();
})

/* scroll cambio de posicion del nav */
window.onscroll = function(){
    if (document.documentElement.scrollTop > 310) {
        console.log('abajo 310')
        
        document.querySelector('#nav-top').classList.add('menu-top')
    }else if (document.documentElement.scrollTop < 310) {
        console.log('arriba 310')
        document.querySelector('#nav-top').classList.remove('menu-top')
    }
}


/* scroll nosotros */

document.querySelector('#nosotros').addEventListener('click', function(eve){
    console.log('funcoan noso');

    window.scrollTo({
        top: 1346,
        behavior: 'smooth'
    })
})


/* scroll contactos */
document.querySelector('#contactos').addEventListener('click', function(eve) {
    console.log('funciona');
    window.scrollTo({
        top: 99999999,
        behavior: 'smooth'
    })

})

