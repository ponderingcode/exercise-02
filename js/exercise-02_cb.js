function onSubmitButtonPressed() {
    var val0 = parseInt($('#inp0').val());
    var factorial = val0;
    for (i = 1; i < val0; i++) {
        factorial *= i;
    }
    alert(val0 + ' factorial is ' + factorial);
}