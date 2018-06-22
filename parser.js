// Add in email list to variable, and run using node, print to a .tab file.

// Example ' node parser.js > emails.tab '

var emailList = 'Matt Weber <matt@gmail.com>, Kira Weber <kira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, "(null) (null)" <no@gmail.com>';

function parseList(insaneList, needFirstLast) {
  saneList = insaneList.split('"')
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
    }
  }
}

parseList(emailList, true);
