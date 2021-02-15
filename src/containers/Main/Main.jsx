import { useState } from "react";
import "./Main.css";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PromotionWindow from "../../components/PromotionWindow/PromotionWindow";
import PromotionModal from "../../components/PromotionModal/PromotionModal";
import config from "../../config.json";

function Main() {
  const allDays = config.days;

  // For Production
  // const currentDate = moment().format("YYYYMMDD");

  // For Development
  const currentDate = "20210210";

  const [show, setShow] = useState(false);
  // const [openWindow, setOpenWindow] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const promotionWindows = allDays.map((promotionWindow, index) => {
    return (
      <Button
        key={index}
        onClick={handleShow}
        className={(promotionWindow.Date !== currentDate) ? "promotion-window-button" : "promotion-window-button-current-date"}
      >
        <PromotionWindow
          currentDate={currentDate}
          promotionWindowDate={moment(promotionWindow.Date)}
        />
      </Button>
    );
  });

  return (
    <Container fluid className="main-container">
      <Row className="promotion-window-container">{promotionWindows}</Row>
      <PromotionModal show={show} handleClose={handleClose} />
    </Container>
  );
}

export default Main;
