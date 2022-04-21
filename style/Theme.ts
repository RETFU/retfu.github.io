import { css } from 'styled-components';
import theme from 'styled-theming';

export const themeMain = theme('mode', {
  light: css`
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5;
    color: #173753;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.5em;
  `,
  dark: css`
    font-family: 'Work Sans', sans-serif;
    line-height: 1.5;
    color: #173753;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1.5em;
  `,
});

export const themePageBackgroundColor = theme('mode', {
  light: '#ffffff',
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
