function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
Circle.prototype.move = function(x,y){
    this.x = x;
    this.y = y
}

//ES5-way
function ColoredCircle(x,y,radius,color){
    Circle.call(this,x,y,radius);
    this.color = color;
}

class CircleES6 {
    
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
        
        //Or [this.x, this.y, this.radius]=[x,y,radius];
    }
    move(x,y){
        this.x = x;
        this.y = y
    }
}

class ColoredCircle extends CircleES6{
    constructor(x,y,radius,color){
        super(x,y,radius); //constructor of base class
        this.color = color;
    }
}