import { Injectable } from '@angular/core';

let player: Player = new Player();
let difficulty: string;

@Injectable()
export class Dispatcher {

    private cars[]: Car;
    private requests[]: Request;

    private requestGenerator: RequestGenerator;
    
    setPlayerName(name: string): void{
        player.name = name;
    }

    getPlayerName(): string{
        return player.name;
    }

    setDifficulty(newDifficulty: string): void{
        difficulty = newDifficulty;
    }

    getDifficulty(): string{
        return difficulty;
    }

    getScore(): number{
        return player.score;
    }

}
