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
  return <h3>
    
    Hello World
  </h3>
};

// 2 Way we write component
const HeaderComponent2 = () => {
  return (
    <div>
      <HeaderComponent1/>              
      <h1>
        Hello World
      </h1>
      <h2>
        Hello World 2
      </h2>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent2/>);