import React, { useState } from "react";
import { projects } from "../data/projects";
import styled from "styled-components";

// Styled Components for styling
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FilterButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #388e3c;
  }

  &:focus {
    outline: none;
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const ProjectCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 350px;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 15px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <Section>
      <Heading>My Projects</Heading>
      <FilterContainer>
        <FilterButton onClick={() => setFilter("All")}>All</FilterButton>
        <FilterButton onClick={() => setFilter("Web Development")}>Web Development</FilterButton>
        <FilterButton onClick={() => setFilter("E-commerce")}>E-commerce</FilterButton>
        <FilterButton onClick={() => setFilter("Mobile App")}>Mobile App</FilterButton>
      </FilterContainer>
      <ProjectContainer>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index}>
            {project.image && <ProjectImage src={project.image} alt={project.title} />}
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Section>
  );
}

export default Portfolio;
