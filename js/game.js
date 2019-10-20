import {Figure} from "./figure";

export class Game {
    constructor(){
        this.fps = 1;
        this.score = 0;
        this.isPlaying = true;
        this.gameHtml = '';
        this.timeStamp;
        this.gameArea = [
            ['#','#','#','#','#','#','#','#','#','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','0','0','0','0','0','0','0','0','#'],
            ['#','#','#','#','#','#','#','#','#','#']
        ];
        this.snapShot = [...this.gameArea];
        this.activeFigure = new Figure([[1]]);
        this.playerY;
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
        }
        this.render();
        // save player Y position for checking game's next tick; if position is the same create new figure
        this.playerY = this.activeFigure.Y;
    }
}
