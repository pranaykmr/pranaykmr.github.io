$(document).ready(function () {
    // $(document).click(function (event) {
    //     var clickover = $(event.target);
    //     var _opened = $(".navbar-collapse").hasClass("show");
    //     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
    //         $("button.navbar-toggler").click();
    //     }
    // });
    $('body').bind('copy paste cut drag drop', function (e) {
        e.preventDefault();
    });
});