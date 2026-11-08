import { Modal } from "./Modal";

interface ResetDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ResetDialog = ({ onConfirm, onCancel }: ResetDialogProps) => (
  <Modal
    title="Reset all progress?"
    onClose={onCancel}
    footer={
      <>
        <button type="button" className="btn btn--secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="btn btn--danger" onClick={onConfirm}>
          Delete saved data
        </button>
      </>
    }
  >
    <p>
      This permanently deletes the attempt in progress and every submission
      saved in this browser for Problem Set 3. This can't be undone.
    </p>
  </Modal>
);
