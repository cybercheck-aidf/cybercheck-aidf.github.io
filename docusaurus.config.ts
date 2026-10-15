import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

// GitHub Pages provides its actual URL, including a project path or custom domain.
const defaultUrl = process.env.NODE_ENV === 'production'
  ? 'https://cybercheck-aidf.github.io/'
  : 'http://localhost:3000/';
const deploymentUrl = new URL(process.env.DEPLOYMENT_URL ?? defaultUrl);
const deploymentPath = deploymentUrl.pathname.replace(/\/$/, '') + '/';

const config: Config = {
  title: 'CyberCheck',
  tagline: 'A clearer view of your cyber risk',
  favicon: 'img/favicon.svg',
  url: deploymentUrl.origin,
  baseUrl: deploymentPath,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],
  themeConfig: {
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true},
    navbar: {
      title: 'CyberCheck',
      items: [
        {href: 'https://cybercheck.ncl.sg/', label: 'Open CyberCheck', position: 'right'},
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;
