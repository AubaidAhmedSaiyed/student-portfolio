function Spinner() {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner"></div>

      <p className="loading-text">
        Loading Projects
        <span className="loading-dots"></span>
      </p>
      

      <span className="sr-only">Loading</span>
    </div>
  );
}

export default Spinner;