import "./PromotionModal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PromotionModal({ show, handleClose }) {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Local Retailer</h1>
          <h2>Date</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src="/assets/shutterstock_709738510.jpg" alt="placeholder"/>
        <hr />
        <h2>Promotion Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          pellentesque tellus bibendum ipsum cursus, vel sodales ante pretium.
          In efficitur consectetur congue.
        </p>
        <p>
          Vestibulum consectetur ut dui ac vehicula. Integer quis augue vitae mi
          pulvinar scelerisque at vel dui. Ut dictum, massa a fringilla iaculis,
          sem odio egestas est, id tempus ex ligula ut eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose} className="modal-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PromotionModal;
