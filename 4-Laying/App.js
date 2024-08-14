import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX ->??
const heading = (
  <h3 id="titel3" key="h3">
    heading
  </h3>
);

// compomant
// Function Component

// 1 Way we write compnent
const HeaderComponent1 = () => {
  return <h1>
    Hello World
  </h1>
};

// 2 Way we write component
const HeaderComponent2 = () => {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <h2>
        Hello World
      </h2>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);