"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
// const games=new GameManager()        recreating instance here will create the new memory space and things won't work as per the expectation, so, exporting the instance from one place will ensure that, they have same instance
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.GameManager.getInstance().addGame(Math.random.toString());
}, 5000);
