export class Game {
    constructor(){
        this.fps = 1;
        this.score = 0;
        this.isPlaying = true;
        this.gameHtml = '';
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
        this.garbage = [...this.gameArea];
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

        this.render();
    }
}