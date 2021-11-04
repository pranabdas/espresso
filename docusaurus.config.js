/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Quantum Espresso Tutorial",
  tagline: "Density Functional Theory calculations using Quantum Espresso",
  url: "https://pranabdas.github.io",
  baseUrl: "/espresso/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "espresso", // Usually your repo name.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/nightOwl"),
        additionalLanguages: ["docker", "fortran"],
      },
      hideableSidebar: true,
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
          src: "img/favicon.ico",
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
                label: "Fortran Programming",
                to: "https://pranabdas.github.io/fortran/",
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
                label: "SUV Python Tools",
                to: "https://pranabdas.github.io/suvtools/",
                target: "_self",
              },
              {
                label: "Condensed Matter Notes",
                href: "https://pranabdas.github.io/docs/condmat-notes/",
              },
              {
                label: "Javascript Tutorial",
                href: "https://pranabdas.github.io/docs/js-learning/",
              },
              {
                label: "SUV ARPES Manual",
                href: "https://pranabdas.github.io/docs/arpes-suv-man/",
              },
            ],
          },
          {
            to: "https://pranabdas.github.io",
            label: "About me",
            position: "left",
            target: "_self",
          },
          {
            href: "https://github.com/pranabdas/espresso",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            // target: "_self",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
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
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/espresso/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
