import {detectCollision} from './collisionDetetion.mjs';
export class Wall{
    constructor(game,position){
        this.image = document.querySelector('#wall');
        this.position= position;
        this.size = 25;
        this.game = game;
        this.width=50;
        this.height=50;

        this.markedFoeDeletion = false;
    }
    update(deltaTime){
      if(detectCollision(this.game.ball,this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.game.ball.y = this.position.y - this.game.ball.size;
            this.markedFoeDeletion = true;
        } 

        // 圆与举行的collision
/*         let closePoint = {x:this.position.x,y:this.position.y};
        let x=this.game.ball.position.x,
            y=this.game.ball.position.y;
        if( x > this.position.x+this.width){
            closePoint.x += this.width;
        }else if( x >= this.position.x){
            closePoint.x = x;
        }
        if( y > this.position.y + this.height){
            closePoint.y += this.height;
        }else if( y >= this.position.y){
            closePoint.y = y;
        }

        let distance = Math.pow(closePoint.x-x,2) + Math.pow(closePoint.y-y,2);
        if(distance< Math.pow(this.game.ball.size*0.5,2)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
        } */
    }
    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,this.position.y,
            this.width,this.height
        )
    }
}