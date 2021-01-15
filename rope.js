class rope {
    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      var options = {
          bodyA:body1,
          bodyB:body2,
          stiffness:0.04,
          length:10,
          pointB:{x:this.offsetX, y:this.offsetY
          }
      }
      this.chain=Constraint.create(options)
      World.add(world, this.chain);
    }
    display(){

    
      var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position; 
      strokeWeight(2);
  var Anchor1X=pointA.x 
  var Anchor1Y=pointA.y
 var Anchor2X=pointB.x+this.offsetX 
 var Anchor2Y=pointB.y+this.offsetY 
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


     //strokeWeight(4);
     //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
  };