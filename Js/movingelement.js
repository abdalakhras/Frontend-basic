var element = document.getElementById("movingElement")
document.addEventListener("keydown",moveElement)

function moveElement(event){
   
    var y = parseInt(window.getComputedStyle(element).left,10)
    var z = parseInt(window.getComputedStyle(element).top,10)
        
    if(event.key == "ArrowRight"){
        // console.log(y)
        element.style.left = (y+10) + "px"
        element.style.backgroundColor = "yellow"
    }
    if(event.key == "ArrowLeft"){
        // console.log(y)
        element.style.left = (y-10) + "px"
        element.style.backgroundColor = "green"
    }
    
    if(event.key == "ArrowDown"){
        // console.log(z)
        element.style.top = (z+10) + "px"
        element.style.backgroundColor = "pink"
    }
    if(event.key == "ArrowUp"){
        // console.log(z)
        element.style.top = (z-10) + "px"
        element.style.backgroundColor = "violet"
    }
    }
    
