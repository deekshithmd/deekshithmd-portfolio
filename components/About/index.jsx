import { PageContainer, Image } from "../../styles/globalStyle.styled";
import { AboutCard } from "./about.styled";
import { Header } from "../Header";
import { LinkItem, ContactCard } from "../Contacts/contacts.styled";

export const AboutMe = () => {
  return (
    <PageContainer>
      <Header />
      <h1>About Me</h1>
      <AboutCard>
        I have completed my B.E in Computer Science and Engineering from NMAM
        Institute of Technology, Nitte. Later I joined Wipro as Project Engineer
        and worked for one year. While working there I decided to continue my
        career in web development so started learning by building mini projects
        and later joined FullStack(MERN) web development bootcamp called
        neogCamp. Later I joined web3 startup called Push Protocol as frontend
        developer.
      </AboutCard>
      <ContactCard>
        <Image src="images/resume.png" width="40px" height="40px" alt="" />
        <LinkItem href="files/Deekshith_M_D_Resume.pdf" download>
          Resume
        </LinkItem>
      </ContactCard>
    </PageContainer>
  );
};
