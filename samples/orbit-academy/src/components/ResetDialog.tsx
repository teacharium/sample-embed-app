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
        <button type="button" className="btn btn--back btn--sm" onClick={onCancel}>
          Keep my progress
        </button>
        <button type="button" className="btn btn--danger btn--sm" onClick={onConfirm}>
          Yes, reset
        </button>
      </>
    }
  >
    <p>
      This deletes your unfinished attempt and every finished attempt saved in
      this browser. You can't undo it.
    </p>
  </Modal>
);
