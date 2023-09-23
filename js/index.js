let counter = 0

function updateCounter(){
    const counterElement = document.getElementById("counter");
    counterElement.textContent = counter;

    if(counter > 0){
        counterElement.style.color = "green";
    }else if(counter < 0){
        counterElement.style.color = "red";
    }else{
        counterElement.style.color = "grey";
    }
}

document.getElementById("decrease").onclick = () =>{
    counter--;
    updateCounter();
}

document.getElementById("increase").onclick = () =>{
    counter++;
    updateCounter();
}

document.getElementById("reset").onclick = () =>{
    counter = 0;
    updateCounter();
}

