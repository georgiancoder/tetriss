export class Figure {
    constructor(figure){
        this.figure = figure;
        this.X = Math.round(this.getFigureFromMatrix()[0].length / 2);
        this.Y = -this.getFigureFromMatrix().length;
    }

    getFigureSize(figure){
        return {width: figure[0].length, height: figure.length}
    }

    getFigureFromMatrix(){
        let figure = [];
        this.figure.forEach(row=>{
            let isInArea = false;
            row.forEach(cell=> {
                if(Number(cell) > 0){
                    isInArea = true;
                }
            });
            if(isInArea){
                figure.push(row);
            }
        });
        return figure;
    }

    drawFigure(gameArea,snapShot){
        gameArea = snapShot.map(x => ([...x]));
        const onlyFigure = this.getFigureFromMatrix();
        onlyFigure.forEach((row,yCoord) => {
            row.forEach((cell, xCoord)=>{
                if(gameArea[this.Y+yCoord]){
                    if(cell > 0){
                        gameArea[this.Y+yCoord][this.X+xCoord] = cell;
                    }
                }
            });
        });
        return gameArea;
    }

    canMoveDown(){

    }
    canMoveLeft(){

    }
    canMoveRight(){

    }
    canRotate(){

    }
    moveDown(){

    }
    moveLeft(){

    }
    moveRight(){

    }
    rotate(){

    }
}
