
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  next,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  evan,
  enechawet,
  upwork,
  eth,
  python,
  mysql,
  django,
  bootstrap,
  node
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Bootstarp",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Upwork",
    icon: upwork, // Replace `upworkIcon` with the appropriate icon variable or path
    iconBg: "#fff",
    date: "March 2024 - Present",
    points: [
      "Provided full-stack development services to clients on Upwork, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Delivered high-quality web applications tailored to client requirements, ensuring satisfaction and timely delivery.",
      "Communicated effectively with clients to understand project scope and propose optimal solutions.",
      "Developed responsive, user-friendly interfaces and robust back-end systems.",
      "Collaborated with international clients and teams, gaining exposure to diverse industries and technologies.",
    ],
  },

  {
    title: "Web Game Developer",
    company_name: "Enechawet Games",
    icon: enechawet, // Replace `enechawetIcon` with the appropriate icon variable or path
    iconBg: "#fff",
    date: "October 2023 - March 2024",
    points: [
      "Developed interactive and engaging web-based games using modern JavaScript frameworks and libraries.",
      "Collaborated with the design team to create visually appealing and user-friendly game interfaces.",
      "Optimized game performance for seamless experiences across devices and browsers.",
      "Implemented game logic, animations, and sound effects to enhance gameplay.",
      "Worked in an agile team environment, participating in code reviews and iterative development cycles.",
    ],
  },

  {
    title: "Web Developer (Freelance | Remote)",
    company_name: "EthioHealth Alliance",
    icon: eth, // Replace `ethiohealthIcon` with the appropriate icon variable or path
    iconBg: "#fff",
    date: "February 2023 - April 2023",
    points: [
      "Developed and maintained the official website for EthioHealth Alliance, ensuring a responsive and user-friendly design.",
      "Worked on integrating third-party APIs to enhance website functionality and user experience.",
      "Regularly updated content and resolved technical issues to ensure seamless operation.",
      "Enhanced the website’s SEO to improve visibility and user engagement.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Evangadi Bootcamp",
    icon: evan, // Replace `evangadiIcon` with the appropriate icon variable or path
    iconBg: "#383E56",
    date: "February 2023 - October 2023",
    points: [
      "Completed a comprehensive full-stack development bootcamp at Evangadi, focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed practical projects, including dynamic web applications, to strengthen technical skills.",
      "Gained in-depth knowledge of front-end and back-end technologies and their integration.",
      "Collaborated with instructors and peers in a hands-on, project-based learning environment.",,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
