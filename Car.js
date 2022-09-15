class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.z = 0;
    }

    toMatrix(){
        return [[this.x], [this.y], [this.z]]
    }
}


class Car{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.angle = angle_to_radians(0);
        this.points = [
            new Point(15, -20),
            new Point(-15, -20),
            new Point(-20, 20),
            new Point(20, 20),
        ]
        this.head = [
            new Point(0, 0),
            new Point(0, -30)
        ]  
        this.transformedPoints = [] 
        this.rotatedPoints = []
        this.transformedHead = []
        this.rotatedHead = []
        this.speed = 0.5
    }

    rotatePoints(){
        this.rotatedPoints = []
        this.rotatedHead = []
        this.rotationMatrix = [
            [Math.cos(this.angle), -Math.sin(this.angle)],
            [Math.sin(this.angle), Math.cos(this.angle)]
        ]

        this.points.forEach((v) => {
            this.rotatedPoints.push(multiplyMatrix(this.rotationMatrix, v.toMatrix()))
        })

        this.head.forEach((v) => {
            this.rotatedHead.push(multiplyMatrix(this.rotationMatrix, v.toMatrix()))
        })
    }


    transformPoints(){
        this.transformedPoints = []
        this.transformedHead = []
        this.rotatedPoints.forEach((v) => {
            this.transformedPoints.push(new Point(parseInt(v.x)+this.x, parseInt(v.y)+this.y))
        })


        this.rotatedHead.forEach((v) => {
            this.transformedHead.push(new Point(parseInt(v.x) + this.x, parseInt(v.y) + this.y))
        })
    }



    draw(){
        this.rotatePoints()
        this.transformPoints()
        

        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.beginPath();
        ctx.moveTo(this.transformedPoints[3].x, this.transformedPoints[3].y)
        this.transformedPoints.forEach((v) => {
            ctx.lineTo(v.x, v.y)
        })
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(this.transformedHead[0].x,this.transformedHead[0].y);
        ctx.lineTo(this.transformedHead[1].x,this.transformedHead[1].y);
        ctx.stroke()
    }

    moveForward(progress){
        this.x -= (this.speed*progress*Math.cos(this.angle+(0.5*Math.PI)))
        this.y -= (this.speed*progress*Math.sin(this.angle+(0.5*Math.PI)))
    }

    moveBackward(progress){
        this.x += (this.speed*progress*Math.cos(this.angle+(0.5*Math.PI)))
        this.y += (this.speed*progress*Math.sin(this.angle+(0.5*Math.PI)))
    }

    rotateLeft(progress){
        this.angle -= angle_to_radians(0.4*progress)
    }

    rotateRight(progress){
        this.angle += angle_to_radians(0.4*progress)
    }
}