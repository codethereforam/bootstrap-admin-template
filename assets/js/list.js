$(document).ready(function () {
    $(".glyphicon-trash").click(function () {
        $("#deleteConfirm").removeClass("hidden");
    });

    $("#deleteConfirm button").click(function () {
        $("#deleteConfirm").addClass("hidden");
    });

    $("#deleteConfirm .confirm").click(function () {
        // delete the selected item
    });
});