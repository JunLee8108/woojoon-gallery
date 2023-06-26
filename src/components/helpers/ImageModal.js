import imageArchive from "../storages/imageStorage";
import "./ImageModal.css";

function ImageModal(props) {
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
              <button>Inquiry</button>
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
    </>
  );
}

export default ImageModal;
