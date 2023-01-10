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
  ForwardButton,
  BackwardButton,
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
      <h1>Projects</h1>
      <ProjectContainer ref={scrollRef}>
        <ForwardButton onClick={() => scroll(300)}>
          <Image src={"images/next.png"} height="30px" width="30px" alt="" />
        </ForwardButton>
        <BackwardButton onClick={() => scroll(-300)}>
          <Image src={"images/back.png"} height="30px" width="30px" alt="" />
        </BackwardButton>
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
                    <Button
                      hoverColor="#29803e"
                      onClick={() => (window.location = project.project)}
                    >
                      Project
                    </Button>
                    <Button
                      hoverColor="#5e6b61"
                      onClick={() => (window.location = project.source)}
                    >
                      Code
                    </Button>
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
