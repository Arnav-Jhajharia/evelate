// Paste chatgpt text over here

const conversationText = `HTML and CSS: Start by learning the building blocks of the web - HTML and CSS. HTML is used for creating the structure of web pages, while CSS is used for styling and layout. Understand concepts like tags, attributes, selectors, and box model.

JavaScript: Next, dive into JavaScript, the programming language of the web. Learn about variables, data types, functions, control flow, and object-oriented programming (OOP) concepts. Practice manipulating the DOM (Document Object Model) to interact with web pages dynamically.

Responsive Web Design: Explore responsive web design techniques to create websites that adapt to different screen sizes and devices. Learn about media queries, flexible grids, and responsive images.

Version Control: Familiarize yourself with version control systems like Git. Learn how to create repositories, track changes, and collaborate with others using platforms like GitHub or Bitbucket.

Front-End Frameworks: Dive into popular front-end frameworks like React, Angular, or Vue.js. These frameworks simplify web development by providing reusable components, state management, and routing.

Back-End Development: Learn about server-side programming languages like Python, JavaScript (Node.js), or Ruby. Understand concepts like handling HTTP requests, working with databases, and creating RESTful APIs.

Databases: Gain knowledge of database systems such as MySQL, PostgreSQL, or MongoDB. Learn about data modeling, querying, and basic database administration.

Web Security: Understand common web vulnerabilities and best practices for securing web applications. Learn about concepts like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

APIs and Third-Party Services: Explore integrating with external APIs and third-party services. Understand how to authenticate, make API requests, and handle responses.

Testing and Debugging: Learn how to write automated tests for your web applications using frameworks like Jest or Mocha. Understand debugging techniques and tools to identify and fix issues in your code.

Performance Optimization: Dive into performance optimization techniques to ensure your web applications are fast and efficient. Learn about topics like caching, minimizing HTTP requests, and optimizing database queries.

Deployment and DevOps: Understand the process of deploying web applications to production environments. Learn about hosting providers, server configuration, continuous integration/continuous deployment (CI/CD), and containerization technologies like Docker.

Progressive Web Apps (PWAs): Explore building PWAs to create web applications that can work offline and offer a native app-like experience. Learn about service workers, caching strategies, and push notifications.

Accessibility: Gain knowledge of web accessibility standards and practices. Learn how to create websites that are inclusive and usable for all users, including those with disabilities.

Continual Learning: Stay updated with the latest web development trends, tools, and frameworks. Engage with online communities, follow industry blogs, and participate in relevant courses or conferences.`

const lines = conversationText.split('\n\n');
const conversationArray = [];

for (const line of lines) {
    // console.log(line)
  let firstColonIndex = line.indexOf(":");

// Extract the speaker and content parts
let speaker = line.slice(0, firstColonIndex).trim();
let content = line.slice(firstColonIndex + 1).trim();
  const speakerObj = {
    heading: speaker.trim(),
    content: content.trim(),
  };

  conversationArray.push(speakerObj);
}

console.log(conversationArray);
