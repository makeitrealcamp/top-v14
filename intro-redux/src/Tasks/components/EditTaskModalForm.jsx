
import { Button, Modal } from 'react-bootstrap';
import { TaskFormView } from './TaskFormView';

export const EditTaskModalForm = ({ show, cancel, save, title, description, handleTitle, handleDescription }) => {
  return (
    <>
      <Modal show={show} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskFormView
            editMode={show}
            handleTitle={handleTitle}
            handleDescription={handleDescription}
            handleSubmit={save}
            title={title}
            description={description}
          />
        </Modal.Body>
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
