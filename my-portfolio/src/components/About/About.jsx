import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className="about-section">
      <div className="discription">
        <h1>Hi I m Moraco-co</h1>
        <h3>MERN Stack Devloper</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto repudiandae 
          beatae voluptas ut eligendi exercitationem reiciendis cumque ratione, 
          doloribus ab tenetur, assumenda repellat sunt magni delectus suscipit. 
          Voluptas, consequatur! Expedita corrupti voluptatum atque libero.
        </p>

       
        <div className="buttons">
          <button className="btn primary-btn">Hire Me</button>
          <button className="btn secondary-btn">View Projects</button>
        </div>
      </div>

      <div className="profile-img">
        <div className="img-box">
          <img 
            src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/13218199/102_Khabib_Nurmagomedov.jpg" 
            alt="wait" 
          />
        </div>
      </div>
    </div>
  )
}
