

interface Game{
    id: string,
    whitePlayer: string,
    blackPlayer: string,
    moves: string[]
}


export class GameManager {
    games: Game []=[]
   private  constructor () {
        this.games= []
    }

    addMove (gameId: string, move:string){
        console.log('adding move ${move} to game ${gameId}')
        const game = this.games.find(game=>gameId===gameId)
        game?.moves.push(move)
    }

    addGame(gameId: string){
        const game = {
            id: gameId,
            whitePlayer:"ashutosh",
            blackPlayer: "ashu",
            moves: []
        }
        this.games.push(game)
    }

    log(){
        console.log(this.games)
    }
}

//@ts-ignore
export const GameManager = new GameManager()


