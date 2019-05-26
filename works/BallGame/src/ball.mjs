import {detectCollision} from './collisionDetetion.mjs';
export class Ball{
    constructor(game){
        this.image = document.querySelector('#ball');
        this.speed={x:5,y:-4};
        this.position={x:10,y:400};
        this.size = 25;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
    }
    draw(ctx){
        ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    update(deltaTime){
        // console.log(this.game.paddle.position.x);

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x >this.gameWidth-this.size || this.position.x < 0 )
            this.speed.x = -this.speed.x;

        if(this.position.y < 0)
            this.speed.y = - this.speed.y;

        if(this.position.y+this.size > this.gameHeight){
            this.game.lives--;
        }

        if(detectCollision(this,this.game.paddle))
        {
           // console.log('bug');
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }

}