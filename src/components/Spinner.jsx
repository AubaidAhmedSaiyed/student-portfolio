function Spinner() {
  return (
    <div className="spinner" role="status" aria-live="polite">
      <span className="visually-hidden">Loading repositories…</span>
    </div>
  );
}

export default Spinner;
