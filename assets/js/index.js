$(document).ready(function () {
    //切换左侧导航栏+/-图标
    $(".nav-sidebar-head .nav li a").click(function () {
        $(this).children().toggleClass("glyphicon-plus glyphicon-minus");
    });

    var sidebarBodyLi = $(".nav-sidebar-body .nav li");
    sidebarBodyLi.click(function () {
        //切换左侧导航栏的选中栏
        sidebarBodyLi.removeClass("active");
        $(this).addClass("active");
    });

    // iframe高度自适应
    $("#iframe").on("load", function () {
        $(this).height($(window).height() - 55);
    });
});