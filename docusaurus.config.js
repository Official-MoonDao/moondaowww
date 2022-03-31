module.exports = {
  title: 'MoonDAO',
  tagline: 'Decentralize space.',
  url: 'https://moondao.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Official-MoonDao', // Usually your GitHub org/user name.
  projectName: 'moondaowww', // Usually your repo name.
  trailingSlash: false,
  // scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'moondao.com'}],
  // Add Plausible if we want privacy focused analytics. $6/month.
  themeConfig: {
    image: 'img/moondao-one-small-step.png', // TODO update image
    metadata: [
      {name: 'og:type', content: 'website'},
      {
        name: 'og:description',
        content: "MoonDAO's mission is to decentralize access to space.",
      },
      {name: 'og:site_name', content: 'MoonDAO'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@OfficialMoonDAO'},
      {name: 'twitter:title', content: 'MoonDAO'},
      {
        name: 'twitter:description',
        content: "MoonDAO's mission is to decentralize access to space.",
      },
    ],
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      // title: 'MoonDAO',
      logo: {
        alt: 'MoonDAO Logo moon dao',
        src: 'img/Original_White.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          to: '/docs/to-the-moon/introduction',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: '/docs/work/roles',
          label: 'Contribute',
          position: 'right',
        },
        {
          label: 'Governance',
          position: 'right',
          items: [
            {
              label: 'Snapshot',
              href: 'https://snapshot.org/#/tomoondao.eth',
            },
            {
              label: 'Forum',
              href: 'https://forum.moondao.com/',
            },
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              to: '/docs/introduction',
              label: 'Documentation',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/OfficialMoonDAO',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/5nAu7K9aES',
            },
            {
              label: 'Github',
              href: 'https://github.com/Official-MoonDao',
            },
          ],
        },
      ],
      logo: {
        alt: 'MoonDAO logo moondao moon dao',
        src: 'img/Original_Black.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} MoonDAO.`,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans', 'es'],
  },
};
