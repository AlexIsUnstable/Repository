 $(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $(".parallax").css("background-position", "50% " + (0.4 * scroll) + "px");
        });
    });
