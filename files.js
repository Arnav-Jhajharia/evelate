// Paste chatgpt text over here

const conversationText = `Person A: I recently came across a website that seemed suspicious. How can I identify and protect myself from fake sites?

Person B: That's a great question. Fake sites can be deceptive and pose various risks. One way to identify them is by checking the website's URL. Look for any misspellings, unusual domain extensions, or a lack of HTTPS encryption and lock symbol in the address bar, indicating a secure connection. Additionally, be cautious of sites that ask for sensitive information too soon or seem too good to be true. It's essential to stick to reputable websites, official links provided by trusted sources rather than following unknown links and using secure payment methods for online transactions.

Person A: That's helpful. I've been receiving a significant amount of spam email lately, and I'm worried about falling victim to phishing attempts or scams. How can we protect ourselves from these threats?

Person B: Spam emails can be quite tricky to navigate. To avoid falling for phishing attempts, scrutinize emails before taking any action. Never click on suspicious links or download attachments from unknown senders. Be cautious of unexpected emails asking for personal information or urgently requesting financial transactions. It's always a good practice to verify the sender's email address and double-check the legitimacy of the email by contacting the organization directly through official channels. Additionally, regularly update your email filters and use spam detection tools to minimize the risk of spam reaching your inbox. You can also hover over links without clicking to see if they lead to suspicious websites.

Person A: Excellent advice. Now, let's talk about malware. How can we safeguard our devices and networks from malware attacks?

Person B: Protecting your devices from malware is crucial for maintaining your online security. It is a multi-layered process. Firstly, be cautious while downloading files or installing software from untrusted sources. Stick to official app stores or reputable websites for downloads. Keep your operating system, software, and antivirus programs up to date, as updates often include security patches. Regularly scan your system for any signs of infection and consider using additional security measures like firewalls and intrusion detection systems to fortify your defenses. 

Person A: That makes sense. Choosing the right antivirus software is crucial. Can you provide any guidance on selecting the most effective one for our needs?

Person B: When selecting antivirus software, consider factors such as its detection and removal capabilities, real-time protection, system resource usage, and compatibility with your operating system. Look for software from reputable vendors with a proven track record in the cybersecurity industry. Read reviews, compare features, and check independent test results to gauge their effectiveness. Popular options include Norton, McAfee, Kaspersky, and Bitdefender. Remember to keep your antivirus software updated regularly to stay protected against the latest threats.

Person A: Thank you for the insights. It's clear that a multi-faceted approach is necessary to combat fake sites, spam email, and malware effectively. Prioritizing our online security is essential in today's digital landscape.`

const lines = conversationText.split('\n\n');
const conversationArray = [];

for (const line of lines) {
    // console.log(line)
  let firstColonIndex = line.indexOf(":");

// Extract the speaker and content parts
let speaker = line.slice(0, firstColonIndex).trim();
let content = line.slice(firstColonIndex + 1).trim();
  const speakerObj = {
    speaker: speaker=='Person B'?'You':'Child',
    content: content.trim(),
  };

  conversationArray.push(speakerObj);
}

console.log(conversationArray);
