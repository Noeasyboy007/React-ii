import React from 'react';
import ReactDOM from 'react-dom/client';


// Title COmponent
const Title = () => {
  return <h1>
    Food Villa
  </h1>
};

// Header component
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
        <div className="nav-items" >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);