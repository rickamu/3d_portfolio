import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({name, index, image, source_code_link, description, tags}) => {
  return (
    <Tilt options={{
      reverse: true,
      max: 20,
      perspective: 500,
      scale: 1.05,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03, .98, .52, .99)"
    }} 
    className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn('up','spring',0.5 * index,0.75)}
      className="min-w-[300px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1.1,
          speed: 450
        }}
        className="bg-black-100 rounded-20px py-5 px-10 min-h-[280px] flex justify-evenly flex-col items-center"
        >
          <h3 className="text-white text-[20px] py-2">{name}</h3>
          <div className="relative w-full h-full">
            <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-2xl"/>
              <div onClick={() => window.open(source_code_link, "blank")}
              className="absolute top-[1px] right-[1px] z-10 bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer card-img_hover">
                <img 
                src={github} 
                alt="github" 
                className="w-1/2 h-1/2 object-contain"
                />
              </div>
          </div>
          <p className="text-secondary text-[14px] py-2">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag,index) => (
              <li key={`work-tag-${index}`} className={`${tag.color}`}>#{tag.name}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Tilt>
    
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       <p className={styles.heroSubText}>My Works</p>
       <h2 className={styles.heroHeadText}>Projects.</h2>
     </motion.div>

     <div className="w-full flex">
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. 
      </motion.p>
     </div>

     <div className='mt-20 flex flex-wrap gap-20 justify-center items-center gap-10'>
       {projects.map((project, index) => (          
         <ProjectCard key={`project-${index}`} index={index} {...project}/>
       ))}
     </div>
    </>
  )
}

export default SectionWrapper(Works, "")