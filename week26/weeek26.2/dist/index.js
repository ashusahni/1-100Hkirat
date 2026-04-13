"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//@ts-ignore
const middleware = (req, res, next) => {
    const startTIme = Date.now();
    next();
    const endTIme = Date.now();
    console.log("it took ", endTIme - startTIme, "ms");
};
app.use(middleware);
app.get("/user", (req, res) => {
    let user = {
        name: "nescafe",
        age: 22
    };
    res.json({
        name: "Ashtuosh"
    });
});
app.post("/user", (req, res) => {
    res.json({
        name: "Ashtuosh"
    });
});
app.listen(3000);
