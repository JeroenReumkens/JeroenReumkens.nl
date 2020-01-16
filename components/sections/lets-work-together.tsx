import React from 'react';
import { Box, Flex } from 'rebass';
import styled from '../../theme';
import { Wrapper } from '../wrapper';
import { SectionTitle } from '../section-title';

const Link = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fonts.sizes[1]};
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    position: relative;
    background-color: ${props => props.theme.colors.black};
    transition: 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-property: opacity, transform;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 0;
      transform: translate3d(0, 1rem, 0);
    }
  }
`;

export const LetsWorkTogether = () => {
  return (
    <section>
      <Wrapper>
        <SectionTitle>Let's work together</SectionTitle>
        <Flex flexDirection={['column', 'row']}>
          <Box width={[1, 1 / 2]}>
            <Link href="mailto:hello@jeroenreumkens.nl?subject=Let's work together">
              hello@jeroenreumkens.nl
            </Link>
          </Box>
          <Box width={[1, 1 / 2]}>
            <Link
              href="https://www.linkedin.com/in/jeroenreumkens/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Box>
        </Flex>
      </Wrapper>
    </section>
  );
};
