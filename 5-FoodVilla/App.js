import React from 'react';
import ReactDOM from 'react-dom/client';


// 1 Way we write compnent
const Title = () => {
  return <h1>
    Title
  </h1>
};

// 2 Way we write component
const HeaderComponent = () => {
  return (
    <div>
      <Title/>              
      <h2>
        Heading1
      </h2>
      <h2>
        Heading2
      </h2>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);