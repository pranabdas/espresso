/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Density Functional Theory calculation using Quantum Espresso",
  tagline: "Density Functional Theory calculations using Quantum Espresso",
  url: "https://pranabdas.github.io",
  baseUrl: "/espresso/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "espresso", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
      additionalLanguages: ["docker", "fortran"],
    },
    hideableSidebar: true,
    // colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    // },
    navbar: {
      title: "Quantum Espresso Tutorial",
      // hideOnScroll: true,
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/',  // this is for docs only mode
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/espresso/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
