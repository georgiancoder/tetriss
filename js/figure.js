export class Figure {
    constructor(figure, areaWidth){
        this.figure = figure;
        this.X = Math.round((areaWidth/2) - (this.getFigureWidth(this.getFigureFromMatrix()) / 2));
        this.Y = -this.getFigureFromMatrix().length;
    }

    getFigureWidth(figure){
        let width = 0;
        figure.forEach(row=>{
            row.forEach((cell,cellIndex)=>{
               if (cell > 0 && cellIndex + 1 > width) {
                   width = cellIndex + 1;
               }
            });
        });
        return width;
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

    canMove(gameArea, axis, direction){
        let canMove = true;
        let onlyFigure = this.getFigureFromMatrix();
        let nextPosCoords;
        let currPosCoords = this.getFigureCoordsAtPosition(onlyFigure,this.Y,this.X);
        if(axis == 'Y'){
            nextPosCoords = this.getFigureCoordsAtPosition(onlyFigure,this.Y+direction,this.X);
        } else if(axis == 'X') {
            nextPosCoords = this.getFigureCoordsAtPosition(onlyFigure,this.Y,this.X+direction);
        }

        let nextPosAvailCoords = nextPosCoords.filter(c => {
            let includes = currPosCoords.find(arr=>JSON.stringify(c) == JSON.stringify(arr));
            if(!includes) {
                return true;
            }
        });
        if((this.Y+1) > gameArea.length){
            canMove = false;
        }
        if(axis == 'Y'){
            nextPosAvailCoords.forEach(coord =>{
                if(!gameArea[coord[0]] || (gameArea[coord[0]][coord[1]] > 0)){
                    canMove = false;
                }
            });
        } else if(axis == 'X') {
            nextPosAvailCoords.forEach(coord =>{
                if(gameArea[coord[1]] < 0 || gameArea[coord[1]] > gameArea[0].length || (gameArea[coord[0]][coord[1]] > 0)){
                    canMove = false;
                }
            });
        }
        
        return canMove;
    }
    canRotate(){

    }
    moveLeft(){

    }
    moveRight(){

    }
    rotate(){

    }
}
