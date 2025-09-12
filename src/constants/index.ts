
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp", 
    description: "300+ hours of work" ,
    view: "https://www.freecodecamp.org/certification/firdavs_yuldashev/responsive-web-design",
  },
  {
    title: "Javascript Algorithms & Data structures",
    issuer: "FreeCodeCamp", 
    description: "300+ hours of work" ,
    view: "https://www.freecodecamp.org/certification/firdavs_yuldashev/javascript-algorithms-and-data-structures-v8",  
  },
  {
    title: "Learn React",
    issuer: "Scrimba", 
    description: "15.1 hours | 355 lessons" ,
    view: "https://scrimba.com/certificate-cert24zAwPPowNTqrL5Y1D23v36cH9N2KWZpxcq9a",  

  },
  {
    title: "Advanced React",
    issuer: "Scrimba", 
    description: "13.2 hours | 172 lessons" ,
    view: "https://scrimba.com/certificate-cert2JbLs3qgAyjUcjD1qv5Fyhp4d3SKNhiU41xLqb",  
  
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projectsInfo = [
  {
    name: "QuickCart",
    category: "featured",
    description:
      "A demo shop with authentication, seller dashboard, and smooth shopping flow. Users can add items to cart, sign up, and track orders seamlessly.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "clerk", color: "green-text-gradient" },
    ],
    image: "/projects/quickcart.webp",
    source_code_link: "https://github.com/Fird4v5/QuickCart",
    live_code_link: "https://quickcart.firdavs.codes",
  },
  {
    name: "Refine Dashboard",
    category: "featured",
    description:
      "An admin dashboard with authentication, charts, company CRUD, and a Kanban board. Built with Refine for real-time collaboration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "graphql", color: "pink-text-gradient" },
      { name: "refine", color: "green-text-gradient" },
    ],
    image: "/projects/refineD.webp",
    source_code_link: "https://github.com/Fird4v5/Refine-Dashboard",
    live_code_link: "https://refine-dashboard.firdavs.codes",
  },
  {
    name: "Vanlife",
    category: "featured",
    description:
      "A van rental platform with host dashboard, income and reviews tracking, and van listings. Features Firebase auth, filters, and nested routing.",
    tags: [{ name: "react", color: "blue-text-gradient" }],
    image: "/projects/vanlife.webp",
    source_code_link: "https://github.com/Fird4v5/VanLife",
    live_code_link: "https://vanlife.firdavs.codes",
  },
  {
    name: "Meme Generator",
    category: "featured",
    description:
      "Create memes with custom text and drag positioning. Includes next-meme navigation and download option for quick sharing.",
    tags: [{ name: "react", color: "blue-text-gradient" }],
    image: "/projects/meme.webp",
    source_code_link: "https://github.com/Fird4v5/Meme-Generator",
    live_code_link: "https://meme-generator.firdavs.codes",
  },
  {
    name: "Assembly: EndGame",
    category: "featured",
    description:
      "A word-guessing game where each wrong attempt eliminates a programming language. Survive 8 tries to win with a confetti finale.",
    tags: [{ name: "react", color: "blue-text-gradient" }],
    image: "/projects/assembly.png",
    source_code_link: "https://github.com/Fird4v5/Assembly-EndGame",
    live_code_link: "https://assembly-endgame.firdavs.codes",
  },
  {
    name: "Tenzies",
    category: "featured",
    description:
      "A dice game where you freeze and roll until all match. Win with a confetti celebration once every die shows the same number.",
    tags: [{ name: "react", color: "blue-text-gradient" }],
    image: "/projects/tenzies.png",
    source_code_link: "https://github.com/Fird4v5/Tenzies-Game",
    live_code_link: "https://tenzies.firdavs.codes",
  },
  {
    name: "Pokémon Search",
    category: "javascript",
    description:
      "Search Pokémon by name or ID to see images, stats, and details. Clean UI with instant data fetching.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/pokemon.png",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Pokemon%20Search%20App",
    live_code_link: "https://pokemon-search.firdavs.codes",
  },
  {
    name: "To Do List",
    category: "javascript",
    description:
      "Create, toggle, and delete tasks with persistent local storage. Simple design for managing daily tasks.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/todolist.png",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/ToDoList",
    live_code_link: "https://to-do-list.firdavs.codes",
  },
  {
    name: "Roman Numeral Converter",
    category: "javascript",
    description:
      "Convert numbers into Roman numerals instantly with a polished, minimal design.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/roman.webp",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Roman%20Numeral%20Converter",
    live_code_link: "https://roman-numeral-converter.firdavs.codes",
  },
  {
    name: "Palindrome Checker",
    category: "javascript",
    description:
      "Check if text reads the same backward and forward with a clean, instant validator.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/palindrome.webp",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Palindrome%20Checker",
    live_code_link: "https://palindrome-checker.firdavs.codes",
  },
  {
    name: "Length Converter",
    category: "javascript",
    description:
      "Convert values between metric and imperial units with a simple, responsive UI.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/lengthConverter.png",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Length%20Converter",
    live_code_link: "https://length-converter.firdavs.codes",
  },
  {
    name: "Image Gallery",
    category: "javascript",
    description:
      "A responsive gallery with lightbox, navigation controls, and captions for a modern experience.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/imageGallery.webp",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Image%20Gallery",
    live_code_link: "https://image-gallery.firdavs.codes",
  },
  {
    name: "Cash Register",
    category: "javascript",
    description:
      "Simulates a cash register that calculates change with correct denominations over time.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/cashRegister.png",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Cash%20Register",
    live_code_link: "https://cash-register.firdavs.codes",
  },
  {
    name: "Calculator",
    category: "javascript",
    description:
      "A responsive calculator with standard functions and a clean, intuitive design.",
    tags: [{ name: "javascript", color: "green-text-gradient" }],
    image: "/projects/calculator.webp",
    source_code_link:
      "https://github.com/Fird4v5/JavaScript-Vanilla-Projects/tree/main/BASIC%20projects/Calculator",
    live_code_link: "https://calculator.firdavs.codes",
  },
  {
    name: "Personal Portfolio",
    category: "html_css",
    description:
      "A modern one-page portfolio with About Me, projects, and contact form for a professional presence.",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: "/projects/personalPortfolio.webp",
    source_code_link:
      "https://github.com/Fird4v5/HTML-CSS-Vanilla-Projects/tree/main/Responsive%20Web%20Design/Personal%20Portfolio%20Webpage",
    live_code_link: "https://personal-portfolio.firdavs.codes",
  },
  {
    name: "Amphora",
    category: "html_css",
    description:
      "A sleek one-page landing site for Amphora, a fictional wine brand. Includes highlights, call-to-action, and a video showcase.",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: "/projects/amphora.webp",
    source_code_link:
      "https://github.com/Fird4v5/HTML-CSS-Vanilla-Projects/tree/main/Responsive%20Web%20Design/Product%20Landing%20Page",
    live_code_link: "https://amphora.firdavs.codes",
  },
  {
    name: "Survey Form",
    category: "html_css",
    description:
      "A customer survey form with text fields, dropdowns, checkboxes, and radios. Designed for clarity and ease of use.",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: "/projects/surveyForm.webp",
    source_code_link:
      "https://github.com/Fird4v5/HTML-CSS-Vanilla-Projects/tree/main/Responsive%20Web%20Design/Survey%20Form",
    live_code_link: "https://survey-form.firdavs.codes",
  },
  {
    name: "Technical Documentation",
    category: "html_css",
    description:
      "A Python docs page with a sticky sidebar for navigation. Includes links to official docs, tutorials, and community forums.",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: "/projects/technicalD.webp",
    source_code_link:
      "https://github.com/Fird4v5/HTML-CSS-Vanilla-Projects/tree/main/Responsive%20Web%20Design/Technical%20Documentation%20Page",
    live_code_link: "https://technical-documentation.firdavs.codes",
  },
  {
    name: "Tribute",
    category: "html_css",
    description:
      "A tribute page for Arnold Schwarzenegger with a clean article-style layout and resource links for further reading.",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: "/projects/tribute.webp",
    source_code_link:
      "https://github.com/Fird4v5/HTML-CSS-Vanilla-Projects/tree/main/Responsive%20Web%20Design/Tribute%20Page",
    live_code_link: "https://tribute.firdavs.codes",
  },
];


export { services, projectsInfo };