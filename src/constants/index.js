import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    aws,
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
    starbucks,
    tesla,
    shopify,
    carrent,
    lambda1,
    lambda2,
    jobit,
    tripguide,
    threejs,
    kubernetes,
    jenkins,
    ansible,
    cafe,
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
      title: "Cloud Engineer",
      icon: web,
    },
    {
      title: "DevOps",
      icon: mobile,
    },
    {
      title: "MERN Stack",
      icon: backend,
    },
    {
      title: "React Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Ansible",
      icon: ansible,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "BISAG-N",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - Jul 2022",
      points: [
        "Tested web-based product functionality and delivered iterations to customer",
        "We split the project into small tasks and set deadlines for each task. This allowed us to focus on one thing at a time and stay organized throughout the development process.",
        "We conducted several meetings with the client to understand their specific needs and requirements. We carefully documented all the functionalities and features they wanted in the application.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Digital For Humanity (DFH)",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2023 - Jun 2023",
      points: [
        "I actively participated in a team project where we were building a modern web application using React.js and other related technologies.",
        "During the internship, I gained valuable experience in debugging and troubleshooting React.js applications.",
        "As part of the internship, I worked on making web applications responsive across various devices and screen sizes. I utilized media queries and CSS flexbox/grid to ensure optimal user experiences on desktops, tablets, and mobile devices.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "AWS Lambda integrated with AWS API Gateway",
      description:
        "Using AWS Lambda , AWS API Gateway , Postman",
      tags: [
        {
          name: "Lambda",
          color: "blue-text-gradient",
        },
        {
          name: "API Gatway",
          color: "green-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
      ],
      image: lambda1,
      source_code_link: "https://medium.com/@ayushdabhi31/aws-lambda-integrated-with-aws-api-gateway-efc5f80d65c4",
    },
    {
      name: "Serverless Architecture on AWS",
      description:
        "Using AWS Lambda , SNS , S3 , DynamoDB , Amazon Cognito.",
      tags: [
        {
          name: "Lambda",
          color: "blue-text-gradient",
        },
        {
          name: "SNS",
          color: "green-text-gradient",
        },
        {
          name: "S3",
          color: "pink-text-gradient",
        },
        {
          name: "DynamoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Amazon Cognito",
          color: "pink-text-gradient",
        },
      ],
      image: lambda2,
      source_code_link: "https://medium.com/@ayushdabhi31/implementing-a-serverless-architecture-with-aws-lambda-2b6311ae6545",
    },
    {
      name: "Creating a Static Website for the Café",
      description:
      "leveraging the power and flexibility of Amazon S3, we were able to build a reliable, secure, and cost-efficient infrastructure for our website",
      
      tags: [
        {
          name: "s3",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: cafe,
      source_code_link: "https://medium.com/@ayushdabhi31/creating-a-static-website-for-the-café-ebaca1fee459",
    },
  ];
  
  export { services, technologies, experiences, projects }; 