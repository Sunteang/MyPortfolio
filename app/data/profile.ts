import { i } from "framer-motion/client";

export const profile = {
  name: "Your Name",
  role: "Frontend Developer",
  tagline: "I build clean, modern, and responsive web applications.",
  experience: "2+",
  projects: "10+",
  clients: "2+",
  about:
    "I’m a passionate frontend developer with experience for building modern web apps using React, Next.js, and Tailwind CSS. I love turning designs into fast, functional, and beautiful experiences.",
  contactEmail: "sereysunteang@gmail.com",
  phoneNumber: "098 255 128",
  location: "Phnom Penh, Cambodia",

  images: {
    profile: "/profile/myprofile.PNG",
    image: "/profile/mypic.JPG",
    aboutMe: "/profile/aboutme.JPG",
    proPicture: "/profile/profile.png",
  },

  services: [
    {
      icon: "Code",
      title: "Web Development",
      desc: "Building modern web apps",
    },
    {
      icon: "Search",
      title: "SEO Optimization",
      desc: "Rank higher in search results",
    },
    {
      icon: "Shield",
      title: "Security Expert",
      desc: "Ensuring app protection",
    },
    {
      icon: "Smartphone",
      title: "App Design",
      desc: "Responsive mobile-ready layouts",
    },
  ],

  experiences: [
    {
      title: "Frontend Developer",
      company: "Wing Bank",
      period: "03/02/2025 - Present",
      description:
        "Developed and maintained frontend features for the Unified System using React, Vite, TypeScript, Tailwind CSS, and Next.js. Followed micro-frontend architecture principles to ensure scalability and maintainability.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Java Spring Boot",
      ],
    },
    {
      title: "Frontend Developer",
      company: "SabaiCode",
      period: "June 2024 - Jan 2025",
      description:
        "Lomnov is a modern, flexible, user-friendly, and secure platform for buying, renting, selling, and managing properties like houses, condos, and land. It provides accurate details on location, size, price, and status, while streamlining transactions between buyers and sellers.",
      skills: ["Figma", "React.js", "Next.js", "Node.js", "MongoDB", "AWS"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "The University of Cambodia",
      period: "2023 - Present",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "SabaiCode",
      period: "June 2024 - Jan 2025",
    },
  ],

  // Skills
  skills: {
    programmingLanguages: [
      { name: "HTML", level: 95, color: "bg-red-400" },
      { name: "CSS", level: 90, color: "bg-blue-400" },
      { name: "JavaScript", level: 88, color: "bg-yellow-400" },
      { name: "TypeScript", level: 85, color: "bg-sky-400" },
      { name: "Java Spring", level: 75, color: "bg-red-500" },
      { name: "Python", level: 50, color: "bg-green-400" },
    ],

    librariesFrameworks: [
      { name: "React.js", level: 90, color: "bg-cyan-400" },
      { name: "Next.js", level: 85, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
      { name: "shadcn/ui", level: 85, color: "bg-gray-500" },
      { name: "Flutter", level: 65, color: "bg-sky-500" },
      { name: "Node.js", level: 80, color: "bg-green-600" },
    ],

    tools: [
      { name: "Git", level: 85, color: "bg-orange-400" },
      { name: "VS Code", level: 90, color: "bg-blue-400" },
      { name: "Figma", level: 75, color: "bg-pink-400" },
      { name: "Postman", level: 70, color: "bg-orange-500" },
      { name: "AWS", level: 65, color: "bg-orange-600" },
      { name: "Docker", level: 70, color: "bg-blue-600" },
    ],
  },

  portfolio: [
    {
      id: 1,
      category: "Mobile Development",
      title: "E-Learning App",
      description:
        "The E-Learning app offers a wide variety of educational videos, making learning accessible to everyone. Users can explore topics and enhance their skills by watching engaging content at their convenience.",
      image: "/portfolio/elearning.png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 2,
      category: "Web Development",
      title: "Lomnov Real Estate",
      description:
        "Lomnov is a trusted real estate provider specializing in buying, selling, renting, and investing in properties. Our team is committed to offering exceptional service, with a focus on transparency, trust, and integrity.",
      image: "/portfolio/lomnov.png",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      id: 3,
      category: "Web Development",
      title: "Lomnov Dashboard",
      description:
        "Lomnov Dashboard is your one-stop solution for buying, selling, renting, or investing in real estate. It offers property listings, tailored insights, and tools to manage transactions effortlessly.",
      image: "/portfolio/lomnov-dashboard.png",
      technologies: [
        "React",
        "Next.js",
        "Chart.js",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      id: 4,
      category: "Mobile Development",
      title: "Wedding Service App",
      description:
        "The Wedding Service App was created to simplify the process of finding services (e.g., wedding bands, photography, bridal makeup, venues, dresses, florists, decorations). It connects service providers with potential customers efficiently.",
      image: "/portfolio/weddingapp.png",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 5,
      category: "Web Development",
      title: "Lowkey Style",
      description:
        "A platform offering a diverse collection of stylish and affordable clothing for men and women. It features a range of apparel from casual wear to formal attire, catering to different styles and preferences.",
      image: "/portfolio/lowkey.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 6,
      category: "Web Development",
      title: "YourHobby",
      description:
        "A platform offering a wide range of electronic devices, including smartphones, laptops, desktops, and headphones. It aims to provide customers with the latest gadgets at competitive prices.",
      image: "/portfolio/yourhobby.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 7,
      category: "Web Development",
      title: "YourStart",
      description:
        "A project focused on providing clients with market analysis and brand identity development services. It helps businesses gain insights into their markets and create a strong, memorable brand presence.",
      image: "/portfolio/yourstart.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 8,
      category: "Web Development",
      title: "POS System + Inventory Management",
      description:
        "A comprehensive Point of Sale (POS) system integrated with inventory management features. It streamlines sales processes, tracks inventory levels, and generates reports to help businesses manage their operations efficiently.",
      image: "/portfolio/pos-system.JPEG",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    },
    {
      id: 9,
      category: "Web Development",
      title: "Car Garage Management Website",
      description:
        "A website dedicated to a car garage business, showcasing services offered,features sales, rentals, repair services, customer testimonials, and contact information. It aims to attract potential customers and provide them with essential details about the garage.",
      image: "/portfolio/car-garage-web.JPEG",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    },
    {
      id: 10,
      category: "Web Development",
      title: "Car Garage - Admin Dashboard",
      description:
        "An admin dashboard for managing the car garage business, including features for tracking sales, rentals, repairs, customer information, and generating reports. It provides an efficient way for administrators to oversee daily operations.",
      image: "/portfolio/car-garage-dashboard.JPEG",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    },
  ],

  socials: {
    github: "https://github.com/Sunteang",
    linkedin: "https://www.linkedin.com/in/sunteangserey/",
    facebook: "https://www.facebook.com/sunt.teang",
    instagram: "https://www.instagram.com/serey_sunteang/",
    pinterest: "https://www.pinterest.com/teanggg_/",
  },
};
