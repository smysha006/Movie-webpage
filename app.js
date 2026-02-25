// Movie Data Array
let movies = [
    {
        title: "The Little Mermaid",
        info: "2023 | 2h 14min | Romance",
        description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs.",
        bg: "https://m.media-amazon.com/images/I/712+XUUvIqL.jpg"
    },
    {
        title: "65",
        info: "2023 | 1h 33min | Action",
        description: "After a catastrophic crash on an unknown planet, pilot Mills discovers he is stranded on Earth 65 million years ago.",
        bg: "https://static.toiimg.com/photo/96256717.cms?resizemode=4"
    },
    {
        title: "The Covenant",
        info: "2023 | 2h 03min | Thriller",
        description: "During the war in Afghanistan, a local interpreter risks his life to carry an injured sergeant across dangerous terrain.",
        bg: "https://ntvb.tmsimg.com/assets/p23680547_v_h10_aa.jpg?w=1280&h=720"
    }
];

let currentMovie = 0;

$(document).ready(function () {

    // Show
    $("#showBtn").click(function () {
        $("#description").show(500);
    });

    // Hide
    $("#hideBtn").click(function () {
        $("#description").hide(500);
    });

    // Toggle
    $("#toggleBtn").click(function () {
        $("#description").toggle(500);
    });

    // Next Movie Button
    $("#nextBtn").click(function () {

        currentMovie++;
        if (currentMovie >= movies.length) {
            currentMovie = 0;
        }

        // Fade Out
        $("#movieSection").fadeOut(400, function () {

            $("#title").html(movies[currentMovie].title);
            $("#info").html(movies[currentMovie].info);
            $("#description").html(movies[currentMovie].description);

            $("#movieSection").css("background-image",
                "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('" + movies[currentMovie].bg + "')"
            );

            // Fade In
            $("#movieSection").fadeIn(400);
        });
    });

});