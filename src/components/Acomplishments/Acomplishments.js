import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Intern @47 Billion'},
  {  text: 'SDE Intern @Medoc Health IT', },
  {  text: 'Front-End Engineer @Scrobits Technology', },
  {  text: 'Open Source Contributor @GSSOC', },
  {  text: 'Open Source Contributor @SSOC', },
  // {  text: 'Executive @Students Technical and Innovation Club', },
  // {  text: 'Github Stars', },
  // {  text: 'Github Stars', },


];

const Acomplishments = () => (
  <Section>
    <br /><br />
    <SectionTitle>Personal Achievements :</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{`${card.number}+`}</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <br /><br /><br />
    <SectionDivider/>
    
  </Section>
);

export default Acomplishments;
