const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;
const path = require('path'); 

app.use(express.static('public'));

app.get('/run-python-script', (req, res) => {
    const pythonScriptPath = path.join(__dirname, '../server/public/script.py'); // Construct the path to script.py
    
    const pythonProcess = spawn('python', [pythonScriptPath]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
        res.send(`${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`${data}`);
        res.status(500).send(`${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
