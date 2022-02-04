function pressed(){
    var text = document.getElementById("answer").value;
    if (text === "light"){
        document.body.style.backgroundColor = "white";
        document.getElementById("container").style.display = "none";
    }
}