import {Wall} from './wall.mjs'
export function buildLevel(game,level){
    let walls = [];
    //console.log(level);
    level.forEach((row,rowindex)=>{
        row.forEach((wall,wallindex)=>{
            if(wall===1){
                let positon={
                    x:50*wallindex,
                    y:50*rowindex+75
                };
                walls.push(new Wall(game,positon));
            }
        
        });
    });
    return walls;
}
export const level1=[
    [0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];