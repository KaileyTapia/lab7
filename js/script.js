function init() {
    //add your javascrip between these two lines of code
    var userinput = document.getElementById('entryinput');
    var btnclik = document.getElementById('entrybutton');
    var textoutput = document.getElementById('textoutput');
    btnclik.addEventListener('click', function() {

        alert('Kailey Tapia: ' + userinput.value);
        textoutput.innerHTML = userinput.value;
    });
}
window.addEventListener('load', init);