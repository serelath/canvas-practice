var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "rgba(255, 0, 0, 0.3)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.3)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.3)";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "lightblue";
c.stroke();

// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "rgba(255, 0, 0, 0.3)";
//c.stroke();


for (var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var clrR = Math.floor(Math.random()*125);
    var clrG = Math.floor(Math.random()* 25);
    var clrB = Math.floor(Math.random()* 50 + 200);
    
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "rgba(255, 0, 0, 0.3)";
    c.fillStyle = "rgba(" + clrR + "," + clrG + "," + clrB + ", 0.2)";
    c.fill();
    c.stroke();
}