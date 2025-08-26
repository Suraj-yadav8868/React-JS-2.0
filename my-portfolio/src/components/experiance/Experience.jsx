import React from 'react'
import "./Experience.css"

export default function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Full Stack Developer",
      company: "Tech Solutions Pvt Ltd",
      description: "Building scalable web apps using MERN stack and deploying them on cloud platforms like AWS and Vercel."
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Creative Web Studio",
      description: "Developed responsive UI components with React and integrated REST APIs for dynamic content."
    },
    {
      year: "2020 - 2021",
      role: "Intern - Web Developer",
      company: "Startup Hub",
      description: "Worked on small projects, improved coding skills, and gained hands-on experience in React and Node.js."
    }
  ]

  return (
    <div className="experience-section">
      <h1 className="section-title">Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <span className="year">{exp.year}</span>
            <h3 className="role">{exp.role}</h3>
            <h4 className="company">{exp.company}</h4>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
