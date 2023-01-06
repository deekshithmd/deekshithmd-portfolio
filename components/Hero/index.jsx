import React from "react";
import { useRouter } from "next/router";
import {
  HeroContentContainer,
  ContentWrapper,
  Image,
  Item,
} from "./hero.styled";
import { PageContainer } from "../../styles/globalStyle.styled";
import { Header } from "../Header";

export const Hero = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <Header />
      <HeroContentContainer>
        <div>
          <h1>Hi,</h1>
          <h1> I am Deekshith M D</h1>
          <h2>Front End Developer</h2>
        </div>
        <ContentWrapper height="500px" width="500px">
          <Image
            src={"images/deekshith.png"}
            height="300px"
            width="300px"
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <Item top="35px" left="-200px" onClick={() => router.push("/about")}>
            About Me
          </Item>
          <Item
            top="150px"
            left="-250px"
            onClick={() => router.push("/skills")}
          >
            Skills
          </Item>
          <Item
            top="270px"
            left="-250px"
            onClick={() => router.push("/projects")}
          >
            Projects
          </Item>
          <Item
            top="385px"
            left="-200px"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Item>
        </ContentWrapper>
      </HeroContentContainer>
    </PageContainer>
  );
};
