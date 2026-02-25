// Pure JavaScript DOM Update
document.getElementById("updateBtn").addEventListener("click", function () {
    document.getElementById("studentName").innerHTML = "Name: Aisha Khan";
    document.getElementById("studentBranch").innerHTML = "Branch: Information Technology";
    document.getElementById("studentYear").innerHTML = "Year: Third Year";
});

// jQuery Functions
$(document).ready(function () {

    $("#hideBtn").click(function () {
        $("#studentBox").hide(1000);
    });

    $("#showBtn").click(function () {
        $("#studentBox").show(1000);
    });

    $("#toggleBtn").click(function () {
        $("#studentBox").toggle(1000);
    });

    $("#animateBtn").click(function () {
        $("#studentBox").animate({
            width: "500px",
            height: "200px",
            opacity: 0.7
        }, 1000);
    });

});