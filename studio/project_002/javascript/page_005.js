/*function showGate(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('fence').style.display = 'grid';
    document.getElementById('box3').style.marginBottom = '5em';
    document.getElementById('click').style.display = 'none';
}*/

function clearScreen() {
    document.getElementById('first').style.display = 'none';
    document.getElementById('next').style.display= 'block';
}

function clearPedal(){
    var div = document.getElementById('first');

    if (document.getElementById('first').style.opacity=='0%'){
        document.getElementById('first').style.display='none';
    }
}