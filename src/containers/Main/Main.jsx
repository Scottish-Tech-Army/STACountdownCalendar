import { useState, useEffect } from 'react';
import './Main.css';
import PromotionWindow from '../../components/PromotionWindow/PromotionWindow';
import PromotionModal from '../../components/PromotionModal/PromotionModal';
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import config from '../../config.json';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

function Main() {
  gsap.registerPlugin(ScrollToPlugin);

  window.history.scrollRestoration = 'manual'; //Stop browser recalling last scroll location

  // For Production
  // const currentDate = moment().format("YYYY-MM-DD");

  // For Development
  const currentDate = '2021-03-10';

  const allDays = config.Days;

  const [showPromotionalModal, setShowPromotionalModal] = useState(false);
  const [showCountdownTimer, setShowCountdownTimer] = useState(false);
  const [openWindow, setOpenWindow] = useState(null);

  const handleClose = () => {
    setShowPromotionalModal(false);
    setShowCountdownTimer(false);
    setOpenWindow(null);
  };

  function handleShowPromotion(day) {
    const openWindowDate = {
      day: day,
    };
    setOpenWindow(openWindowDate);
    setShowPromotionalModal(true);
  }

  function handleShowTimer(day) {
    const openWindowDate = {
      day: day,
    };
    setOpenWindow(openWindowDate);
    setShowCountdownTimer(true);
  }

  const promotionWindows = allDays.map((promotionWindow, index) => {
    return (
      <div
        key={index}
        onClick={() =>
          promotionWindow['days-date'] <= currentDate
            ? handleShowPromotion(promotionWindow)
            : handleShowTimer(promotionWindow)
        }
        className={
          promotionWindow['days-date'] !== currentDate
            ? 'promotion-window-button'
            : 'promotion-window-button promotion-window-button-current-date'
        }
      >
        {promotionWindow['days-date'] === currentDate ? ( //adds an invisible "anchor" div to current day for auto-scroll.
          <div
            className="promotion-window-button-anchor"
            id={`id-${promotionWindow['days-date']}`} //adding non-numerical ID for GSAP plugin to target
          ></div>
        ) : null}

        <PromotionWindow
          currentDate={currentDate}
          promotionWindowDate={promotionWindow['days-date']}
        />
      </div>
    );
  });

  useEffect(() => {
    //handles mobile/vertical view autoscroll
    if (window.matchMedia('(max-width: 811px)').matches) {
      gsap.to('#main-container', {
        duration: window.matchMedia('(max-width: 414px)').matches ? 2 : 1.5, //different scroll speeds for breakpoints
        scrollTo: `#id-${currentDate}`,
        ease: 'inOut',
      });
    }
  });

  return (
    <div
      id="main-container"
      className="main-container"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/assets/SOLE-calendar-background.jpg'
        })`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="promotion-window-container">{promotionWindows}</div>
      <PromotionModal
        show={showPromotionalModal}
        handleClose={handleClose}
        currentDate={currentDate}
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
