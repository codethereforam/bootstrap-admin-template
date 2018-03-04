// iframe高度自适应
function changeFrameHeight(iframe) {
    iframe.height = document.documentElement.clientHeight - 60;
}

function changeIframe(src) {
    $("#iframe").attr("src", src);
}

$(document).ready(function(){
    $(".nav-sidebar-head .nav li a").click(function () {
        $(this).children("span").toggleClass("glyphicon-plus glyphicon-minus");
    });

    $(".nav-sidebar-body .nav li").click(function () {
        $(".nav-sidebar-body .nav li").removeClass("active");
        $(this).addClass("active");
    });
});