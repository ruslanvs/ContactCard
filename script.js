

$( document ).ready( function () {
    $( "form" ).submit( function () {
        console.log ("adfads");
        $( "#rightPane" ).append( "\
        <div class='card'>\
        <div class='cardFront'>\
        <p>" + $( '#fname' ).val() + ' ' + $( '#lname' ).val() + "</p>\
        <a>Click for description!</a>\
        </div>\
        <div class='cardBack'\
        <p>" + $( '#descr' ).val() + "</p>\
        </div>\
        </div> \
        ");

        $( ".card").children ().click( function () {
            event.stopPropagation ();
            console.log ('card clicked!'); // not clear why click is registered as many times as there are cards which were appended
            $( this ).slideUp ();
            $( this ).siblings ().slideDown ();
        })
        document.getElementById ( "dataForm").reset ();
        return false;
    })

})