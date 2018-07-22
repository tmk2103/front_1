$(document).ready(function () {

    $(window).scroll(function () {
        var nav = $("#navbar");
        nav.toggleClass('navbar-blue', $(this).scrollTop() > nav.height());


    });

});