import React from "react";
import { PageContainer, Image } from "../../styles/globalStyle.styled";
import { Header } from "../Header";
import {
  ProjectCardContainer,
  ProjectCardContent,
  FrontCard,
  BackCard,
} from "./projects.styled";
export const Projects = () => {
  return (
    <PageContainer>
      <Header />
      <ProjectCardContainer>
        <ProjectCardContent>
          <FrontCard>
            <h1>FreshUI</h1>
            <Image
              src={"images/FreshUI.png"}
              width="100%"
              height="150px"
              alt=""
            />
            <div>
              <button>Project</button>
              <button>Code</button>
            </div>
            <button>Know More...</button>
          </FrontCard>
          <BackCard>
            <h1>Major Features</h1>
            <p>Alert component</p>
          </BackCard>
        </ProjectCardContent>
      </ProjectCardContainer>
    </PageContainer>
  );
};
