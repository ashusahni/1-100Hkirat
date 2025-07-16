"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json);
app.get("getOtp", (req, res) => {
    res.send("spend checks on y nike now ");
});
app.listen(3000, () => {
    console.log("server been up runnig to port 3000");
});
