import React from 'react'
import '../common/Common.css'

const Card = ({year, title, description}) => {
  return (
    <div className="card">
          <h3 className="year">{year}</h3>
          <h1 className="title">{title}</h1>
          <h4 className="description">{description}</h4>
    </div>
  )
}

export default Card 
 