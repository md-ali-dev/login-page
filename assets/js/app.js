$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fi-rr-eye-crossed" );
            $('#show_hide_password i').removeClass( "fi-rr-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fi-rr-eye-crossed" );
            $('#show_hide_password i').addClass( "fi-rr-eye" );
        }
    });
});