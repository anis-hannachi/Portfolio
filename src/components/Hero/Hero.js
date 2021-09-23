import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There I am <br />
          Anis Hannachi
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={() => window.location.href = 'mailto:hannachi.anis@gmail.com'}>Contact Me</Button>
      </LeftSection>
    </Section>
);

export default Hero;