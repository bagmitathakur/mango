class Tree {

constructor(x,y){
    var options={
        isStatic:true


    }
    this.x=x;
    this.y=y;
    this.width=350;
    this.height=710;
    this.thickness=14;
    this.image=loadImage("images/tree.png");
    this.Body=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options );
    World.add(world,this.body);


}
display(){
var treepos=this.body.position;
push();
translate(treepos.x,treepos.y);
stroke(10);
imageMode (CENTER);
image(this.image,0,-this.height/2,this.width,this.height);
pop ();




}



}