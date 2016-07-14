var val0;
var factorial;

function onSubmitButtonPressed() {
    val0 = parseInt($('#inp0').val());
    factorial = val0;
    for (i = 1; i < val0; i++) {
        factorial *= i;
    }
    alert ('factorial: ' + factorial);
}