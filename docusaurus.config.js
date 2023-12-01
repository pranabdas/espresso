/** @type {import('@docusaurus/types').DocusaurusConfig} */
import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Quantum Espresso Tutorial",
  tagline: "Density Functional Theory calculations using Quantum Espresso",
  url: "https://pranabdas.github.io",
  baseUrl: "/espresso/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "espresso", // Usually your repo name.
  titleDelimiter: "•",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "theme-color", content: "#006bb3" }],
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
        additionalLanguages: ["bash", "diff", "docker", "fortran"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        // disableSwitch: true,
        // defaultMode: "dark",
        // respectPrefersColorScheme: false,
        // switchConfig: {
        //   darkIcon: '☾',
        //   lightIcon: "☀️"
        // },
      },
      navbar: {
        title: "Quantum Espresso",
        hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            to: "/",
            label: "Docs",
            position: "left",
            items: [
              {
                label: "Quantum Espresso Tutorial",
                to: "/",
              },
              {
                label: "~ ~ ~ Other Docs ~ ~ ~",
                to: "https://pranabdas.github.io/docs/",
                target: "_self",
              },
              {
                label: "ARPES Python Tools",
                to: "https://pranabdas.github.io/arpespythontools/",
                target: "_self",
              },
              {
                label: "C and C++ Programming",
                to: "https://pranabdas.github.io/c-cpp/",
                target: "_self",
              },
              {
                label: "Condensed Matter Notes",
                to: "https://pranabdas.github.io/condmat-notes/",
                target: "_self",
              },
              {
                label: "Fortran Programming",
                to: "https://pranabdas.github.io/fortran/",
                target: "_self",
              },
              {
                label: "Javascript Tutorial",
                to: "https://pranabdas.github.io/javascript/",
                target: "_self",
              },
              {
                label: "Linux Tutorial",
                to: "https://pranabdas.github.io/linux/",
                target: "_self",
              },
              {
                label: "Machine Learning Notes",
                to: "https://pranabdas.github.io/machine-learning/",
                target: "_self",
              },
              {
                label: "OpenMX tutorial",
                to: "https://pranabdas.github.io/openmx/",
                target: "_self",
              },
              {
                label: "Python Tutorial",
                to: "https://pranabdas.github.io/python-tutorial/",
                target: "_self",
              },
              {
                label: "Rust Programming",
                to: "https://pranabdas.github.io/rust/",
                target: "_self",
              },
              {
                label: "SUV ARPES Manual",
                to: "https://pranabdas.github.io/arpes-manual/",
                target: "_self",
              },
              {
                label: "SUV Python Tools",
                to: "https://pranabdas.github.io/suvtools/",
                target: "_self",
              },
            ],
          },
          {
            href: "https://github.com/pranabdas/espresso",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            title: "Visit project repository in GitHub",
            target: "_self",
          },
          {
            to: "https://pranabdas.github.io",
            "aria-label": "About me",
            position: "right",
            target: "_self",
            className: "header-homepage-link",
            title: "Go to Pranab's Homepage",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights reserved.`,
      },
    }),

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // this is for docs only mode
          editUrl: "https://github.com/pranabdas/espresso/blob/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://pranabdas.github.io/drive/webfonts/katex/katex.min.css",
      type: "text/css",
    },
  ],
};

export default config;
