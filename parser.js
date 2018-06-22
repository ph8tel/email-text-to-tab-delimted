// Create array with values.

var emailList = 'Matt Weber <matt@gmail.com>, Kira Weber <kira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, "(null) (null)" <no@gmail.com>';

function parseList(insaneList) {
  insaneList = insaneList.split('"')
                         .join('')
                         .split(',')
                         .join('')
                         .split('>');

  for (var i = 0; i < insaneList.length; i++) {
    var person = insaneList[i].split('<');
    console.log(person[0] + '\t' + person[1]);
  }
}

// TO FIX
// Added spaces
// Mutating input








/*
I've Decided that building an assert function and teaching myself to make it work
for this scenario would take longer than I have time to accomplish the mission today
So I am tabling this to come back and learn it later


function assert(expected, actual, testName) {
  var testActual = JSON.stringify(actual);
  var testExp = JSON.stringify(expected);
  if (testActual !== testExp) {
    console.log('FAILED! ' + testName + ' Expected ' + testExp + ' but got ' + testActual)
  } else {
    console.log('PASSED! ' + testName);
  }
}
// Struggle.....how do you assert the output is the same when you are joining with /n and /t.....

// ?? MAybe???

assert('"Name"/t"Email"/nMatt Weber/tmatt@gmail.com/nKira Weber/tkira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, <test@att.net>, "(null) (null)" <no@gmail.com>'')
*/
