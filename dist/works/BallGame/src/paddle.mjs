// export default
export class Paddle{
    constructor(game){
        this.width=150;
        this.height=20;

        this.position={
            x: game.gameWidth/2- this.width/2 ,
            y: game.gameHeight - this.height - 10
        };
        this.maxSpeed = 10;
        this.speed = 0;
        this.rightMax = game.gameWidth - this.width;
    }
    

    draw(ctx){
        ctx.fillStyle = "#f00";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.speed = this.maxSpeed;
    }
    stop(){
        this.speed = 0;
    }
    update(delteTime){
        if(!delteTime)return;
        //this.position.x += 0.1;
        //this.position.x += 5/delteTime;
       // console.log(5/delteTime,delteTime); 

       // INSIDE OF GAMEFRAME
         this.position.x += this.speed;
         if(this.position.x<0)
            this.position.x = 0;
         else if(this.position.x>this.rightMax)
                this.position.x=this.rightMax;
    }
}