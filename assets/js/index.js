// iframe高度自适应
function changeFrameHeight(iframe) {
    iframe.height = document.documentElement.clientHeight - 60;
}

function changeIframe(src) {
    $("#iframe").attr("src", src);
}