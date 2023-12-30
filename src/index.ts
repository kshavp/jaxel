import express, { Express, Request, Response } from "express";
import path from 'path';
import multer from 'multer';
import { log } from "console";

const app:Express = express();
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;

app.get('/upload', (req: Request, res: Response) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
    console.log(__dirname);
});

app.post('/upload', upload.single('csvFile'), (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const uploadedFilePath:string = req.file.path;

    res.send(`File uploaded successfully. Path: ${uploadedFilePath}`);
});

app.listen(PORT, () => {
    console.log(`Running at: ${PORT}`);
});
