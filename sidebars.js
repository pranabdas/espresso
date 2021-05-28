module.exports = {
  docs: [
    {
      type: "category",
      label: "Docs",
      items: [
        "introduction",
        {
          type: "category",
          label: "Theory",
          collapsed: false,
          items: [
            "theory/dft"
          ],
        },
        {
          type: "category",
          label: "Setup",
          collapsed: false,
          items: [
            "setup/install",
            "setup/hpc",
            "setup/crystal-structure",
            "setup/pseudo-potential",
          ],
        },
        {
          type: "category",
          label: "Hands-on",
          collapsed: false,
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
