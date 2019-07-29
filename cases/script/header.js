$(document).ready(function () {
    resizing();
});

$(window).resize(function () {
    resizing();
});

function resizing() {
    if ($(window).width() < 992) {
        $("#container").removeClass("container");
        $("#container").addClass("container-fluid");

        $("#logo").css("width", "75px");
        $("#logo").css("height", "36px");

        $(".navbar-brand").addClass("ml-2");

        $(".navbar-nav").removeClass("ml-4");
        $(".navbar-nav").addClass("ml-3 mt-4");

        $(".navbar-toggler").addClass("mr-2");
    } else {
        $("#container").removeClass("container-fluid");
        $("#container").addClass("container");

        $("#logo").css("width", "85px");
        $("#logo").css("height", "46px");

        $(".navbar-brand").removeClass("ml-2");

        $(".navbar-nav").removeClass("ml-3 mt-4");
        $(".navbar-nav").addClass("ml-4");

        $(".navbar-toggler").removeClass("mr-2");

        $('.hover').hover(
            function () {
                $('.navbar, header').addClass('bg-white');
                $('.navbar a').css("color", "#000");
                $('.expand').css("display", "block");
                $('.expand').css("height", "500px");
                $('.sub-menu ul').css("opacity", "1");
            },
            function () {
                $('.navbar, header').removeClass('bg-white');
                $('.navbar a').css("color", "#fff");
                $('.expand').css("height", "0px");
                $('.expand').css("display", "none");
                $('.sub-menu ul').css("opacity", "0");
            }
        );
    }
}

let lastScroll = 0;

$(document).scroll(function () {
    let currentScroll = $(this).scrollTop();
    let header = $('header');

    let headerPos = header.offset().top + header.outerHeight();
    let firstBlockPos = $('.cases-section').offset().top + $('.cases-section').outerHeight();
    if ((headerPos > 140) && ($(window).width() >= 992)) {
        header.addClass('grad-bg');
    } else {
        header.removeClass('grad-bg');
    }

    if (currentScroll > lastScroll) {
        header.addClass('hidden');
    } else {
        header.removeClass('hidden');
    }

    lastScroll = currentScroll;

});