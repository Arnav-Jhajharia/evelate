const bigo = [
    {
        speaker: 'Narrator',
        content: `You've come here to learn the most important concept in computer science, what you'll learn today will never leave you! Let's move forward with our topic. Mr. ByteSprout, I hand the mic over to you!`
    },
    {
      speaker: 'You',
      content: 'Hey kiddo! Have you ever heard of something called Big O Notation?'
    },
    { speaker: 'Child', content: "No, what's that?" },
    {
      speaker: 'You',
      content: 'Well, imagine you have a bunch of tasks to do, like solving puzzles, sorting toys, or counting stars. Each task takes a certain amount of time to complete, right?'
    },
    { speaker: 'Child', content: 'Yeah, I know that!' },
    {
      speaker: 'You',
      content: 'Great! Now, Big O Notation helps us understand how the time it takes to complete a task grows as the number of items or the complexity of the task increases.'
    },
    { speaker: 'Child', content: 'Huh? What do you mean?' },
    {
      speaker: 'You',
      content: "Let me explain with a simple example. Imagine you have a box of toys, and you want to find a specific toy in it. If there are only a few toys, it won't take much time to find it, right?"
    },
    { speaker: 'Child', content: 'Yeah, that makes sense.' },
    {
      speaker: 'You',
      content: 'Now, what if the box has hundreds or even thousands of toys? It might take more time to find the toy you want because you have to look through all of them.'
    },
    {
      speaker: 'Child',
      content: 'Oh, I see. So, the more toys there are, the longer it takes to find a specific one.'
    },
    {
      speaker: 'You',
      content: 'Exactly! In Big O Notation, we use different symbols like O(1), O(n), or O(n^2) to describe how the time or complexity of a task grows with the input size.'
    },
    {
      speaker: 'Child',
      content: 'That sounds confusing. Can you give me some examples?'
    },
    {
      speaker: 'You',
      content: "Sure! Let's say you have a list of names, and you want to check if a specific name is in the list. If the list is sorted, you can use a special algorithm called binary search, which is really fast. That would be O(log n), where n is the number of names in the list."
    },
    { speaker: 'Child', content: 'O(log n? What does that mean?' },
    {
      speaker: 'You',
      content: "Think of it like a guessing game. With each guess, you can eliminate half of the remaining options. So, even if the list gets bigger, the number of guesses grows slowly. It's like magic!"
    },
    {
      speaker: 'Child',
      content: "That's cool! Are there other examples?"
    },
    {
      speaker: 'You',
      content: "Absolutely! Let's say you have a task where you need to compare each item in a list to every other item. This would be O(n^2) because for every item, you have to compare it to all the others. The time grows exponentially with the number of items."
    },
    {
      speaker: 'Child',
      content: 'Wow, that sounds like it would take a long time for big lists!'
    },
    {
      speaker: 'You',
      content: "Indeed! That's why understanding Big O Notation helps us choose the most efficient algorithms for different tasks and save time in our programs."
    },
    {
      speaker: 'Child',
      content: "I get it now! It's like finding the fastest way to solve a puzzle or complete a task. That's really useful!"
    },
    {
      speaker: 'You',
      content: "Exactly! It's like being a super-efficient problem solver. Big O Notation helps us analyze the performance of algorithms and make informed decisions. Pretty cool, huh?"
    },
    {
      speaker: 'Child',
      content: 'Super cool! Thanks for explaining it to me in such a fun way!'
    },
    {
      speaker: 'You',
      content: "You're welcome, kiddo! It was my pleasure. If you have any more questions, feel free to ask."
    },
    {
        speaker: "Narrator",
        content: "Now Mr. ByteBuddy will explain it to you in more depth"
    },
    
        {
          speaker: 'You',
          content: 'Hey there, my curious friend! Do you know how sometimes we need to do tasks on the computer, like solving puzzles or searching for something?'
        },
        { speaker: 'Child', content: 'Yeah, I do!' },
        {
          speaker: 'You',
          content: "Awesome! So, Big O notation helps us understand how long these tasks might take as they get bigger or more complex. It's like knowing how much time we'll need to finish something."
        },
        {
          speaker: 'Child',
          content: "Oh, that's interesting! How does it work?"
        },
        {
          speaker: 'You',
          content: "Well, let's say we have a game where we need to find a special item hidden in different boxes. The Big O notation helps us understand how the time it takes to find the item changes as the number of boxes increases."
        },
        {
          speaker: 'Child',
          content: 'Is it like the best and worst outcomes?'
        },
        {
          speaker: 'You',
          content: "Exactly! We have the best-case scenario, which is the fastest time we could find the item. And then there's the worst-case scenario, where it might take the longest time."
        },
        { speaker: 'Child', content: 'Can you give me an example?' },
        {
          speaker: 'You',
          content: "Sure! Let's say we have ten boxes, and the special item is in the first box itself. In the best case, we find it right away! So, the time it takes is very short, like a blink of an eye."
        },
        { speaker: 'Child', content: "That's quick!" },
        {
          speaker: 'You',
          content: 'Now, in the worst case, the special item is in the last box. We have to check all the boxes one by one until we reach the last one. So, it takes more time, especially if there are many boxes.'
        },
        {
          speaker: 'Child',
          content: 'Oh, I see! So, the worst case takes longer, but what about the other cases?'
        },
        {
          speaker: 'You',
          content: "Great question! That's where theta notation and omega come in. Theta notation tells us the average time it takes in all scenarios, and omega notation tells us the minimum time it can take."
        },
        {
          speaker: 'Child',
          content: "That's cool! So, we know how long something will take on average and the best and worst possible times."
        },
        {
          speaker: 'You',
          content: "You got it! Big O notation helps us understand and compare how long different tasks will take as they get bigger or more complex. It's like having a superpower to predict time and make smart decisions!"
        },
        {
          speaker: 'Child',
          content: "That's amazing! I want that superpower too!"
        },
        {
          speaker: 'You',
          content: "With a bit of practice and curiosity, you'll become a master of Big O notation and unlock the secrets of efficient problem-solving!"
        }
      ,
      {
        speaker: 'Narrator',
        content: "Now, Let's watch a video for further explanation or you can jump straight to the playground"
      }
  ]

  export default bigo;