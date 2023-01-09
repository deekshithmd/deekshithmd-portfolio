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
  ProjectContainerGrid,
} from "./projects.styled";
import { projects } from "../../utils/constants";
export const Projects = () => {
  const scrollRef = React.useRef();
  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };
  return (
    <PageContainer>
      <Header />
      <Button onClick={() => scroll(200)}>Scroll</Button>
      <ProjectContainer ref={scrollRef}>
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
                  <Text fontSize={12}>{project.description}</Text>
                  <Text fontSize={14} fontWeight={600}>
                    Tech Stack Used
                  </Text>
                  <Text fontSize={12}>{project.tech}</Text>
                </FrontCard>
                <BackCard>
                  <Text fontSize={14} fontWeight={600} marginBottom={20}>
                    Major Features
                  </Text>
                  <ProjectContainerGrid>
                    <ul>
                      {project.features
                        .slice(0, project.features.length / 2)
                        .map((feature, index) => {
                          return (
                            <Text fontSize={12} textAlign="left" key={index}>
                              {feature}
                            </Text>
                          );
                        })}
                    </ul>
                    <div>
                      {project.features
                        .slice(
                          project.features.length / 2,
                          project.features.length
                        )
                        .map((feature, index) => {
                          return (
                            <Text fontSize={12} textAlign="left" key={index}>
                              {feature}
                            </Text>
                          );
                        })}
                    </div>
                  </ProjectContainerGrid>

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
