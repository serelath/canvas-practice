var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = "rgba(255, 0, 0, 0.3)";
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = "rgba(0, 255, 0, 0.3)";
//c.fillRect(400, 100, 100, 100);
//c.fillStyle = "rgba(0, 0, 255, 0.3)";
//c.fillRect(300, 300, 100, 100);

// Line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = "lightblue";
//c.stroke();

// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "rgba(255, 0, 0, 0.3)";
//c.stroke();


//for (var i = 0; i < 100; i++) {
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    var clrR = Math.floor(Math.random()*50 + 50);
//    var clrG = Math.floor(Math.random()* 25);
//    var clrB = Math.floor(Math.random()* 50 + 200);
//    
//    c.beginPath();
//    c.arc(x, y, 30, 0, Math.PI * 2, false);
//    c.strokeStyle = "rgba(255, 0, 0, 0.3)";
//    c.fillStyle = "rgba(" + clrR + "," + clrG + "," + clrB + ", 0.2)";
//    c.fill();
//    c.stroke();
//}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "rgba(150, 0, 50, 0.3)";
        c.fillStyle = "rgba(25,0,150, 0.3)";
        c.fill();
        c.stroke();
    }
    
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
    
}

var circleArray = [];

for (var i=0; i<100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    
    var circle = new Circle(200,200, 3, 3, 30);
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    
    circle.update();
    
}

animate();
