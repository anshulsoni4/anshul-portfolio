import React from 'react';
import { DiCode, DiFirebase, DiJira, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider /><br /><br /><br /><br />
    <SectionTitle>Technologies :</SectionTitle>
    <SectionText>I have worked with various range of tech stack, and implemented them with different domains, made projects majorly in the web domain, looking forward to learn more and contribute to open source.<br />

    </SectionText>
    <List>

    <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>Experience with <br />
          C/C++ , Java , Python   
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with <br />
          React JS , HTML/CSS , Sass , Javascript , Tailwind CSS , Bootstrap 5 , Git/Github , NPM 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br />
          Mongo DB , SQL  
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI / UX</ListTitle>
          <ListParagraph>Experience with <br />
          Figma , Adobe XD , Canva 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
