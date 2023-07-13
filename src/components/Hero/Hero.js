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
      Hey 👋 Anshul here, <b> I love to build, contribute, and design stuff</b>
      </SectionText>
      <Button onClick={() => window.location = 'https://flowcv.com/resume/1eeisod6l5'}>View my Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
