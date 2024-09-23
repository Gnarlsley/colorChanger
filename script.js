const body = document.querySelector("body");
document.getElementById("greenBtn").onclick = function(){
    body.className = '';
    body.style.backgroundColor = "";
    body.classList.add("green");
}

document.getElementById("redBtn").onclick = function(){
    body.className = '';
    body.style.backgroundColor = "";
    body.classList.add("red");
}

document.getElementById("blueBtn").onclick = function(){
    body.className = '';
    body.style.backgroundColor = "";
    body.classList.add("blue");
}

document.getElementById("randomBtn").onclick = function(){
    body.className = '';
    body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var color = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    return color;
}




