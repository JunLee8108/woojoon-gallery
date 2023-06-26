import "./InquiryModal.css";

function InquiryModal(props) {
  return (
    <>
      <div className="inquiry-modal-container">
        <form>
          <div className="inquiry-name">
            <label htmlFor="firstName">
              <h3>First Name</h3>
            </label>
            <input type="text" id="firstName" />
          </div>
          <div className="inquiry-name">
            <label htmlFor="lastName">
              <h3>Last Name</h3>
            </label>
            <input type="text" id="lastName" />
          </div>
          <div className="inquiry-message">
            <label htmlFor="lastName">
              <h3>Message</h3>
            </label>
            <textarea></textarea>
          </div>
          <div className="inquiry-button">
            <div className="inquiry-button1">
              <button type="button" onClick={() => {
                props.setInquiryModal(false);
                document.body.style.overflow = "unset";
              }}>Close</button>
            </div>
            <div className="inquiry-button2">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default InquiryModal;
