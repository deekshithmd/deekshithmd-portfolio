import React from "react";
import { Header } from "../Header";
import { PageContainer } from "../../styles/globalStyle.styled";
import { SkillBadgeContainer, SkillBadge } from "./technologies.styled";
import { Image } from "../Hero/hero.styled";

export const Technologies = () => {
  return (
    <PageContainer>
      <Header />
      <h1>Technologies I work on</h1>
      <SkillBadgeContainer>
        <SkillBadge>
          <Image src={"images/html.png"} width="50px" height="50px" alt="" />
          <h2>HTML</h2>
        </SkillBadge>
        <SkillBadge>
          <Image src={"images/css.png"} width="50px" height="50px" alt="" />
          <h2>CSS</h2>
        </SkillBadge>
        <SkillBadge>
          <Image
            src={"images/javascript.png"}
            width="50px"
            height="50px"
            alt=""
          />
          <h2>Javascript</h2>
        </SkillBadge>
        <SkillBadge>
          <Image src={"images/react.png"} width="50px" height="50px" alt="" />
          <h2>ReatJS</h2>
        </SkillBadge>
        <SkillBadge>
          <Image src={"images/nextjs.png"} width="50px" height="50px" alt="" />
          <h2>NextJS</h2>
        </SkillBadge>
        <SkillBadge>
          <Image
            src={"images/tailwind.png"}
            width="50px"
            height="50px"
            alt=""
          />
          <h2>TailwindCSS</h2>
        </SkillBadge>
      </SkillBadgeContainer>
    </PageContainer>
  );
};
