import "./PromotionWindow.css";
import moment from "moment";
import Col from "react-bootstrap/Col";

function PromotionWindow({ promotionWindowDate, currentDate }) {
  const promotionWindowImage = () => {
    if (promotionWindowDate === currentDate) {
      return (
        <>
          <img src="assets/SOLE-window.png" alt="calendar window" />
          <div class="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </>
      );
    } else if (promotionWindowDate < currentDate) {
      return (
        <>
          <img src="assets/SOLE-window-pin.png" alt="calendar window" />
          <div class="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </>
      );
    } else {
      return (
        <>
          <img src="assets/SOLE-window-locked.png" alt="calendar window" />
          <div class="bottom-right">
            {moment(promotionWindowDate).format("DD")}
          </div>
        </>
      );
    }
  };

  return <div className="promotion-window-col">{promotionWindowImage()}</div>;
}

export default PromotionWindow;
