import express, { Express, Request, Response } from "express";
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import csvParser from 'csv-parser';

const app:Express = express();
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/upload', (req: Request, res: Response) => {
    const content:string = "Jaxel!"
    res.render('index.ejs',{content});
});

app.post('/upload', upload.single('csvFile'), (req: Request, res: Response) => {
    if (!req.file) {
        const errMsg = 'No file uploaded.';
        return res.render('table.ejs',{errMsg});
    }

    const uploadedFilePath:string = req.file.path;
    const origName:string = req.file.originalname;
    const outputFileName:string = origName.split('.')[0];
    const tableData: any[] = [];
    fs.createReadStream(uploadedFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
            console.log(req.file);   
            console.log(uploadedFilePath);
            tableData.push(data);
        })
        .on('end', () => {
            
            const jsonFilePath = path.join(__dirname, `../outfile/',${outputFileName}.json`);
            fs.writeFileSync(jsonFilePath, JSON.stringify(tableData, null, 2));
            
            res.render('table.ejs', { tableData });
            fs.unlinkSync(uploadedFilePath);
        });

});

app.listen(PORT, () => {
    console.log(`Running at: ${PORT}`);
});
