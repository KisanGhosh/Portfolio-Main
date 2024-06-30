import React from 'react'

const SkillCard = ({icon, percentage, name}) => {
  return (
    <div className="skillCard">
        <div className="card-details">
            <img src={icon} alt="icon"/>
            <h2 className="percentage">{percentage}</h2>
        </div>
        <p className="name">{name}</p>
        
    </div>
  )
}

export default SkillCard
