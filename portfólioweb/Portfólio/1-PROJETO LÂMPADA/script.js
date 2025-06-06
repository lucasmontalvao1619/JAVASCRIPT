let lampada_ligada = false;

document.body.addEventListener("click", function(){
    const lamp = document.getElementById("lamp")
    const bgaceso = document.body
    if (lampada_ligada){
        lamp.src = "assets/lamp_on.png"
        bgaceso.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
    }
    else{
        lamp.src = "assets/lamp_off.png"
        bgaceso.style.background = "radial-gradient(circle, white 8%, black 100%)"; 
    }
    lampada_ligada = !lampada_ligada
})