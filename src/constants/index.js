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
    meta,
    fridgy,
    threejs,
    printer,
    whistle,
    chromakopia,
    mario,
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "API Developer",
      icon: backend,
    },
    {
      title: "Software Testing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      title: " 3D Printing Technician",
      company_name: " Freelance 3D Print Seller ",
      icon: printer,
      iconBg: "#383E56",
      date: " August 2021 - Present",
      points: [
        " Proficient in operating, maintaining, and troubleshooting various 3D printers (FDM, SLA, SLS), ensuring optimal print quality, machine calibration, and resolving software glitches as needed.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial: "Huge whistle",
      image: whistle,
    },
    {
      testimonial: "Chromakopia",
      image: chromakopia,
    },
    {
      testimonial: "Mario",
      image: mario,
    }
  ];
  
  const projects = [
    {
      name: "Fridgy",
      description:
        "A web application that helps users keep track of their groceries and suggests recipes based on the ingredients they have.",
      tags: [
        {
          name: "Figma ",
          color: "blue-text-gradient",
        },
      ],
      image: fridgy,
      source_code_link: "https://devpost.com/software/523110?flow%5Bdata%5D%5Binvitation_key%5D=44ygSx6oyitYXMBJ3Am2&flow%5Bname%5D=accept_software_invitation&ref_content=new_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=invitation_to_join_software_team&utm_medium=email&utm_source=transactional",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };