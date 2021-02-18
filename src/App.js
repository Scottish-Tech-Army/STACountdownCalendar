import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./containers/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import config from "./config.json";

function App() {

  const [openWindow, setOpenWindow] = useState(null);
  const [showPromotionModal, setShowPromotionModal] = useState(false);

  const allDays = config.days;

  function toggleShowPromotionModal(showPromotionModal) {
    const promotionModalStatus = () => {
      if (showPromotionModal === true) {
        return false;
      } else {
        return true;
      }
    };
    setShowPromotionModal(promotionModalStatus);
  }

  return (
    <div className="app">
      <Header />
      <Main setOpenWindow={setOpenWindow} allDays={allDays}/>
      <Footer />
    </div>
  );
}

export default App;
