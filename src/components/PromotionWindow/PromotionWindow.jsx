import "./PromotionWindow.css";
import Col from "react-bootstrap/Col";

function PromotionWindow({ day, date, month, year }) {
  return (
    <Col>
      <span className="promotion-window">
        <span className="promotion-window-day-text">{day}</span>
        <span className="promotion-window-date">{date}</span>
        <span className="promotion-window-date-text">{month}, {year}</span>
      </span>
    </Col>
  );
}

export default PromotionWindow;
