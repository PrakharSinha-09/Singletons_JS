import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(GameManager.getInstance().logInfo);
    }, 4000)
}