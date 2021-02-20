import { useState } from "react";
import "./Main.css";
import PromotionWindow from "../../components/PromotionWindow/PromotionWindow";
import PromotionModal from "../../components/PromotionModal/PromotionModal";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import config from "../../config.json";

function Main() {
  // For Production
  // const currentDate = moment().format("YYYY-MM-DD");

  // For Development
  const currentDate = "2021-03-10";

  const allDays = config.Days;

  const [showPromotionalModal, setShowPromotionalModal] = useState(false);
  const [showCountdownTimer, setShowCountdownTimer] = useState(false);
  const [openWindow, setOpenWindow] = useState(null);
  const [openWindowDescription, setOpenWindowDescription] = useState(null);
  const [openWindowCouponCode, setOpenWindowCouponCode] = useState(null);
  const [openWindowUrl, setOpenWindowUrl] = useState(null);

  const handleClose = () => {
    setShowPromotionalModal(false);
    setShowCountdownTimer(false);
    setOpenWindow(null);
  };

  function handleShowPromotion(day, coupon, description, url) {
    setOpenWindow(day);
    setOpenWindowCouponCode(coupon);
    setOpenWindowDescription(description);
    setOpenWindowUrl(url);
    setShowPromotionalModal(true);
  }

  function handleShowTimer(day) {
    setOpenWindow(day);
    setShowCountdownTimer(true);
  }

  const promotionWindows = allDays.map((promotionWindow, index) => {
    return (
      <div
        key={index}
        onClick={() =>
          promotionWindow["days-date"] <= currentDate
            ? handleShowPromotion(
                promotionWindow["days-date"],
                promotionWindow["coupon-code"],
                promotionWindow["days-content-text"],
                promotionWindow["external-url"]
              )
            : handleShowTimer(promotionWindow["days-date"])
        }
        className={
          promotionWindow["days-date"] !== currentDate
            ? "promotion-window-button"
            : "promotion-window-button promotion-window-button-current-date"
        }
      >
        <PromotionWindow
          currentDate={currentDate}
          promotionWindowDate={promotionWindow["days-date"]}
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
      <PromotionModal
        show={showPromotionalModal}
        handleClose={handleClose}
        openWindowCouponCode={openWindowCouponCode}
        openWindowDescription={openWindowDescription}
        openWindowUrl={openWindowUrl}
        openWindow={openWindow}
      />
      <CountdownTimer
        currentDate={currentDate}
        openWindow={openWindow}
        show={showCountdownTimer}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Main;
