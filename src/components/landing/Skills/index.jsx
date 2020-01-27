import React from "react";
import { Container } from "components/common";
import { Wrapper, SkillsWrapper, Details, SkillsIcon, Grid, Item } from "./styles";

const skills = [{
  label: 'Full Stack Development',
  image: require('assets/illustrations/full-stack.svg')
},
{
  label: 'Research Methods Support',
  image: require('assets/illustrations/rms.svg')
},
{
  label: 'Teaching and Training',
  image: require('assets/illustrations/teaching.svg')
}]

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Details>
        <h1>Skills</h1>
        <Grid>
          {
            skills.map(s => (
              <Item key={s.label}>
                <img src={s.image} />
                <h4 style={{ textAlign: 'center' }}>{s.label}</h4>
              </Item>
            ))

          }
        </Grid>

      </Details>
    </SkillsWrapper>
  </Wrapper>
);
