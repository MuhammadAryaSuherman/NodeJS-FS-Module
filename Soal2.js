const fs = require('fs');

fs.readFile('homework.log', 'utf8', (err, logData) => {
    if (err) throw err;
    fs.writeFile('log.txt', logData, (err) => {
        if (err) throw err;
        console.log('Log telah ditulis ke dalam file log.txt');
    });
});
