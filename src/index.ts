import express, {Express, Request, Response} from "express";

const app:Express = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;

app.get('/', (req:Request, res:Response) => {
    res.sendFile(__dirname+"/public/index.html");
    console.log(__dirname);
});

app.get('/hi', (req:Request, res:Response) => {
    res.send("<p>This is the Hi Page!</p>");
    console.log(__dirname);
});

app.listen(PORT, () => {
    console.log(`Running at " + ${PORT}`);
});
