import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Jon's JIRA Clone
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) using the input field + status dropdown below
      </p>
    </header>
  );
};

export default Header;
