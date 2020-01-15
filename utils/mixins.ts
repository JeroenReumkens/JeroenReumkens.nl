import { SimpleInterpolation, CSSObject } from 'styled-components';
import { css } from '../theme';

export const mobileUp = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => `@media screen and (min-width: 40em) {${css(first, ...interpolations)}}`;
