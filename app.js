const app = require('express')();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
    console.log(__dirname);
});

app.listen(PORT, () => {
    console.log("Running at " + PORT);
});
