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
      title: "Quantum Espresso",
      hideOnScroll: true,
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Docs",
          position: "left",
          items: [
            {
              label: "Quantum Espresso Tutorial",
              to: "/",
            },
            {
              label: "~ ~ ~ Other Docs ~ ~ ~",
            },
            {
              label: "ARPES Python Tools",
              to: "https://pranabdas.github.io/arpespythontools/",
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
              label: "Fortran Programming",
              href: "https://pranabdas.github.io/docs/fortran/",
            },
            {
              label: "FullProf Tutorial",
              href: "https://pranabdas.github.io/docs/fullprof/",
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
