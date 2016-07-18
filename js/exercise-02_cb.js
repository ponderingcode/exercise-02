$(document).ready(function() {});

function onSubmitButtonPressed() {
    event.preventDefault();
    var val0 = parseInt($('#inp0').val());
    var factorial = val0;
    for (i = 1; i < val0; i++) {
        factorial *= i;
    }
    var msg = val0 + ' factorial is ' + factorial;
    $('#inp0').val('');
    $('#output').text(msg);
}