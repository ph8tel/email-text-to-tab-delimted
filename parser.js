// Create array with values.

var emailList = 'Matt Weber <matt@gmail.com>, Kira Weber <kira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, <test@att.net>, "(null) (null)" <no@gmail.com>';

function parseList(insaneList) {
  emailList.split('"').join('');
  // Split by Commas
  // Prepend "Name" /t "Email"
  // Iterate over all new arrays
    // Recursivly
      // Split each by spaces
        // If length of split array is 1
          // Check if it contains an @ sign
            // If so
              //make its name the characters before the @ sign
            // If not
              // Set the array to null
        // Join all array elements before last to make name with a space
        // iterate over list and remove any null elements
        // Console log the first eleement + tab + email + new line
}









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
