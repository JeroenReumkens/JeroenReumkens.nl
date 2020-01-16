import React from 'react';
import { Wrapper } from '../wrapper';
import { SectionTitle } from '../section-title';
import styled, { css } from '../../theme';
import { transparentize } from 'polished';
import { Box } from 'rebass';
import { mobileUp } from '../../utils/mixins';

const Badge = styled.span`
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  background-color: ${props => props.theme.colors.greyLight};
  border: 1px solid ${props => transparentize(0.8, props.theme.colors.grey)};
  font-weight: ${props => props.theme.fonts.weights[0]};
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  display: inline-block;

  ${props =>
    mobileUp(css`
      font-size: ${props.theme.fonts.sizes[1]};
    `)}
`;

export const Skills = () => {
  return (
    <section>
      <Wrapper>
        <Box width={2 / 3}>
          <SectionTitle>I like to work with</SectionTitle>
          <p>
            Currently my preferred stack contains any of the following
            technologies:
          </p>
          <Box marginBottom="3rem">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>CSS-in-JS</Badge>
            <Badge>GraphQL</Badge>
            <Badge>Jest</Badge>
            <Badge>NextJS</Badge>
          </Box>

          <p>
            Other technologies that have sparked my interest (and might have
            some experience with):
          </p>
          <Box marginBottom="3rem">
            <Badge>ReasonML</Badge>
            <Badge>React Native</Badge>
            <Badge>Svelte</Badge>
          </Box>

          <p>Other skills I bring to a team:</p>
          <Box>
            <Badge>Coaching developers</Badge>
            <Badge>Creating techinical roadmaps</Badge>
            <Badge>Scrum and SAFE experience</Badge>
            <Badge>Collaborate, connect people</Badge>
            <Badge>Communicate</Badge>
            <Badge>Create foundations for others to build on</Badge>
          </Box>
        </Box>
      </Wrapper>
    </section>
  );
};
