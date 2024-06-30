import React from 'react'
import '../../css/Resume.css'
import Card from '../../components/common/Card'
// import { FaBadge } from 'react-icons/fa';
import { IoMdSchool } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
 
const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-experience">
        <div className="resume-heading">
          <SlBadge className="resume-icon" />
          <h1 className="education">My Experience</h1>
        </div>
        <Card
          year="Aug-2023"
          title="Web Developer Intern"
          description="TechnoHacks Edutech pvt ltd."
        />
        <Card
          year="Feb-2023 -- Jun-2023"
          title="MERN Stack Developer"
          description="Ardent Computech pvt ltd."
        />
        <Card
          year="Sep-2022 -- Feb-2021"
          title="Operations Executive Intern"
          description="Comvission India pvt ltd."
        />
        <Card
          year="___-___"
          title="____ ________"
          description="______ _________"
        />
      </div>
      <div className="resume-education">
        <div className="resume-heading">
          <IoMdSchool className="resume-icon" />
          <h1 className="education">My Education</h1>
        </div>
        <Card
          year="2021-present"
          title="Bachelors of Engineering"
          description="University Institute of Technology"
        />
        <Card
          year="2017-2020"
          title="Diploma"
          description="A P C Ray Polytechnic, Jadavpur"
        />
        <Card
          year="2015-2017"
          title="Higher Secondary"
          description="Chelyama B P High School"
        />
        <Card
          year="2009-2015"
          title="Secondary"
          description="Chelyama B P High School"
        />
      </div>
    </div>
  );
}

export default Resume
