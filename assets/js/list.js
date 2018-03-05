$(document).ready(function () {
    //确认删除区域
    var deleteConfirmBlock = $("#deleteConfirm");
    //显示确认删除警告框
    $(".glyphicon-trash").click(function () {
        deleteConfirmBlock.removeClass("hidden");
    });

    //隐藏确认删除警告框
    deleteConfirmBlock.find("button").click(function () {
        deleteConfirmBlock.addClass("hidden");
    });

    //点击确认删除后的操作
    deleteConfirmBlock.find(".confirm").click(function () {
        // delete the selected item
    });

    var pageNumBtns = $(".pagination .number");

    //切换页码中的高亮页
    pageNumBtns.click(function () {
        pageNumBtns.removeClass("active");
        $(this).addClass("active");
    });

    //前一页的操作
    $(".pagination .previous").click(function () {
        var activePageObject = $(".pagination .active");
        var pageNum = parseInt(activePageObject.text());
        activePageObject.removeClass("active");
        if (pageNum === parseInt(pageNumBtns.first().text())) {
            pageNumBtns.last().addClass("active");
            return;
        }
        pageNumBtns.each(function () {
            if ($(this).text() === pageNum - 1 + "") {
                $(this).addClass("active");
                return false;
            }
        });
    });

    //后一页的操作
    $(".pagination .next").click(function () {
        var activePageObject = $(".pagination .active");
        var pageNum = parseInt(activePageObject.text());
        activePageObject.removeClass("active");
        if (pageNum === parseInt(pageNumBtns.last().text())) {
            pageNumBtns.first().addClass("active");
            return;
        }
        pageNumBtns.each(function () {
            if ($(this).text() === pageNum + 1 + "") {
                $(this).addClass("active");
                return false;
            }
        });
    });

    //表头内容数组
    var thsText = [];
    $("table").find("th").each(function () {
        thsText.push($(this).text());
    });

    //显示表格一条的具体信息
    $(".detail").parents("td").click(function () {
        $(this).find("span").toggleClass("glyphicon-plus glyphicon-minus");

        if ($(this).parents("tr").next().hasClass("detail-block")) {
            $(this).parents("tr").next().fadeOut(function () {
                $(this).remove();
            });
            return;
        }
        var tdsText = [];
        $(this).parents("tr").children().each(function () {
            tdsText.push($(this).text());
        });

        var detailContent = '';
        for (var i = 1; i < thsText.length - 1; i++) {
            detailContent += '<dt>' + thsText[i] + ':</dt><dd>' + tdsText[i] + '</dd>';
        }
        var colNum = $(this).parents("tr").children().length;
        var detail = '<tr class="detail-block info" style="display:none">\n' +
            '                <td colspan="' + colNum + '">' +
            '<dl class="dl-horizontal">\n' +
            detailContent +
            '</dl>' +
            '</td>\n' +
            '         </tr>';
        $(this).parents("tr").after(detail);
        $(this).parents("tr").next().fadeIn("slow");
    });
});