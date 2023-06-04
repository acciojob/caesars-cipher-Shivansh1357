// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   // empty string to store the decoded result
  let decodedString = "";

  // Iterate over each character in the encoded string
  for (let i = 0; i < encodedString.length; i++) {
    // Get the ASCII code of the current character
    const charCode = encodedString.charCodeAt(i);

    // Check if the character is uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 transformation by shifting the character code by 13 places
      let decodedCharCode = charCode - 13;

      // If the shifted character code goes below the range of uppercase letters (65-90),
      // wrap it around to the end of the range
      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }

      // Convert the decoded character code back to a character and append it to the decoded string
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      // If the character is not an uppercase letter, simply append it to the decoded string
      decodedString += encodedString.charAt(i);
    }
  }

  // Return the decoded string
  return decodedString;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
