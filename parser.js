
const fs = require('fs')

function parseList(needFirstLast) {
    fs.readFile('./emails.txt', 'utf8', (error, data) => {
      if (error) {
          console.error(error.message)
      }

    var saneList = data.split('"')
                         .join('')
                         .split(',')
                         .join('')
                         .split('>');

    for (var i = 0; i < saneList.length; i++) {
      var person = saneList[i].split('<');

      if (person[0][0] === ' ') {
        person[0] = person[0].substring(1);
      }

      if (person[0][person[0].length - 1] === ' ') {
        person[0] = person[0].substring(0, person[0].length - 1);
      }

      if (needFirstLast) {
        person[0] = person[0].split(' ');
        person.unshift(person[0].shift());
        console.log(person[0] + '\t' + person[1] + '\t' + person[2]);
      } else {
        console.log(person[0] + '\t' + person[1]);
        //If fs can read a file, can it write one too?
        //https://nodejs.org/api/fs.html
      }
    }
    });
}

  parseList(true);