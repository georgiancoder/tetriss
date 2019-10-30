import {Figure} from "./figure";
import { Figures } from './figures';

export class Game {
    constructor(){
        this.fps = 1;
        this.score = 0;
        this.isPlaying = true;
        this.gameHtml = '';
        this.timeStamp;
        this.gameArea = [
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
            ['0','0','0','0','0','0','0','0'],
        ];
        this.snapShot = this.gameArea.map(x => ([...x]));
        this.activeFigure = new Figure(this.randomFigure());
        this.playerY = null;
    }

    randomFigure(){
        return Figures[Math.floor(Math.random() * Figures.length)];
    }

    loop(timeStamp){
        if(this && this.isPlaying){
            setTimeout(()=>{
                this.update(timeStamp);
                window.requestAnimationFrame(this.loop.bind(this));
            },1000 / this.fps);
        }
    }

    render(){
        this.gameHtml = '';
        this.gameHtml += `score: ${this.score} <br>`;
        this.gameArea.forEach(row => {
            row.forEach(cell=>{
                this.gameHtml += `${cell}`;
            });
            this.gameHtml += '<br>';
        });
        document.body.innerHTML = this.gameHtml;
    }
    
    update(timeStamp){
        if (this.activeFigure.Y === this.playerY) {
            // create new figure & update snapShot
            this.activeFigure = new Figure(this.randomFigure());
        }
        this.gameArea = this.activeFigure.drawFigure(this.gameArea,this.snapShot);
        if (this.activeFigure.canMoveDown(this.gameArea)) {
            this.activeFigure.Y++;
        } else {
            this.snapShot = this.gameArea.map(x => ([...x]));
            this.playerY = this.activeFigure.Y;
        }
        this.render();

    }
}
