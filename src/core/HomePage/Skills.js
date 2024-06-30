import React from 'react'
import SkillCard from '../../components/common/SkillCard'
import html from '../../assets/Images/html.svg'
import css from '../../assets/Images/css.svg'
import javascript from '../../assets/Images/javascript.svg'
import react from '../../assets/Images/react.svg'
import node from '../../assets/Images/node.svg'
import figma from '../../assets/Images/figma.svg'
import '../../css/Skills.css'
 
const Skills = () => {
  return (
      <div className="skills" id="skills">
          <h1>My SKills</h1>
          <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>

        <div className="card-section">
            <SkillCard 
                icon={ html}
                percentage={"90%"}
                name={"HTML"}
            />
            <SkillCard 
                icon={css}
                percentage={"90%"}
                name={"CSS"}
            />
            <SkillCard 
                icon={ javascript}
                percentage={"90%"}
                name={"JavaScript"}
            />
            <SkillCard 
                icon={ react}
                percentage={"90%"}
                name={"React js"}
            />
            <SkillCard 
                icon={ node}
                percentage={"90%"}
                name={"Node js"}
            />
            <SkillCard 
                icon={ figma}
                percentage={"90%"}
                name={"Figma"}
            />
        </div>          
        
          
    </div>
  )
}

export default Skills
