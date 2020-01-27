;(function(){

    let varScroll = false

    console.log($(window).height());

    $(window).scroll(function(){
        const ScrollDirection = EvaluarScroll()

        if ( window.screen.availWidth > 400 && ScrollDirection && !varScroll) {
            
            console.log("abajo")
            varScroll = true
            MostrarNavigation()
        }
        if (!ScrollDirection && varScroll) {
            
            console.log("arriba")
            varScroll = false
            OcultarNavigation();
        }
    })

    function MostrarNavigation(){
        $("#description").addClass("menu-top")
        
        
    }

    function OcultarNavigation(){
        $("#description").removeClass("menu-top")  
       
    }

    function EvaluarScroll(){
        const $description = $("#description")
        const descriptionHeight = $description.height()

        return $(window).scrollTop() > $(window).height() - (descriptionHeight * 8.3)
    }

})()

















