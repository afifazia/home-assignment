const canvas = document.getElementById("netCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const numPoints = 30;
const points = [];
const mouse = { x: canvas.width / 2, y: canvas.height / 2};

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.size = 3;
        this.angle = Math.random() * Math.PI * 2;

    }
}

draw() {
    ctx.beginPath();
    ctx.arc
}