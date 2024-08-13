import React from 'react';
import ReactDOM from 'react-dom/client';
const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      key:"h2",
    },
    "heading1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      key :"h2",
    },
    "heading2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);