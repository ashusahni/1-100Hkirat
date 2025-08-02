import { game } from "./store";
import { startLogger } from "./logger";

startLogger()

setInterval(() => {
    game.push({
        id: Math.random().toFixed(),
        whitePlayer: "Ashut",
        blackPlayer: "ashutosh",
        moves: []
    })
}, 5000);