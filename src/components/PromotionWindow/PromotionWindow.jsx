import "./PromotionWindow.css";
import Col from "react-bootstrap/Col";

function PromotionWindow({ promotionWindowDate, currentDate }) {

  return (
    <Col>
      <span className="promotion-window">
        <span className="promotion-window-day-text">
          {promotionWindowDate.format("dddd")}
        </span>
        <span className="promotion-window-date">
          {promotionWindowDate.format("DD")}
        </span>
        <span className="promotion-window-date-text">
          {promotionWindowDate.format("MMMM")},{" "}
          {promotionWindowDate.format("YYYY")}
        </span>
      </span>
    </Col>
  );
}

export default PromotionWindow;
