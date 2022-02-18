function displayVolt(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('fence').style.display = 'grid';
    document.getElementById('box3').style.marginBottom = '5em';
    document.getElementById('click').style.display = 'none';
}

function lightMode(){
    document.body.style.background = 'white';
    document.getElementById('light').style.background = '#ba0104';
    document.getElementById('light').style.color = 'white';
    document.getElementById('night').style.background = 'white';
    document.getElementById('night').style.color = '#ba0104';
    document.body.style.color = 'black';
}

function nightMode(){
    document.body.style.background = 'black';
    document.getElementById('night').style.background = '#ba0104';
    document.getElementById('night').style.color = 'black';
    document.getElementById('light').style.background = 'black';
    document.getElementById('light').style.color = '#ba0104';
    document.body.style.color = 'white';
}