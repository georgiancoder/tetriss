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

    getFigureCoordsAtPosition(figure, y,x){
        let coords = [];
        figure.forEach((row,rowIndex)=>{
            row.forEach((cell,cellIndex)=> {
                if(figure[rowIndex][cellIndex] > 0){
                    coords.push([y+rowIndex,x+cellIndex]);
                }
            });
        });
        return coords;
    }

    canMoveDown(gameArea){
        let canMove = true;
        let onlyFigure = this.getFigureFromMatrix();
        let nextPosCoords = this.getFigureCoordsAtPosition(onlyFigure,this.Y+1,this.X);
        let currPosCoords = this.getFigureCoordsAtPosition(onlyFigure,this.Y,this.X);

        let nextPosAvailCoords = nextPosCoords.filter(c => {
            let includes = currPosCoords.find(arr=>JSON.stringify(c) == JSON.stringify(arr));
            if(!includes) {
                return true;
            }
        });
        if((this.Y+1) > gameArea.length){
            canMove = false;
        }
        nextPosAvailCoords.forEach(coord =>{
            if(coord[0] > 0 && (!gameArea[coord[0]] || (gameArea[coord[0]][coord[1]] > 0))){
                canMove = false;
            }
        });
        return canMove;
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
