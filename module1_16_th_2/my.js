class circle {
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;

    }



    getArea(){
        return Math.PI*this.radius*this.radius;

    }
}
let circle1 = new circle(2,"black")


document.write("radius: " + circle1.radius + "; area: " + circle1.getArea() + circle1.color);