// Add in email list to variable, and run using node, print to a .tab file.

// Example ' node parser.js > emails.tab '

const fs = require('fs')


fs.readFile('./emails.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error.message)
    }

    saneList = data.split('"')
        .join('')
        .split(',')
        .join('')
        .split('>');

    for (var i = 0; i < saneList.length; i++) {
        var person = saneList[i].split('<');
        if (person[0][0] === ' ') {
            person[0] = person[0].substring(1);
        }
        console.log(person[0] + '\t' + person[1]);
        //If fs can read a file, can it write one too?
        //https://nodejs.org/api/fs.html
    }
})