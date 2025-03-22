import React from "react";
import { dev_skills, networking_skills } from "../assets/skills";
const Skills = () => {
  return (
    <>
      <section className="skills-container" id="skills">
        <h1>Dev Skills Attained</h1>
        <div className="skills">
          {dev_skills.map((Skill, index) => (
            <div key={index} className="skill-item">
              <h1>{Skill.skill_name}</h1>
              <p>{Skill.skill_description}</p>
              <img src={Skill.skill_image} alt={Skill.skill_name} />
            </div>
          ))}
        </div>
      </section>

      <section className="skills-container">
        <h1>Networking Skills Attained</h1>
        <div className="skills">
          {networking_skills.map((skill_item, index) => (
            <div key={index} className="skill-item">
              <h1>{skill_item.skill_name}</h1>
              <img src={skill_item.skill_image} alt={skill_item.skill_name} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
