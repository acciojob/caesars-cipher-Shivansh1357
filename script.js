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
  let decodedString = [];
	var arWords=encodedStr.split(" ");
  // Iterate over each character in the encoded string
  for (let i = 0; i < arWords.length; i++) {
    // Get the ASCII code of the current character
    var newStr="";
	  var strWord=arWords[i];
	  for(var j=0;j<strWord.length;j++){
		  newStr+=lookup[strWord.charAt(j)];
	  }
	  decodedString.push(newStr);
  }

  // Return the decoded string
  return decodedString.join(" ");
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
