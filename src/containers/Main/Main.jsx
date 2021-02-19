import { useState } from "react";
import "./Main.css";
import PromotionWindow from "../../components/PromotionWindow/PromotionWindow";
import PromotionModal from "../../components/PromotionModal/PromotionModal";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import config from "../../config.json";

function Main() {

  // For Production
  // const currentDate = moment().format("YYYYMMDD");

  // For Development
  const currentDate = "20210310";
  const allDays = config.days;

  const [showPromotionalModal, setShowPromotionalModal] = useState(false);
  const [showCountdownTimer, setShowCountdownTimer] = useState(false);

  const handleClose = () => {
    setShowPromotionalModal(false)
    setShowCountdownTimer(false)
  };

  const handleShow = () => {
    setShowPromotionalModal(true);
  };
  const handleNotShow = () => {
    setShowCountdownTimer(true);
  };

  const promotionWindows = allDays.map((promotionWindow, index) => {

    return (
      <div
        key={index}
        onClick={promotionWindow.Date <= currentDate ? handleShow : handleNotShow}
        className={
          promotionWindow.Date !== currentDate
            ? "promotion-window-button"
            : "promotion-window-button promotion-window-button-current-date"
        }
      >
        <PromotionWindow
          currentDate={currentDate}
          promotionWindowDate={promotionWindow.Date}
        />
      </div>
    );
  });

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/SOLE-calendar-background.jpg"
        })`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="promotion-window-container">{promotionWindows}</div>
      <PromotionModal show={showPromotionalModal} handleClose={handleClose} />
      <CountdownTimer currentDate={currentDate} show={showCountdownTimer} handleClose={handleClose} />
    </div>
  );
}

export default Main;
