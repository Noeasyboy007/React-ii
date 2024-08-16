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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

//Restraunt card data
const burgerKing = {
  name: "Burger King",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591",
  cusines: ["Burger", "American"],
  rating: "4.2"
}


//Restraunt Card 
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(", ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  )
}

// Body component
const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
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

root.render(<AppLayout />);