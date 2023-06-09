const conversationText = 

`You: Hey there, my curious friend! Do you know how sometimes we need to do tasks on the computer, like solving puzzles or searching for something?

Child: Yeah, I do!

You: Awesome! So, Big O notation helps us understand how long these tasks might take as they get bigger or more complex. It's like knowing how much time we'll need to finish something.

Child: Oh, that's interesting! How does it work?

You: Well, let's say we have a game where we need to find a special item hidden in different boxes. The Big O notation helps us understand how the time it takes to find the item changes as the number of boxes increases.

Child: Is it like the best and worst outcomes?

You: Exactly! We have the best-case scenario, which is the fastest time we could find the item. And then there's the worst-case scenario, where it might take the longest time.

Child: Can you give me an example?

You: Sure! Let's say we have ten boxes, and the special item is in the first box itself. In the best case, we find it right away! So, the time it takes is very short, like a blink of an eye.

Child: That's quick!

You: Now, in the worst case, the special item is in the last box. We have to check all the boxes one by one until we reach the last one. So, it takes more time, especially if there are many boxes.

Child: Oh, I see! So, the worst case takes longer, but what about the other cases?

You: Great question! That's where theta notation and omega come in. Theta notation tells us the average time it takes in all scenarios, and omega notation tells us the minimum time it can take.

Child: That's cool! So, we know how long something will take on average and the best and worst possible times.

You: You got it! Big O notation helps us understand and compare how long different tasks will take as they get bigger or more complex. It's like having a superpower to predict time and make smart decisions!

Child: That's amazing! I want that superpower too!

You: With a bit of practice and curiosity, you'll become a master of Big O notation and unlock the secrets of efficient problem-solving!`;

const lines = conversationText.split('\n\n');
const conversationArray = [];

for (const line of lines) {
    // console.log(line)
  const [speaker, content] = line.split(': ');
  const speakerObj = {
    speaker: speaker.trim(),
    content: content.trim(),
  };

  conversationArray.push(speakerObj);
}

console.log(conversationArray);
