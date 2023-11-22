import React from "react";

const ColabBadge = ({ notebook }) => {
  const url = "https://colab.research.google.com/github/pranabdas/espresso/blob/main/notebooks/" + notebook;
  return (
    <div style={{ display: "float", marginBottom: "5px", marginLeft: "auto" }} className="colab">
      <a href={url} target="_blank">
        <img src={require("/img/colab-badge.webp").default} height="24px" alt="Colab badge" title="Open Notebook in Google Colab" />
      </a>
    </div>
  );
};

export default ColabBadge;
