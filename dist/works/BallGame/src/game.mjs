import { Paddle } from './paddle.mjs';
import {InputHandler} from './input.mjs';
import {Ball} from './ball.mjs';
import {Wall} from './wall.mjs';
import {buildLevel,level1} from './level.mjs';
const GAMESTATES={
    PAUSED:0,
    RUNNING:1,
    MENU:2,
    GAMEOVER:3
};
export class Game{
 constructor(gameWidth,gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAMESTATES.MENU;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObject = [];
    this.lives = 1;
    new InputHandler(this.paddle,this);

 }
 start(){
    if(this.gameState!==GAMESTATES.MENU)return; 
    let walls = buildLevel(this,level1);
    this.gameObject = [this.paddle,this.ball,...walls];
    this.gameState = GAMESTATES.RUNNING;
 }
 update(deltaTime){
    if(this.lives===0)
        this.gameState = GAMESTATES.GAMEOVER;
    if( this.gameState===GAMESTATES.PAUSED || 
        this.gameState===GAMESTATES.MENU ||
        this.gameState===GAMESTATES.GAMEOVER
    )
        return;
    this.gameObject.forEach(Object=>Object.update(deltaTime));
    this.gameObject = this.gameObject.filter(Object=>!Object.markedFoeDeletion);
 }
 draw(ctx){
    this.gameObject.forEach(Object=>Object.draw(ctx));
    if(this.gameState===GAMESTATES.PAUSED){
        ctx.fillStyle ="rgba(0,0,0,0.5)";
        ctx.fillRect(0,0,this.gameWidth,this.gameHeight);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused",this.gameWidth/2,this.gameHeight/2);
    }
    if(this.gameState===GAMESTATES.MENU){
        ctx.fillStyle ="rgba(0,0,0,1)";
        ctx.fillRect(0,0,this.gameWidth,this.gameHeight);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press SPACEBAR to start",this.gameWidth/2,this.gameHeight/2);
    }
    if(this.gameState===GAMESTATES.GAMEOVER){
        ctx.fillStyle ="rgba(0,0,0,1)";
        ctx.fillRect(0,0,this.gameWidth,this.gameHeight);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER",this.gameWidth/2,this.gameHeight/2);
    }
 }
 pauseGame(){
    // console.log(this.gameState);
    if(this.gameState===GAMESTATES.PAUSED){
        this.gameState = GAMESTATES.RUNNING;
    }else{
        this.gameState = GAMESTATES.PAUSED;
    }
 }
}