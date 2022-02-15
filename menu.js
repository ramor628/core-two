/*window.addEventListener("load", function(){
const bodyElement = document.querySelector('body')

function mouseOver() {
  bodyElement.style.background = "radial-gradient(circle, rgba(9,224,120,1) 10%, rgba(26,35,202,1) 100%)";
}

function mouseOut() {
  bodyElement.style.background = "green";
}

window.addEventListener("mouseover", mouseOver);
window.addEventListener("mouseout", mouseOut);
});*/

window.addEventListener("load", function(){
    let div;
    div = document.getElementById('blue');
  
  const onMouseMove = (e) =>{
  
    div.style.left = e.pageX + 'px';
    div.style.top = e.pageY + 'px';
  }
  
  document.body.addEventListener('mousemove', onMouseMove);
});


document.getElementById('name').onmouseover = function()
{pinkCircle()};

document.getElementById('name').onmouseout = function()
{blueCircle()};

function pinkCircle(){
    document.getElementById('blue') = '#ff9bd9';
}

function blueCircle(){
 document.getElementById('blue') = '#1a23ca';
}