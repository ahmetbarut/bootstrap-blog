$(document).ready(function () {
    $(".nav-link").hover(function () {
        $(this).addClass('active');
        }, function () {
        $(this).removeClass('active');
        }
    );

    $(".card-body a").hover(
        function () {
            $(this).addClass('text-primary');            
            $(this).removeClass('text-dark');            
        }, function () {
            $(this).addClass('text-dark');            
            $(this).removeClass('text-primary');   
        }
    );
});