// Add in email list to variable, and run using node, print to a .tab file.

// Example ' node parser.js > emails.tab '

var emailList = 'Matt Weber <matt@gmail.com>, Kira Weber <kira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, "(null) (null)" <no@gmail.com>';

function parseList(insaneList) {
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
    console.log(person[0] + '\t' + person[1]);
  }
}
