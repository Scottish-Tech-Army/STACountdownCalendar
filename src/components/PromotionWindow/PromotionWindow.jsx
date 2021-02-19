import "./PromotionWindow.css";
import moment from "moment";

function PromotionWindow({ promotionWindowDate, currentDate }) {

  const promotionWindowImage = () => {
    if (promotionWindowDate === currentDate) {
      return (
        <>
          <img src="assets/SOLE-window.png" alt="calendar window" />
          <div className="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </>
      );
    } else if (promotionWindowDate < currentDate) {
      return (
        <>
          <img src="assets/SOLE-window-pin.png" alt="calendar window" />
          <div className="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </>
      );
    } else {
      return (
        <span className="locked-window">
          <img src="assets/SOLE-window-locked.png" alt="calendar window" />
          <div className="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </span>
      );
    }
  };

  return <div className="promotion-window-col">{promotionWindowImage()}</div>;
}

export default PromotionWindow;
