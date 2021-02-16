import { useEffect, useState } from "react";
import "./Main.css";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PromotionWindow from "../../components/PromotionWindow/PromotionWindow";
import PromotionModal from "../../components/PromotionModal/PromotionModal";
import config from "../../config.json";


function Main() {
  window.history.scrollRestoration = "manual";      //I added this to stop browser recalling last scroll location - Calum.
 
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
      <>

      <Button
        key={index}
        id={promotionWindow.Date}
        onClick={handleShow}
        className={(promotionWindow.Date !== currentDate) ? "promotion-window-button" : "promotion-window-button-current-date"}
      >
        <PromotionWindow
          currentDate={currentDate}
          promotionWindowDate={moment(promotionWindow.Date)}
        />
      </Button>
      </>
    );
  });

  useEffect(() => {        
    if (window.matchMedia('(max-width: 600px)').matches) {                     //If mobile/vertical view is in effect                
    document.getElementById(currentDate).scrollIntoView();                     //Scrolls to the current day.
    }
  })

  return (
    <>
      <Container fluid className="main-container">
      <Row className="promotion-window-container">{promotionWindows}</Row>
      <PromotionModal show={show} handleClose={handleClose} />
    </Container>
    </>
  );
}

export default Main;
