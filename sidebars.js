module.exports = {
  docs: [
    {
      type: "category",
      label: "Docs",
      items: [
        "welcome",
        "dft",
        {
          type: "category",
          label: "Setup",
          collapsed: false,
          items: [
            "setup/install",
            "setup/hpc",
            "setup/jupyter",
            "setup/crystal-structure",
            "setup/pseudo-potential",
          ],
        },
        {
          type: "category",
          label: "Hands-on",
          collapsed: true,
          items: [
            "hands-on/scf",
            "hands-on/convergence",
            "hands-on/structure-optimization",
            "hands-on/dos",
            "hands-on/bands",
            "hands-on/aluminum",
            "hands-on/pdos",
            "hands-on/kpdos",
            "hands-on/graphene",
            "hands-on/GaAs",
            "hands-on/fe",
            "hands-on/ni",
            "hands-on/dft-u",
            "hands-on/soc",
          ],
        },
        "resources",
        "license",
      ],
    },
  ],
};
