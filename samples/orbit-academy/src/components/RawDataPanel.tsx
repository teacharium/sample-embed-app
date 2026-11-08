import { useMemo, useState } from "react";
import { progressStore, type StoredProgress } from "../lib/progressStore";
import { Modal } from "./Modal";

interface RawDataPanelProps {
  stored: StoredProgress;
  onClose: () => void;
}

/** Shows exactly what is saved in localStorage, with copy and download. */
export const RawDataPanel = ({ stored, onClose }: RawDataPanelProps) => {
  const json = useMemo(() => JSON.stringify(stored, null, 2), [stored]);
  const [copied, setCopied] = useState(false);
  const sizeKb = (new Blob([json]).size / 1024).toFixed(1);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard blocked; the text is still selectable.
    }
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "teacharium-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Modal
      title="Saved data"
      onClose={onClose}
      wide
      footer={
        <>
          <button type="button" className="btn btn--back btn--sm" onClick={copy}>
            {copied ? "Copied!" : "Copy JSON"}
          </button>
          <button type="button" className="btn btn--go btn--sm" onClick={download}>
            Download .json
          </button>
        </>
      }
    >
      <dl className="data-summary">
        <div>
          <dt>localStorage key</dt>
          <dd>
            <code>{progressStore.storageKey}</code>
          </dd>
        </div>
        <div>
          <dt>Unfinished attempt</dt>
          <dd>{stored.inProgress ? "Yes" : "No"}</dd>
        </div>
        <div>
          <dt>Finished attempts</dt>
          <dd>{stored.attempts.length}</dd>
        </div>
        <div>
          <dt>Size</dt>
          <dd>{sizeKb} KB</dd>
        </div>
      </dl>
      <p className="muted">
        <code>inProgress</code> is the player's <code>SessionState</code> from{" "}
        <code>onStepChange</code>. Each attempt keeps the{" "}
        <code>CompletionResult</code> score, items and final{" "}
        <code>sessionState</code> used for review.
      </p>
      <pre className="json-view" tabIndex={0}>
        {json}
      </pre>
    </Modal>
  );
};
