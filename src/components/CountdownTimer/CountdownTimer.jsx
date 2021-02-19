import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CountdownTimer({ show, handleClose, currentDate }) {

  const countdownDate = new Date("03/11/2021").getTime();

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const updateCountdown = () => {
      if (countdownDate) {
        // Get the current time
        const currentTime = new Date().getTime();

        // Get the time remaining until the countdown date
        const distanceToDate = countdownDate - currentTime;

        // Calculate days, hours, minutes and seconds remaining
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        // For visual appeal, add a zero to each number that's only one digit
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }

        // Set the state to each new time
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };

    setInterval(() => updateCountdown(), 1000);
  }, [countdownDate]);



  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="countdown-timer"
    >
      <Modal.Header className="countdown-timer-header">
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Oops, this Offer isn't available yet!</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/modal-background.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container className="countdown-timer-body">
          <Row className="countdown-wrapper">
            <Col className="time-section">
              <div className="time">{state.days || "0"}</div>
              <small className="time-text">Days</small>
            </Col>
            <Col className="time-section">
              <div className="time">:</div>
            </Col>
            <Col className="time-section">
              <div className="time">{state.hours || "00"}</div>
              <small className="time-text">Hours</small>
            </Col>
            <Col className="time-section">
              <div className="time">:</div>
            </Col>
            <Col className="time-section">
              <div className="time">{state.minutes || "00"}</div>
              <small className="time-text">Minutes</small>
            </Col>
            <Col className="time-section">
              <div className="time">:</div>
            </Col>
            <Col className="time-section">
              <div className="time">{state.seconds || "00"}</div>
              <small className="time-text">Seconds</small>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
          className="modal-button"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CountdownTimer;
