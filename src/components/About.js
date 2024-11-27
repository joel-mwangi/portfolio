import React from "react";
import styled from "styled-components";

// Styled components for styling
const AboutSection = styled.section`
  background-color: #f9f9f9;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 50px auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  font-weight: bold;
  color: #4caf50;
`;

const CareerJourney = styled.div`
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JourneyHeading = styled.h3`
  color: #4caf50;
  margin-bottom: 10px;
`;

const JourneyText = styled.p`
  color: #555;
  font-size: 1.1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <Heading>About Me</Heading>
      <Paragraph>
        I’m Joel Mwangi Gachihi, an aspiring developer with a passion for
        building solutions that make a difference. I specialize in Django, React,
        and front-end technologies. My goal is to create impactful applications
        that solve real-world problems and provide users with the best experience.
      </Paragraph>

      <CareerJourney>
        <JourneyHeading>My Career Journey</JourneyHeading>
        <JourneyText>
          My journey as a developer started in 2022, and since then, I’ve worked
          on various projects ranging from web applications to software solutions.
          I’ve primarily worked with Python and Django for backend development and
          React for building dynamic user interfaces. I am always eager to learn
          new technologies and keep up with the latest industry trends.
        </JourneyText>
      </CareerJourney>

      <Paragraph>
        In addition to my professional experience, I have worked on several personal
        projects that focus on improving accessibility, sustainability, and innovation.
        You can explore these projects in the portfolio section of my website.
      </Paragraph>

      <SkillsList>
        <SkillItem>Django</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>Python</SkillItem>
        <SkillItem>HTML/CSS</SkillItem>
        <SkillItem>Node.js</SkillItem>
      </SkillsList>
    </AboutSection>
  );
};

export default About;
