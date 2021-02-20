import "./PromotionModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselComponent from "../CarouselComponent/CarouselComponent.jsx";

function PromotionModal({
  show,
  handleClose,
  openWindowDescription,
  openWindowUrl,
  openWindowCouponCode
}) {
  const carouselContent = [
    { "media-type": "image", "media-url": "/assets/AdrianosFishAndChips.png" },
  ];

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="promotion-modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Adriano's, 137 High St, Dunbar EH42 1ES</h3>
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
        <Container className="promotional-modal-body">
          <Row>
            <Col>
              <CarouselComponent content={carouselContent} />
            </Col>
            <Col className="promotional-modal-detail">
              <span>
                <h1>10% Off @ Adrianos</h1>
              </span>
              <span className="promotional-modal-coupon-code">
                <h3>
                  Coupon Code: {openWindowCouponCode}
                  <FontAwesomeIcon icon={faCopy} className="copy-paste" />
                </h3>
              </span>
              <span className="promotional-modal-description">
                {openWindowDescription}
              </span>
              <h3>
                <a className="promotional-modal-url" href={openWindowUrl}>
                  Link to SOLE Scotland platform.{" "}
                </a>
              </h3>
              <span className="promotional-modal-terms">
                * Terms and conditions may apply.
              </span>
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

export default PromotionModal;
