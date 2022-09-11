import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Web developer Intern @Scrobits'},
  {  text: 'Open Source Contirbutor @Social', },
  {  text: 'R&D Co-Head @CS-Cult', },
  {  text: 'Executive @Google Developer Students Club', },
  {  text: 'Executive @Code Chef Club', },
  {  text: 'Executive @Students Technical and Innovation Club', },
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