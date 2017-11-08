$('#showAnswer').click(function() {
    $('.change').each(function() {
        var question = $(this).html();
        var solution = $(this).data('answer');

        console.log(solution);

        $(this).html(solution);
        $(this).data('answer', question);
    });
});