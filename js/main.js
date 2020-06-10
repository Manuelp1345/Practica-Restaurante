$(Document).ready(function(){
    //EFECTO MENU
    $('.menu a').each(function(index,elemento){
        $(this).css({
            opacity:0,
            top:'-200px'
        });

        $(this).animate({
            opacity:1,
            top:'0'
        },500+(index*500));
    });
    //FIN EFECTO

    //EFECTO HEADER 
    if ($(window).width()>800) {
        $('header .textos').css({
            opacity:0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity:1,
            marginTop: '-54px'
        },1500);
    }
    //FIN EFECTO

    //EFECTO SCROLL
    var acerca = $('#acerca').offset().top,
       menu = $('#platillos').offset().top,
       galeria = $('#galeria').offset().top,
       ubicacion = $('#ubicacion').offset().top;




    $('#btn-acerca').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: acerca - 180
        },500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: menu - 100
        },500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: galeria -100
        },500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: ubicacion
        },500);
    });
        //FIN EFECTO


 //EFECTO PARALLAX
    $(window).scroll(function () {
        var ventana = $(window).width();

        if(ventana>800){
            var scroll= $(window).scrollTop();

            $('header .textos').css({
                'transform':'translate(0px, '+ scroll/2 + '%)'
            });
            $('.acerca article').css({
                'transform':'translate(0px, -'+ scroll/4 + '%)'
            });


        }
    });

    $(window).resize(function() {
        var ventana = $(window).width();
        if (ventana<800) {
            $('.acerca article').css({
                'transform':'translate(0px, 0px)'
            });
        }
    })

});