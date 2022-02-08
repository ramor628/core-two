function start(){
    document.body.style.background = 'black'
    document.getElementById('container').style.display = 'grid'
    document.getElementById('intro').style.display = 'none'
}

function bgWhite(){
    document.body.style.background = 'white'
    document.getElementById('container').style.display = 'none'
    document.getElementById('white').style.display = 'grid'
    document.getElementById('next').style.display = 'grid'
}

function pinterestPage(){
    window.location.href = 'https://www.pinterest.com/thelightplaylist/light/'
}