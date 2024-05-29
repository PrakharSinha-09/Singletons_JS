"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        //this will create a single instance of GameManager and return it... no matter how many times being called it will return the same instance everytime... implies the same memory right!
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'Prakhar',
            blackPlayerName: 'Prabal',
            moves: []
        };
        this.games.push(game);
    }
    logInfo() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = GameManager.getInstance();
// const gameManager1=new GameManager()                      //this is not possible as the constructor of the class is private
