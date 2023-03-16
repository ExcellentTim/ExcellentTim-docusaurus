// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '我的网站名',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // 在此处设置网站的生产url
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // 即使你不使用内化，你也可以使用这个字段来设置有用的
  // 元数据，如html语言。例如，如果你的网站是中文的，你可能需要
  // 将“en”替换为“zh-Hans”。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/help', label: '帮助中心', position: 'left'},
          {to: '/download', label: '下载中心', position: 'left'},
          {to: '/contact', label: '联系我们', position: 'left'},
          {to: '/person', label: '个人中心', position: 'right'}
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            // title: '第一列',
            items: [
              {
                label: '下载中心',
                to: '/download',
              },
            ],
          },
          {
            // title: '第二列',
            items: [
              {
                label: '百度一下',
                href: 'https://www.baidu.com',
              },
              {
                label: '联系我们',
                to: '/contact',
              },
            ],
          },
          {
            // title: '第三列',
            items: [
              {
                label: '帮助中心',
                to: '/help',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
