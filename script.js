var startTime = new Date().getTime();
    
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

function appear(){
    var topmargin = Math.random()*350;
    var leftmargin = Math.random()*350;
    var width = (Math.random()*200) + 50;
    var randomcolor = getRandomColor();

    if (Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%"
    }
    else{
        document.getElementById("shape").style.borderRadius = "0"
    }
    document.getElementById("shape").style.backgroundColor = randomcolor;
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.top = topmargin + "px";
    document.getElementById("shape").style.left = leftmargin + "px";
    document.getElementById("shape").style.display = "block";
    startTime = new Date().getTime();
    
}


function appearafterdelay(){
    setTimeout(appear,Math.random()*1500);
}

appearafterdelay();

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    
    var endTime = new Date().getTime();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;

    document.getElementById("timetaken").innerHTML = timeDiff;
    appearafterdelay();
    
}
    
