import { gameManager } from "./store";
import { startLogger } from "./logger";

// const games=new GameManager()        recreating instance here will create the new memory space and things won't work as per the expectation, so, exporting the instance from one place will ensure that, they have same instance
startLogger();

setInterval(() => {
    gameManager.addGame(Math.random.toString())
}, 5000)
