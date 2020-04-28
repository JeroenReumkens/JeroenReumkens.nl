import styled, { keyframes, css } from '../../theme';
import { Wrapper } from '../wrapper';
import { Flex, Box } from 'rebass';
import { mobileUp } from '../../utils/mixins';
import React from 'react';
import { LazyImage } from '@urval/lazy-image';

const Background = styled.section`
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: ${(props) => props.theme.fonts.sizes[0]};

  ${mobileUp(css`
    min-height: 80vh;
    flex-direction: row;
  `)}
`;

const wave = keyframes`
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(46deg);
  }
  20% {
    transform: rotate(0)
  }
  30% {
    transform: rotate(46deg);
  }
  40% {
    transform: rotate(0);
  }
`;

const Upper = styled.span`
  font-size: ${(props) => props.theme.fonts.sizes[0]};

  span {
    transform: rotate(0);
    font-size: ${(props) => props.theme.fonts.sizes[2]};
    display: inline-block;
    animation: ${wave} 4000ms infinite;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: ${(props) => props.theme.fonts.sizes[2]};
  margin-top: 0;
  line-height: 1.6;

  span {
    font-weight: 800;
    line-height: 1.4;
    font-size: ${(props) => props.theme.fonts.sizes[4]};
  }
`;

const Body = styled.p`
  font-weight: ${(props) => props.theme.fonts.weights[0]};
  color: ${(props) => props.theme.colors.grey};
  line-height: 1.6;

  span {
    display: flex;
    align-items: center;
    margin-top: 6rem;
    font-weight: ${(props) => props.theme.fonts.weights[1]};

    &::before {
      content: '';
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-color: green;
      border-radius: 0.8rem;
      margin-right: 1rem;
    }
  }
`;

const BackgroundImageWrapper = styled(Box)`
  position: relative;
  height: 30rem;

  ${mobileUp(css`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  `)}

  img {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export const Intro: React.FC<{ available?: boolean }> = ({ available }) => {
  return (
    <Background>
      <Wrapper>
        <Flex alignItems="center" height="100%" width={1}>
          <Box width={[1, 2 / 5]}>
            <Upper>
              Hey there! <span>👋</span>
            </Upper>
            <Title>
              <span>Jeroen Reumkens</span>
              <br /> is a passionate frontend engineer living in The
              Netherlands.
            </Title>
            <Body>
              I enjoy converting sexy designs into great online experiences, but
              I also like a technical JavaScript challenge. I combine these
              skills with the ability to teach and coach people, help companies
              create a technical vision and bring a smile into the office.
              {available && <span>I am currently available</span>}
            </Body>
          </Box>
        </Flex>
      </Wrapper>
      <BackgroundImageWrapper width={[1, 2 / 5]}>
        <LazyImage placeholder={require('../../public/this-is-i-preload.jpg')}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${require('../../public/this-is-i-small.webp')} 600w, ${require('../../public/this-is-i.webp')} 900w`}
            />
            <source
              type="image/jpg"
              srcSet={`${require('../../public/this-is-i-small.jpg')} 600w, ${require('../../public/this-is-i.jpg')} 900w`}
            />
            <img
              src={require('../../public/this-is-i.jpg')}
              alt="Me in front of the Apple Campus at One Infinite Loop Cupertino"
            />
          </picture>
        </LazyImage>
      </BackgroundImageWrapper>
    </Background>
  );
};
