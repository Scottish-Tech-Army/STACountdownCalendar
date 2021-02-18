import "./PromotionModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PromotionModal({ show, handleClose }) {
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
        <Container className="promotional-window-body">
          <Row>
            <Col>
              <img src="/assets/AdrianosFishAndChips.png" alt="placeholder" />
            </Col>
            <Col className="promotional-window-detail">
              <span>
                <h1>10% Off @ Adrianos</h1>
              </span>
              <span className="promotional-window-coupon-code">
                <h3>Coupon Code: WEGOTSOLE2021</h3>
                <FontAwesomeIcon icon={faCopy} className="copy-paste" />
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pellentesque tellus bibendum ipsum cursus, vel sodales ante
                pretium. In efficitur consectetur congue. Vestibulum consectetur
                ut dui ac vehicula. Integer quis augue vitae mi pulvinar
                scelerisque at vel dui.
              </span>
              <br />
              <span className="promotional-window-coupon-code">
                <a className="promotional-window-url" href="#">
                  Link to SOLE Scotland platform.{" "}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="sole-supplier-link"
                  />
                </a>
              </span>
              <br />
              <span>* Promotion ends on 15 March 2021.</span>
              <span>** Terms and conditions may apply.</span>
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
