// Create array with values.

var emailList = ['            Matt Weber <matt@gmail.com>, Kira Weber <kira@gmail.com>, "Vera Savich, MA, LMFT" <vera@hotmail.com>, 831Shooter <831shooter@yahoo.com>, <test@att.net>, "(null) (null)" <no@gmail.com>      '];

function parseList(insaneList) {
  var saneList = '';

  // Iterate over the charcters of the list
    // Remove any quotations or paretheses
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
        // Join all array elements before last to make name
        // Join name and email with a tab
        // iterate over list and remove any null elements
    // Join all name/email arrays with /n
    // Write to a .tab file

  return saneList;
}
