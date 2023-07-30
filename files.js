// Paste chatgpt text over here

const fs = require('fs');

fs.readFile('messages.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // 'data' variable contains the text read from the file
  const lines = data.split('\n\n\n');
const conversationArray = [];
  let l = true;
for (const line of lines) {
    // console.log(line)

// Extract the speaker and content parts

  const speakerObj = {
    speaker: l==true?'You':'Child',
    content: line.trim(),
  };
  l = !l;

  conversationArray.push(speakerObj);
}

console.log(conversationArray);
});


