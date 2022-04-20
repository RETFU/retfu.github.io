import { css } from 'styled-components';
import theme from 'styled-theming';

export const themePageBackgroundColor = theme('mode', {
  light: '#d12e2e',
  dark: '#000',
});

export const themeLink = theme.variants('mode', 'variant', {
  footer: {
    light: css`
      color: #35ae77;
      &:hover {
        text-decoration: none;
      }
    `,
    dark: css`
      color: darkgray;
      &:hover {
        text-decoration: none;
      }
    `,
  },
  normal: {
    light: css`
      color: #0a8bfd;
      &:hover {
        text-decoration: none;
      }
    `,
    dark: css`
      color: darkblue;
      &:hover {
        text-decoration: none;
      }
    `,
  },
});
