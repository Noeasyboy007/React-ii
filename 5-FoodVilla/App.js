import React from 'react';
import ReactDOM from 'react-dom/client';


// Title COmponent
const Title = () => (
  <a href="/">
    <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="Not found"
    />
  </a>
);

// Header component
const Header = () => {
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


// Body component
const Body = () => {
  return (
    <h4>Body</h4>
  )
};

// Footer component
const Footer = () => {
  return (
    <h4>Footer</h4>
  )
};


//AppLayout component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);