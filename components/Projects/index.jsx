import React from "react";
import { PageContainer, Image, Text } from "../../styles/globalStyle.styled";
import { Header } from "../Header";
import {
  ProjectCardContainer,
  ProjectCardContent,
  FrontCard,
  BackCard,
  ProjectContainer,
  Button,
  ButtonContainer,
} from "./projects.styled";
import { projects } from "../../utils/constants";
export const Projects = () => {
  return (
    <PageContainer>
      <Header />
      <ProjectContainer>
        {projects.map((project) => {
          return (
            <ProjectCardContainer key={project.id} tranform="180deg">
              <ProjectCardContent>
                <FrontCard>
                  <h1>{project.name}</h1>
                  <Image
                    src={project.image}
                    width="100%"
                    height="150px"
                    alt=""
                  />
                  <Text>{project.description}</Text>
                  <h3>Tech Stack Used</h3>
                  {project.tech.map((tech, index) => {
                    return <Text key={index}>{tech}</Text>;
                  })}
                </FrontCard>
                <BackCard>
                  <h1>Major Features</h1>
                  {project.features.map((feature, index) => {
                    return <Text key={index}>{feature}</Text>;
                  })}
                  <ButtonContainer>
                    <Button>Project</Button>
                    <Button>Code</Button>
                  </ButtonContainer>
                </BackCard>
              </ProjectCardContent>
            </ProjectCardContainer>
          );
        })}
      </ProjectContainer>
    </PageContainer>
  );
};
