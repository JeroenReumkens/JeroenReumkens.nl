import { SimpleInterpolation } from 'styled-components';
import { css } from '../theme';

export const mobileUp = (interpolation: SimpleInterpolation) =>
  css`
    @media screen and (min-width: 40em) {
      ${interpolation}
    }
  `;
