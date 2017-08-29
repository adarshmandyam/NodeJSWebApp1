var fs = require('fs');

fs.readdir('.', function (err, files) {
    if (err) {
        console.log('Error finding file' + err);
    }
    else {
        files.forEach(function (fileName, fileIndex) {
            fs.readFile(fileName, function (err, buf) {
                if (err) {
                    console.log('error reading file: ' + err);
                }
                else {
                    console.log(buf.toString());
                }
            });
        });
    }
});