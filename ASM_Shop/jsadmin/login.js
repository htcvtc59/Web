$(document).ready(function () {

    $("#formloginForget button").click(function () {
        if ($("#formloginForget #usernamel").val() == "admin@com" &&
            $("#formloginForget #yourpasswordl").val() == "admin") {
            alert(32323);
        } else {
            alert("Ten dang nhap hoac mat khau sai");
        }
    });

    $(".login").click(function () {
        $("#formforgetPass").hide();
        $("#formnewchangePass").hide();
        $("#formloginForget").show();

        $("#formloginForget input").val("");
        $(".checkbox input").prop("checked", false);
    });

    $("#forgetPass").click(function () {
        $("#formforgetPass").show();
        $("#formforgetAutoCode").hide();
        $("#formloginForget").hide();
        $("#formforgetEmail input").val("");

    });
    if ($("#formforgetEmail input").val().length > 0) {
        $("#formforgetPass button").click(function () {
            $("#formforgetAutoCode").show();
            $("#formforgetEmail").hide();
            $("#formforgetAutoCode input").val("");
        });
    }
    if ($("#formforgetAutoCode input").val().length > 0 && $("#formforgetAutoCode input").val() == "admin") {
        $("#formforgetPass button").click(function () {
            $("#formnewchangePass").show();
            $("#formloginForget").hide();
            $("#formloginForget").hide();
        });
    }

});
