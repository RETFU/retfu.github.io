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
    color: #f5f2e7;
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
  dark: '#2C3333',
});

export const themeHeaderColor = theme('mode', {
  light: '#35ae77',
  dark: '#FFF',
});

export const themeSubTitleColor = theme('mode', {
  light: '#0a8bfd',
  dark: '#AB46D2',
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
      color: #395b64;
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
      color: #2666cf;
      &:hover {
        text-decoration: none;
      }
    `,
  },
});
