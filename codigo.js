$(document).ready(inicializar);

function inicializar() {
    $('#eventoMouse').hide()
    $('#em').click(mouse);
    $('#animacion').hide();
    $('#a').click(animar);
    $('#content').hide();
}

function mouse() {
    $('#eventoMouse').show();
    $('#animacion').hide();
    $('#h').click(hover);
    $('#mo').click(move);
    $('#mo').click(ubicacion);
    $('#muo').click(info);
    $('#muo').click(presion);
    $('#dc').click(info2);
    $('#dc').click(dobleClick);
}
function hover() {
    $('#contenedor').html(
        '<div id="texto">' + 'Pasa sobre de mi' + '</div>'
    );
    $('#texto').hover(entra, sale);
    $('#cont').text('Este efecto se ejecuta cuando pasamos el mouse sobre del div');
}
function entra() {
    $('#texto').css('background-color', 'black');
    $('#texto').css('color', 'white');
}
function sale() {
    $('#texto').css('background-color', 'yellow');
    $('#texto').css('color', 'black');
}
function move() {
    $('#texto').hide();
    $('#contenedor').html(
        '<div id="x">' + '</div>' +
        '<div id="y">' + '</div>'
    );
}
function ubicacion() {
    var x = $(document);
    x.mousemove(function () {
        $('#x').text('Coordenada X: ' + event.clientX);
        $('#y').text('Coordenada Y: ' + event.clientY);
    }
    );
    $('#cont').text('Esta funcion lo que hace es, seguir la ruta del mouse dentro del documento' +
        'siguiento las coordenadas de X y Y');
}
function info() {
    $('#texto').hide();
    $('#contenedor').html('<div id="text">' + 'Manten click sostenido sobre de mi' + '</div>');
    $('#cont').html('Haga click sostenido sobre el div para ver el efecto' + '<br>' +
        'cuando hace precion y cuando lo suelta');
}
function presion() {
    $('#text').mouseup(function () {
        $(this).css('background-color', 'blue');
    });
    $('#text').mousedown(function () {
        $(this).css('background-color', 'red');
    });
}
function info2() {
    $('#texto').hide();
    $('#contenedor').html(
        '<div id="text">' + 'Dame un doble click' + '</div>'
    );
    $('#cont').html('Esta funcion se ejecuta cuando hace doble click sobre el div');
}
function dobleClick() {
    $('#text').dblclick(function () {
        $(this).css('background-color', 'pink');
        $(this).css('color', 'black');
        $(this).css('border', '5px solid black');

    });
}

/*ANIMACION*/
function animar() {
    $('#eventoMouse').hide()
    $('#animacion').show();
    $('#s').click(muestra);
    $('#hi').click(ocultame);
    $('#fi').click(function(){
        $('#content').fadeIn();
        $('#conte').text(
            'Esta animacion hace aparecer de una forma com degrada el DIV'
        );
    });
    $('#fo').click(function(){
        $('#content').fadeOut();
        $('#conte').text(
            'Esta animacion hace desaparecer el DIV con el mismo efecto como de degadado'
        );
    });
    $('#t').click(function(){
        $('#content').toggle('slow');
        $('#conte').text(
            'Con esta animacion disponemos de las dos animaciones anteriores de aparecer y desaparecer'
        );
    });
    $('#st').click(function(){
        $('#content').slideToggle('slow');
        $('#conte').text(
            'Con esta animacion disponemos de las dos animaciones anteriores de aparecer y desaparecer de forma como de telon'
        );
    });
    $('#ft').click(function(){
        $('#content').fadeToggle('slow');
        $('#conte').text(
            'Las mimas animaciones del Fade pero con un solo boton'
        );
    });
    $('#p').click(personal);
}

function ocultame() {
    $('#content').hide('slow');
    $('#conte').html(
        'Esta animacion hace desaparecer el div antes aparecido'
        +'<br>'+
        'Dentro de sus parametros podemos especificar por milisegundos, el tiempo que debe tardar'
    );
}
function muestra() {
    $('#content').show('slow');
    $('#conte').text(
        'Esta animacion hace aparecer un div aparentemente oculto'
    );
}
function personal(){
    alert('Lo siento pero este no me funciono XD');
}
