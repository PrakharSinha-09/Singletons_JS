"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.games.push({
        id: "1",
        "whitePlayerName": "Prakhar",
        "blackPlayerName": "Prabal",
        moves: []
    });
}, 5000);
