$(document).ready(function() {
    $('#showAnswer').click(function() {
        $('.change').each(function() {
            var question = $(this).html();
            var solution = $(this).data('answer');

            $(this).html(solution);
            $(this).data('answer', question);
        });
    });
    var
});