class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:25
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
          
    }

    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;  
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y);


               
        }
      
    }
}


          
   
