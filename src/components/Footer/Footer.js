import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <br /><br />
      <SectionTitle id='contact'>Contact Me :</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Links to all socials</LinkTitle>
          <LinkItem href="https://bento.me/anshul-soni">Bento</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Twitter</LinkTitle>
          <LinkItem href="https://twitter.com/Anshul_the_soni">Anshul_the_soni</LinkItem>
        </LinkColumn>
        
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:anshulsoni3040@gmail.com">
            anshulsoni3040@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lets catch up for a coffee :)<br />
            <br />
            Ask me about - Products, Design, Development, Debugging, and Building Stuff</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/anshulsoni4">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/-anshul-soni/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://bento.me/anshul-soni">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
