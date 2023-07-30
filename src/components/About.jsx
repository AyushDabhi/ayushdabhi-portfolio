import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index , title , icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
     <motion.div
      variants={fadeIn("right", "spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
     >
      <div
       options={{
        max: 45,
        scale: 1,
        speed: 450
       }}
        className=" bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col "
        >
        <img src={icon} alt={title}
        className = "w-16 h-16 object-contain" />
        <h3 className='text-white text-[20px]
        font-bold text-center'>{title}</h3>

      </div>
     </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}
      >Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
Welcome to my website! I'm a versatile and passionate professional
with a diverse skill set in AWS, web development,
AWS Solution Architect, Docker, Kubernetes, Jenkins, Ansible,
Linux, React, HTML, CSS, JavaScript, Git, and DevOps.
With a strong foundation in cloud computing and AWS, I excel at architecting scalable 
and reliable solutions for a wide range of applications. <br /><br/>

My proficiency in web development allows me to create interactive
and user-friendly websites that cater to the unique needs of
clients and end-users.
I am well-versed in containerization technologies like Docker and orchestration
tools like Kubernetes, ensuring seamless deployment and management of applications.
<br /><br/>

Additionally, I have expertise in automation and configuration management 
using tools like Jenkins and Ansible, streamlining development processes 
and optimizing efficiency. My proficiency in programming languages like 
JavaScript, React, and Java allows me to craft cutting-edge solutions for 
modern web applications.With a strong command over version control using
Git, I ensure seamless collaboration and code management in team projects.
<br /><br/>

As a dedicated DevOps enthusiast, I am committed to integrating development
and operations, fostering a culture of continuous integration 
and continuous delivery (CI/CD).

<br /><br/>
Through this website, I aim to share my knowledge, insights, and experiences with the community
while providing valuable resources to help individuals and businesses thrive in the rapidly
evolving world of technology. Thank you for visiting, and I hope you find
the content here both informative and inspiring.



{/* I am a highly skilled professional
with expertise in DevOps, Cloud Architecture, 
Cloud Engineering, Frontend Development, 
and Full Stack MERN Development. As a Cloud Architect 
and Engineer, I design and deploy scalable and secure 
cloud solutions, leveraging AWS Certified Solutions 
Architect knowledge. Additionally, my proficiency 
in React.js, JavaScript, HTML, and CSS allows me to 
create intuitive user interfaces. With a strong focus 
on DevOps methodologies, I ensure efficient application 
deployment and management through Docker, Kubernetes, 
Jenkins, Ansible, and Git. My diverse skillset makes 
me a valuable asset to drive success as a versatile 
and adaptable team member, whether as a DevOps 
specialist, Cloud Architect, Cloud Engineer, Frontend Developer,
 or Full Stack MERN Developer. I am eager to contribute my expertise
to your organization's growth and innovation. */}

    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
     {services.map((service, index) => (
      <ServiceCard key={service.title} index=
      {index} {...service} />
     ))}
    </div>
  </>
  )
}

export default SectionWrapper(About, "about")