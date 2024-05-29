import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id:"1",
        "whitePlayerName": "Prakhar",
        "blackPlayerName": "Prabal",
        moves: []
    })
}, 5000)
