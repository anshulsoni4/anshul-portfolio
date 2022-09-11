import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Anshul Soni this side , <b> Making Ideas Happen ! </b>
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1btdFIYGSX9S_7kviH1uZqYTHuXaqN5Fu/view?usp=sharing'}>View my Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;