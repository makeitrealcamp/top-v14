
import { Button, Modal } from 'react-bootstrap';

export const EditTaskModalForm = ({ show, cancel, save }) => {
  return (
    <>
      <Modal show={show} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
