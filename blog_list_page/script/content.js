$(document).ready(function () {
    uncontainer();
});

$(window).resize(function () {
    uncontainer();
});

function uncontainer() {
    if ($(window).width() < 992) {
        $("#container-blog-nav").removeClass("container");
        $("#container-blog-nav").addClass("container-fluid");
    } else {
        $("#container-blog-nav").removeClass("container-fluid");
        $("#container-blog-nav").addClass("container");
    }
}