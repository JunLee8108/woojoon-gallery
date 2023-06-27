import imageArchive from "../storages/imageStorage";
import InquiryModal from "./InquiryModal";
import "./ImageModal.css";
import { useState } from "react";

function ImageModal(props) {
  let [inquiryModal, setInquiryModal] = useState(false);

  const inquiryButton = () => {
    if (inquiryModal) {
      setInquiryModal(false);
      document.body.style.overflow = "unset";
    } else {
      setInquiryModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="imageModal">
        <img
          src={imageArchive[props.imgNum].img}
          onClick={() => {
            props.setImgModal(false);
            document.body.style.overflow = "unset";
          }}
          alt="modal img"
        />
        <div className="img-modal-textbox">
          <div className="img-modal-sub-textbox">
            <h2>
              {imageArchive[props.imgNum].name}{" "}
              <span style={{ fontSize: "14px" }}>
                ({imageArchive[props.imgNum].year})
              </span>
            </h2>
            <p>{imageArchive[props.imgNum].description}</p>
          </div>
          <div className="img-modal-button-container">
            <div className="img-modal-button-flexbox1">
              <button
                onClick={() => {
                  inquiryButton();
                }}
              >
                Inquiry
              </button>
            </div>
            <div className="img-modal-button-flexbox2">
              <button
                onClick={() => {
                  props.setImgModal(false);
                  document.body.style.overflow = "unset";
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {inquiryModal == true ? <InquiryModal setInquiryModal={setInquiryModal}/> : null}
    </>
  );
}

export default ImageModal;
