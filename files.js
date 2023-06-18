// Paste chatgpt text over here

const conversationText = `Me: Ever wondered how humans exist and are able to perform tasks? The human body is made up of many different tissues called organs that work together to keep us alive and healthy. Would you like to know more about it?
Child: I would love to learn about this. But what roles do the organs play? 
Me:  Organs play a major role in the working of the body and are made up of types of similar cells. Cells are what makes a human body. Basically the human body is a perfectly formed machine and the organs are different parts that make up the machine. In our body, substances like blood and oxygen act as the fuel to keep our body going. 
Child: Ah. So how do these organs work?
Me: We humans have various types of organ systems that perform the required functions so that we can live. 
Child: Can you give an example?
Me: Sure. To make you understand better let me tell you about few of the systems. The digestive system includes our stomach, liver, and intestines, and it helps us break down and absorb food. The nervous system includes the brain, spinal cord, and nerves, and it helps us sense things and control your body's movements. The excretory system includes kidneys, bladder, and urethra, and it helps us get rid of waste products. All of these systems work together to keep our body healthy and functioning properly
Child: Oh. Now I have a better understanding of how different systems work in our body.`

const lines = conversationText.split('\n');
const conversationArray = [];

for (const line of lines) {
    // console.log(line)
  let firstColonIndex = line.indexOf(":");

// Extract the speaker and content parts
let speaker = line.slice(0, firstColonIndex).trim();
let content = line.slice(firstColonIndex + 1).trim();
  const speakerObj = {
    speaker: speaker=='Me'?'You':'Child',
    content: content.trim(),
  };

  conversationArray.push(speakerObj);
}

console.log(conversationArray);
