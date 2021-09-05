$(document).ready(function(){
    var alto_ventana=$(window).height();
    var ancho_ventana=$(window).width();
    var boton_acepto=$('#acepto');
    var boton_rechazo=$('#rechazo');

    boton_rechazo.mouseover(function(){
        var posicionY= parseInt(Math.random() * ((alto_ventana-80) - 1) + 1);
        var posicionX=parseInt(Math.random() * ((ancho_ventana-160) - 1) + 1);
       

        boton_rechazo.css('left', posicionX)
                     .css('top', posicionY);
    });

    boton_acepto.click(function(){
        alert('Sabía que dirías que si XD');
    });


});