import imageArchive from "../storages/imageStorage";
import InquiryModal from "./InquiryModal";
import "./ImageModal.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

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

  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade("image-modal-container-fade");
    return (() => {
      setFade("");
    })
  }, [])

  return (
    <div className={"image-modal-container " + fade}>
      {props.imgNum < 4 ? (
        <div className="imageModal">
          <div className="modalImageClass2">
            <img
              src={imageArchive[props.imgNum].img}
              onClick={() => {
                props.setImgModal(false);
                document.body.style.overflow = "unset";
              }}
              alt="modal img"
            />
          </div>

          <div className="img-modal-textbox2">
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
      ) : (
        <div className="imageModal">
          <div className="modalImageClass">
            <img
              src={imageArchive[props.imgNum].img}
              onClick={() => {
                props.setImgModal(false);
                document.body.style.overflow = "unset";
              }}
              alt="modal img"
            />
          </div>

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
      )}

      {inquiryModal == true ? (
        <InquiryModal setInquiryModal={setInquiryModal} />
      ) : null}
    </div>
  );
}

export default ImageModal;
