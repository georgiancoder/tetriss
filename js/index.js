import { Game } from './game';

let game = new Game();
game.loop();

document.addEventListener('keyup', moveObject, false);

function moveObject(e){
    switch(e.code){
        case 'ArrowLeft':
        if(game.activeFigure.canMove(game.snapShot,'X',-1)){
            console.log('can move left');
        }
        break;
        case 'ArrowRight':

        break;
    }
    
}