
const messages = [

    {
        speaker: "Narrator",
        content: "Aren't you the most inquisitive 5-year-old out there? Mr. ByteSprout told me you want to learn about merkle trees, oh where's that guy gone to-",
        color: 'white'
    },
      {
      speaker: "You",
      content: "I'm here! Hey kiddo! Have you ever heard of something called Merkle Trees?",
      color: "blue",
      age:5
      },
  {
  speaker: "Child",
  content: "No, what's that?",
  color: "green"
  },
  {
  speaker: "You",
  content: "Well, imagine you have a big tree with lots of branches and leaves. Each leaf has a secret message written on it. But instead of reading all the messages, you want to make sure they are all genuine without reading each one. That's where Merkle Trees come in!",
  color: "blue"
  },
  {
  speaker: "Child",
  content: "How does it work?",
  color: "green"
  },
  {
  speaker: "You",
  content: "It's like magic! The tree takes all the secret messages and combines them in a special way. It creates a secret code called a hash for each message. Think of it like a secret password for the message. These codes are like puzzle pieces that fit together to make a big puzzle.",
  color: "blue"
  },
  {
  speaker: "Child",
  content: "Oh, like a jigsaw puzzle?",
  color: "green"
  },
  {
  speaker: "You",
  content: "Exactly! When you want to check if a message is genuine, you just look at the secret code. If the puzzle piece fits perfectly, you know the message is real! It's like solving a puzzle without looking at all the pieces. Isn't that cool?",
  color: "blue"
  },
  {
        speaker: "Narrator",
        content: "So we've got the basics out of the way! Seems like we need someone else for this next section.. let me get Mr. ByteBuddy to explain further",
        color: 'white'
    },
    { speaker: "You", content: "Oh, I see! So you already know about Merkle Trees from our Mr. ByteSprout. That's great! In that case, let's go a bit deeper into how they work. Remember how we talked about the tree having secret messages on its leaves?", age:10},
  { speaker: "Child", content: "Yes, I remember!" },
  { speaker: "You", content: "Awesome! Now, imagine that the tree has a lot of branches, and each branch has many leaves. We take all the secret messages on the leaves and put them together in pairs. Then we combine each pair by making a special secret code called a hash. This hash is like a secret puzzle piece for each pair of secrets." },
  { speaker: "Child", content: "Oh, so it's like solving puzzles with secret codes!" },
  { speaker: "You", content: "Exactly! We keep combining the pairs of secrets and creating hashes until we have just one hash left at the very top of the tree. This final hash is called the Merkle Root." },
  { speaker: "Child", content: "So, the Merkle Root is like the ultimate secret code for all the secrets in the tree?" },
  { speaker: "You", content: "Yes, you got it! The Merkle Root acts as a special code that represents all the secrets in the tree. If anyone tries to change even one secret, the Merkle Root will look completely different. It helps us know if anything has been tampered with or changed." },
  { speaker: "Child", content: "That's really cool! So, by checking the Merkle Root, we can make sure all the secrets are safe?" },
  { speaker: "You", content: "Absolutely! Checking the Merkle Root is like checking the ultimate secret code for the whole tree. If it matches the code we got before, we can be confident that all the secrets are still the same and nobody has changed anything." },
  { speaker: "Child", content: "Understood! Great learning from you.. so are we done?" },
  {
        speaker: "Narrator",
        content: "Ho ho ho! we're just getting started. Mr. ByteMaster loves this video. Click Play!",
        color: 'white',
        age: 17
    },
  
  ];
  
  const messages2 = [
   {
      speaker: "Narrator",
      content: "Still a bit shaky? How about we take a ride to the JS playground? Click here!"
   }
  ];
  
  
  const allMessages = [messages, messages2]


  export default allMessages;