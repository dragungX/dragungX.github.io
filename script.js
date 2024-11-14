const agung = document.getElementById("layar");
const hesti = agung.getContext("2d");

agung.width = window.innerWidth;
agung.height = window.innerHeight;

hesti.fillStyle = "white";
hesti.fillRect(50,50,50,50);

hesti.beginPath();
hesti.arc(100,100,50,0,Math.PI*2);
