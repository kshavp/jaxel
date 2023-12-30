"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log(__dirname);
});
app.get('/hi', (req, res) => {
    res.send("<p>This is the Hi Page!</p>");
    console.log(__dirname);
});
app.listen(PORT, () => {
    console.log(`Running at " + ${PORT}`);
});
