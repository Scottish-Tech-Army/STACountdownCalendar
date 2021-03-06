import "./Header.css";

function Header() {
  return (
    <div className="header-contents">
      <img src="assets/Icon.png" alt="Sole & Dunbar Town Logo" />
      <div className="logo-sole-dunbar-text-container">
        <span className="logo-sole-dunbar-text-primary">SOLE | DUNBAR</span>
        <span className="logo-sole-dunbar-text-secondary">
          SUPPORTING OUR LOCAL ECONOMY
        </span>
      </div>
    </div>
  );
}

export default Header;

// <div className="header-text">
//   <p>28 DAYS, 28 AMAZING OFFERS.  Support your local economy and claim your daily offer.  Visit the promotion calendar each day to claim another great offer<span>&#42;</span>.</p>
//   <p><span>&#42;</span>explain how offers can only be claimed through the SOLE platform?</p>
// </div>
