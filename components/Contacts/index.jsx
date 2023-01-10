import React from "react";
import { PageContainer, Image, Text } from "../../styles/globalStyle.styled";
import { Header } from "../Header";
import { ContactContainer, ContactCard, LinkItem } from "./contacts.styled";
import { contact } from "../../utils/constants";

export const Contacts = () => {
  return (
    <PageContainer>
      <Header />
      <Text fontSize={24} fontWeight={600} marginBottom={20}>
        Connect with me through...
      </Text>
      <ContactContainer>
        {contact.map((contct) => (
          <ContactCard
            key={contct.id}
            onClick={() => (window.location = contct.link)}
          >
            <Image src={contct.image} alt="" width="40px" height="40px" />
            <Text>{contct.name}</Text>
          </ContactCard>
        ))}
        <ContactCard>
          <Image src="images/call.png" alt="" width="40px" height="40px" />
          <LinkItem href="tel:79755507889">Call</LinkItem>
        </ContactCard>
        <ContactCard>
          <Image src="images/email.png" alt="" width="40px" height="40px" />
          <LinkItem href="mailto:deekshithmogra@gmail.com">Email</LinkItem>
        </ContactCard>
      </ContactContainer>
    </PageContainer>
  );
};
