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
  node,
  port1,
  port2,
  port3,
  port4,
  user
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
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Next JS",
  //   icon: next,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Bootstarp",
  //   icon: bootstrap,
  // },
  // {
  //   name: "Node JS",
  //   icon: node,
  // }, 
  // {
  //   name: "Django",
  //   icon: django,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
      "Your dedication and professionalism have greatly contributed.",
    name: "Amanuel Tadesse",
    designation: "President",
    company: "EthioHealth Alliance",
    image: user,
  },
  {
    testimonial:
      "Muse went above and beyond with the project i had him completed.",
    name: "Jeff Aviles",
    designation: "Client",
    company: "From UpWork",
    image: user,
  },
  {
    testimonial:
      "Muse went above and beyond with the project i had him completed.",
    name: "Jeff Aviles",
    designation: "Client",
    company: "From UpWork",
    image: user,
  },
];

const projects = [
  {
    name: "Medical Management System",
    description:
      "Web-based application that allows users to manage their medical records, appointments, and health-related services.",
    tags: [
      {
        name: "next.Js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
    ],
    image: port1,
    source_code_link: "https://github.com/Muse-feta/medical_app",
    live_url: "https://medical-app.ethiohealthalliance.org/",
  },
  {
    name: "Garage Management System",
    description:
      "Web based application that allows users to manage their vehicles, services, and maintenance records.",
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
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: port2,
    source_code_link: "https://github.com/Muse-feta/GarageAppProject",
    live_url: "https://abegarage.carmelmishel.com/",
  },
  {
    name: "Ethio Health Alliance Website",
    description:
      "Website for EthioHealth Alliance, a non-profit organization dedicated to providing health care services in Ethiopia.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "cpanel",
        color: "green-text-gradient",
      },
    ],
    image: port3,
    source_code_link: "https://github.com/Muse-feta/ethio-health-alliance/",
    live_url: "https://ethiohealthalliance.org/",
  },
  {
    name: "Solitare Game Website",
    description:
      "Website for Solitare Game, a popular card game that is played with a deck of 52 cards. It is a popular card game that is played with a deck of 52 cards.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: port4,
    source_code_link: "https://github.com/Muse-feta/Solitare-Clone",
    live_url: "https://muse-solitare-game.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
