
document.addEventListener("DOMContentLoaded", () => {
    const modo = document.getElementById("lamp");
    const bg = document.body;

    function toggleLamp() {
        
        console.log(modo.src);
        
        if (modo.src.endsWith("lamp_off.png")) {
            modo.src = "assets/lamp_on.png"; 
            modo.alt = "Lamp is on";
            bg.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        } 
        else {
            modo.src = "assets/lamp_off.png";
            modo.alt = "Lamp is off";
            bg.style.background = "radial-gradient(circle, white 8%, black 100%)";
        } 
    }

    modo.addEventListener("click", toggleLamp);
});


-------------------------------
  <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lâmpada</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <img id="lamp" src="assets/lamp_off.png" alt="Lâmpada apagada">
    </div>
    <script src="main.js"></script>
</body>
</html>
-----------------------------------



  body {
    background: radial-gradient(circle, white 8%, black 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    cursor: pointer;
}
