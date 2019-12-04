const FILE = process.argv[2];
const word = process.argv[3];

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(FILE)
});

lineReader.on('line', function (line) {
    if(line.includes(word)) {
        console.log(line);
    }
});
