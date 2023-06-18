const courses = {
    Programming: [
      { id: 1, title: 'Merkle Trees - Demo', category: 'Programming', description: `Explore the fascinating world of Merkle Trees and unlock the secrets of data integrity and tamper-proof verification. Discover how these binary trees enable efficient and secure validation in distributed systems and blockchain technology`, image: 'merkle.jpeg', link: 'merkle' },
      // { id: 2, title: 'Coming soon...', category: 'Programming', description: `Our programming courses are being crafted as we speak! Till then, see our demo course on merkle trees!`, image: 'comingsoon.webp', link: 'merkle' },
    ],
    "Bio TidBits": [
      { id: 4, title: 'Food Detectives',image:'fooddetectives.png', description: 'Join our adventure as we uncover the presence of starch in food through the magical color-changing power of iodine, and unveil the hidden adulterant Metanil Yellow lurking in dal. Become a food detective today!', link:'flb/fooddetectives' },
      { id: 5, title: 'Let There Be Light',description: 'Join us on an exciting journey to uncover the secret of how plants make food. Using just a potted plant, water, and iodine solution, we reveal the vital role of sunlight in the magical process called photosynthesis.', image: 'photosynthesis.png', link:'flb/photosynthesis' },
      { id: 6, title: 'Asexual Reproduction Exploration', description: 'Dive into a fascinating biology experiment as we explore binary fission in Amoeba and budding in yeast. Witness the wonders of asexual reproduction in just three words!', image: 'ngos.png', link: 'flb/amoeba'},
      { title: 'Respiration Revealed', description: 'Explore the fascinating world of respiration as we experimentally demonstrate the release of carbon dioxide. Engage in this hands-on activity to witness the scientific wonders of cellular respiration in just three words!', link: 'flb/respiration', image: 'respiration.png'},
      { title: 'Revealing Stomata Secrets', description: 'Join us on a leaf-peeling adventure to unravel the mysteries of stomata. Learn how to prepare a temporary mount of a leaf peel and observe the intricate structures using a microscope.', link: 'flb/stomata', image: 'stomata.png'},
      { title: 'Exploring Osmosis', description: 'Dive into the world of osmosis as we investigate the absorption of water by raisins. Witness the fascinating process of osmosis in action and understand its significance in biological systems. ', link: 'flb/osmosis', image: 'raisins.png'},
      { title: 'Photosynthesis II', description: `"Unleash the green magic! Dive into the whimsical world of photosynthesis and discover how plants turn sunshine into life energy. Embrace the botanical secrets and let nature's creativity bloom within you`, link: 'flb/photosynthesis2', image: 'photosynthesis2.jpeg'},
      { title: 'Organ Systems', description: 'Dive into the world or organ systems as we investigate what constitutes us. Witness the fascinating process of organ systems in action and understand its significance in biological systems. ', link: 'flb/organs', image: 'organ.webp'}
      // Add more economics courses...
    ],
    'Awareness and Health': [
      { title: 'Cognitive Behavioural Therapy', category: 'Programming', link: 'mentica/cbt', image: 'cbt.png', description: 'Learn how CBT is developed and delivered and can benefit all of in terms of thought structuring, emotional and cognitive regulation and behaviour improvement. '},
      { title: 'Comparing yourself to others', category: 'Programming', link: 'mentica/comparing', description: `Learn 6 highly effective strategies and ideologies you can implement when you face negative effects of self-comparison.`, image: 'comparing.jpg'},
      { title: 'Schizophrenia', category: 'Programming', link: 'mentica/schizophrenia', image: 'schizophrenia.png', description: 'Understand the how, why, and what of schizophrenia with an empathetic yet scientific approach. '},
      { title: 'Password Management', category: 'Programming', link: 'diglit/passwords', description: `Learn how to manage your passwords efficiently and securely`, image: 'passwords.webp'},
      { title: 'Strengthening Online Security', category: 'Programming', link: 'diglit/malware', image: 'schizophrenia.png', description: 'Enhance your online security with valuable tips to identify and protect yourself from various threats. Learn how to spot fake sites, avoid phishing attempts, and safeguard against malware.', image: 'malware.jpeg'}
    ],
    'Current Affairs': [
      { title: 'General overview at India (and the world)', link: 'currentaffairs/gh', description: " Explore the latest updates on international health assembly, hunger hotspots, India's insurance plan for diabetes, and Asian Development Bank's country partnership strategy."},
      { title: 'Financial updates in India',link: 'currentaffairs/finance', description: "Discover the highlights of India's first insurance plan for diabetics, Asian Development Bank's country partnership strategy, digital supply chain financing partnership, and UPI-based credit revolution."}, 
      { title: 'Recent economical updates', link: 'currentaffairs/economy', description: "Explore the latest partnerships driving India's infrastructure development and investment growth. Discover how REITs and Power Finance Corporation are collaborating on diverse projects"},
      { title: `An interesting case of Donald Trump`, link: 'currentaffairs/donaldtrump', description: 'Delve into the historic court appearance of former U.S. President Donald Trump, his plea of not guilty on federal charges, and the strong support he received from his followers outside the courthouse.'},
      { title: `Canadian Wildfires`, link: 'currentaffairs/canadianwildfires', description: 'Explore the aftermath of a Russian missile strike in Ukraine, the rising death toll, and allegations of foreign interference, shedding light on the ongoing conflict and its impact on the region.'},
      { title: `RCMP Investigates Foreign Interference`, link: 'currentaffairs/rcmp', description: `Uncover the RCMP's investigation into over 100 files of alleged foreign interference, including three involving high-ranking politicians. Learn about the calls for better information sharing and transparency.`,
        title: `Religious Ban Debate`, description: "ExamiEngage in the battle against a Quebec government ban on prayer rooms in public schools. Explore the arguments presented by civil liberties and Muslim groups, challenging the ban's implementation."  , link: "currentaffairs/religiousban"  
      }
    ]
    // Add more categories and courses as needed...
  };

export const cmap = {
  "bigo":"bigo",
  "merkle": "programming/merkle",
  "mentica":"mentica/index",
  "currentaffairs":"currentaffairs/index",
  "flb":"flb/index",
  "diglit":"diglit/index",
  "bio":"flb/samyukta"
}
export default courses;
  
export const other =  Object.entries(courses).flatMap(([category, items]) =>
  items.map(({ title, link }) => ({ title, category, link }))
);

