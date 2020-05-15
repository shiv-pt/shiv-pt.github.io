function func() {
    var myVar = setInterval(myTimer, 1000);
}

function myTimer() {
document.getElementById('test').innerHTML = Date();
}
