const agung = document.getElementById("layar");
const hesti = agung.getContext("2d");

agung.width = window.innerWidth;
agung.height = window.innerHeight;

hesti.fillStyle = "blue";
hesti.fillRect(50,50,50,50);

hesti.beginPath();
hesti.arc(200,200,100,0,Math.PI*2);
