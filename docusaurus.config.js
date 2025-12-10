// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An AI-Native Interactive Textbook',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',

  // GitHub pages deployment config (adjust for your repo)
  organizationName: 'your-org',
  projectName: 'ai-native-textbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization (i18n) config
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs as homepage (constitution: docs-only site)
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove edit links (no external repo for MVP)
          editUrl: undefined,
          // Disable blog features
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false, // Disable blog for textbook-only site
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
      image: 'img/social-card.png',

      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Textbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbookSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            href: 'https://github.com/your-org/ai-native-textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'All Chapters',
                to: '/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/ai-native-textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-Native Textbook Project. Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      // Mobile-responsive configuration (constitution: Principle VI)
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      // Color mode configuration
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  // Plugins
  plugins: [],

  // Custom fields
  customFields: {
    // Constitution metadata
    constitution: {
      version: '1.0.0',
      principles: [
        'AI-Native Design',
        'Speed & Simplicity',
        'Free-Tier Architecture',
        'Grounded RAG Responses',
        'Modular Backend Structure',
        'Mobile-First Design',
        'Content Quality Over Quantity',
        'Observability',
      ],
    },
    // Textbook metadata
    textbook: {
      topic: 'Physical AI & Humanoid Robotics',
      chaptersTotal: 6, // MVP: 6 chapters (extendable to 8)
      wordsPerChapter: '800-1200',
      readingTimePerChapter: '5-7 minutes',
    },
  },
};

module.exports = config;
