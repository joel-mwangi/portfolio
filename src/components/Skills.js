import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const SkillsHeader = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SkillCard = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5em;
  color: #555;
`;

const ProgressBar = styled.div`
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  height: 10px;
  margin: 10px 0;
`;

const Progress = styled.div`
  background: #4caf50;
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 0.5s ease-in-out;
`;

const Skills= () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Django", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "Python", level: 88 },
    { name: "SQL", level: 75 },
  ];

  return (
    <SkillsContainer>
      <SkillsHeader>My Skills</SkillsHeader>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillTitle>{skill.name}</SkillTitle>
            <ProgressBar>
              <Progress width={skill.level} />
            </ProgressBar>
            <p>{skill.level}% Proficiency</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
