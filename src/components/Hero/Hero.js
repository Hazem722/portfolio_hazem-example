import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There, I'm <br />
        Hazem Ben Abdallah
      </SectionTitle>
      <SectionText>
        I'm a freelance web developer. I help people make their own websites
        whether it is for personal use or for their business. Making the
        website, I make sure that it has a clear purpose and it is visually
        pleasing and easy to navigate. And also, I take care of the way it
        performs so that it works well for a wide range of visitors and be
        technically stable and secure.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:hazemb.abdallah@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
