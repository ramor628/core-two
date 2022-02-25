window.addEventListener("load", function(){
    let div;
    div = document.getElementById('green');
  
  const onMouseMove = (e) =>{
  
    div.style.left = e.pageX + 'px';
    div.style.top = e.pageY + 'px';
  }
  
  document.body.addEventListener('mousemove', onMouseMove);
});