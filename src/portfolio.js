/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Dhruvik",
  logo_name: "< dhruvik />",
  nickname: "dhruvik1999 / picleric",
  full_name: "Dhruvik Shah",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:dhruvikpatel99@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ShahDhruvik",
  linkedin: "https://www.linkedin.com/in/shahdhruvik/",
  gmail: "devep1210@gmail.com",
  gitlab: " ",
  facebook: " ",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and NextJs",
        "⚡ Consistently  apply knowledge of the latest libraries and frameworks",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#FFFFFF",
          },
        },

        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Daisy UI",
          fontAwesomeClassname: "simple-icons:daisyui",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#4479A1",
            padding: 3,
            borderRadius: 10,
          },
        },
        {
          skillName: "Formik",
          fontAwesomeClassname: "simple-icons:formik",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "React Hook Form",
          fontAwesomeClassname: "simple-icons:reacthookform",
          style: {
            color: "#EC5990",
          },
        },

        {
          skillName: "PostgreSql",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Strapi",
          fontAwesomeClassname: "simple-icons:strapi",
          style: {
            color: "#4945FF",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:mui",
          style: {
            color: "#FFFFFF",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#FFFFFF",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced AWS Developer Associate and Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Amazon Route 53",
          fontAwesomeClassname: "simple-icons:amazonroute53",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Amazon EC2",
          fontAwesomeClassname: "simple-icons:amazonec2",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Hostinger",
          fontAwesomeClassname: "simple-icons:hostinger",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Certifications by deeplearning.ai and Stanford Online",
    //     "⚡ Experience with 10+ Projects",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Western Australia",
      subtitle: "Masters in information technology",
      logo_path: "uwa.png",
      alt_name: "UWA",
      duration: "2024 - current",
      descriptions: [
        "⚡ Studying Cyber Security & Deep Learning",
        "⚡ Learning Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Other units to learn are Agile Web Development, Internet of Things.",
      ],
      website_link: "https://www.uwa.edu.au/",
    },
    {
      title: "Vidush Somany Institute of Technology & Research",
      subtitle: "Bachelor in Computer Science Engineering",
      logo_path: "ksv.png",
      alt_name: "KSV",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://vsitr.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "AWS Certified Cloud Practioner",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internships. I've done many projects on my own and I've worked as an IT professional for more than 1.5 years.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full-stack Developer",
          company: "Navintaa",
          company_url: "",
          logo_path: "",
          duration: "Aug 2023 - July 2024",
          location: "Ahmedabad",
          description:
            "Worked as an full stack developer and  developed a comprehensive system that encompasses various aspects of medical services.",
          color: "#2962FF",
        },
        {
          title: "Full-stack Developer",
          company: "Netpair Infotech",
          company_url: "https://netpairinfotech.com/",
          logo_path: "netpair.png",
          duration: "Apr 2023 - Aug 2023",
          location: "Ahmedabad",
          description:
            "Worked as an full stack developer and  developed many websites.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Internship ",
          company: "The Special Character",
          company_url: "https://thespecialcharacter.com/",
          logo_path: "TSC.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Ahmedabad",
          description:
            "I worked on the Buisness Card project which helps users track and explore their communications.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create robust web applications . Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruvik2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@dhruvikpatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "New touch",
      url: "/",
      description: "An skin care application.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "The special character",
      url: "/",
      description: "An application for course training center",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },

        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "devicon-tailwindcss",
        },
      ],
    },
    {
      name: "Traina Health Admin Portal",
      url: "https://admin-dev.oopchar.com/auth/login",
      description:
        "An admin portal to manage all the other portals connected with.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "devicon-react",
        },

        {
          name: "Vite",
          iconifyClass: "devicon-vitejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "devicon-postgresql",
        },
        {
          name: "Mongodb",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Socket.io",
          iconifyClass: "devicon-socketio",
        },
        {
          name: "Sequelize",
          iconifyClass: "devicon-sequelize",
        },
      ],
    },
    {
      name: "Traina Health Clinic Portal",
      url: "https://clinic-dev.oopchar.com/auth/log-in",
      description:
        "An portal to manage the clinic that are joined with the organization.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "devicon-react",
        },

        {
          name: "Vite",
          iconifyClass: "devicon-vitejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "devicon-postgresql",
        },
        {
          name: "Mongodb",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Socket.io",
          iconifyClass: "devicon-socketio",
        },
        {
          name: "Sequelize",
          iconifyClass: "devicon-sequelize",
        },
      ],
    },
    {
      name: "Traina Health Patient Portal",
      url: "https://patient-dev.oopchar.com/",
      description:
        "An portal to manage the patient that are joined with the clinic and an organization.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "devicon-react",
        },
        {
          name: "Vite",
          iconifyClass: "devicon-vitejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "devicon-postgresql",
        },
        {
          name: "Mongodb",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Socket.io",
          iconifyClass: "devicon-socketio",
        },
        {
          name: "Sequelize",
          iconifyClass: "devicon-sequelize",
        },
      ],
    },
    {
      name: "Traina Health Provider Portal",
      url: "https://provider-dev.oopchar.com/",
      description:
        "An portal to manage the provider that are joined with the specific clinic and their own individual practice.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "devicon-react",
        },
        {
          name: "Vite",
          iconifyClass: "devicon-vitejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "devicon-postgresql",
        },
        {
          name: "Mongodb",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Socket.io",
          iconifyClass: "devicon-socketio",
        },
        {
          name: "Sequelize",
          iconifyClass: "devicon-sequelize",
        },
      ],
    },
    {
      name: "Traina Health Oopchar Portal",
      url: "https://dev.oopchar.com/",
      description:
        "An portal to manage the provider that are joined with the specific clinic and their own individual practice.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "devicon-react",
        },
        {
          name: "Vite",
          iconifyClass: "devicon-vitejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Postgresql",
          iconifyClass: "devicon-postgresql",
        },
        {
          name: "Mongodb",
          iconifyClass: "devicon-mongodb",
        },
        {
          name: "Socket.io",
          iconifyClass: "devicon-socketio",
        },
        {
          name: "Sequelize",
          iconifyClass: "devicon-sequelize",
        },
      ],
    },
    {
      name: "Traina Health Forms",
      url: "https://dev.oopchar.com/",
      description:
        "An portal to manage the patient response over any situations. Also helps in taking the medical responses of the patient.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Traina Health Forms",
      url: "https://forms-dev.triainahealth.com/",
      description:
        "An portal to manage the patient response over any situations. Also helps in taking the medical responses of the patient.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Traina Health Reviews",
      url: "https://reviews-dev.triainahealth.com/",
      description:
        "An portal to manage the patient reviews on the services provided to them by the provider.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Dropikme",
      url: "https://dropikme.com/",
      description:
        "An portal that provides the management of the monthly or yearly subscription of an transportation provider.",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "DMMS System AIA Engineering",
      url: "/",
      description:
        "A system for coal mining company that manages the staff and all the commodities that are given or managed by the staff.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
