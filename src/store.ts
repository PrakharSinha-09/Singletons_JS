interface Game{
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

export class GameManager {
    games: Game[]=[]

    private static instance: GameManager        //this static attribute is also needed and must be of the same class type

    private constructor() {                    //make constructor private and write static getInstance() method and return new GameManager() for singleton pattern
        this.games=[]
    }

    static getInstance(){
        //this will create a single instance of GameManager and return it... no matter how many times being called it will return the same instance everytime... implies the same memory right!
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance=new GameManager();
        return GameManager.instance
    }

    addMove(gameId: string, move: string)
    {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game=this.games.find(game=>game.id === gameId)
        game?.moves.push(move)
    }

    addGame(gameId: string){
        const game={
            id: gameId,
            whitePlayerName: 'Prakhar',
            blackPlayerName:'Prabal',
            moves: []
        }
        this.games.push(game)
    }

    logInfo(){
        console.log(this.games);
    }
}

export const gameManager=GameManager.getInstance()
// const gameManager1=new GameManager()                      //this is not possible as the constructor of the class is private