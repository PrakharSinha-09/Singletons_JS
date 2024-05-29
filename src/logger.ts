import { gameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(gameManager);
    }, 4000)
}