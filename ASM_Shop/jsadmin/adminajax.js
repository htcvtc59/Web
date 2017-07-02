$(document).ready(function () {
    $("#contentDetailDes").load("DesDetailAjax.html");
    $("#contentDetailConfig").hide();
    $("#detailDescription ul li").click(function () {
        var iddetail = $(this).attr("id");
        if (iddetail == "detail1") {
            $("#detail1").css("background-color", "#ffdd23");
            $("#detail1").css("color", "#2E3243");
            $("#detail2").css("background-color", "#2E3243");
            $("#detail2").css("color", "#ffffff");

            $("#contentDetailConfig").hide();
            $("#contentDetailDes").show();

            // if($("#video").paused)
            // $("#contentDetailDes").load("DesDetailAjax.html");
        } else if (iddetail == "detail2") {
            $("#detail2").css("background-color", "#ffdd23");
            $("#detail2").css("color", "#2E3243");
            $("#detail1").css("background-color", "#2E3243");
            $("#detail1").css("color", "#ffffff");

            $("#contentDetailDes").hide();
            $("#contentDetailConfig").show();
            $("#contentDetailConfig").load("ConfigDesAjax.html");
        }


    });


});
