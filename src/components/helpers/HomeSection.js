import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import "./HomeSection.css";
import imageArchive from "../storages/imageStorage";
import ImageModal from "./ImageModal";
import Navbar from "./Navbar";

function HomeSection() {
  let [imgModal, setImgModal] = useState(false);
  let [imgNum, setImgNum] = useState(0);

  const showModal = (e) => {
    if (imgModal) {
      setImgModal(false);
      document.body.style.overflow = "unset";
    } else {
      setImgNum(e);
      document.body.style.overflow = "hidden";
      setImgModal(true);
    }
  };

  return (
    <div className="home-entire-container">
      <Navbar imgModal={imgModal} />

      <div className="home-top-textbox display-flex-center text-center">
        <h2>Fine Art Painter,</h2>
        <h1>Woojoon Kim <FontAwesomeIcon icon={faPenNib} /></h1>
      </div>

      <div className="home-mid-container display-flex-center">
        {imageArchive.map(function (image, index) {
          return (
            <>
              {index > 3 ? (
                <div className="home-mid-flexbox-row" key={index}>
                  <img
                    src={imageArchive[index].img}
                    onClick={() => {
                      showModal(imageArchive[index].id);
                    }}
                    loading="lazy"
                    alt="artwork"
                  ></img>
                  <h4 className="text-center">{imageArchive[index].name}</h4>
                </div>
              ) : (
                <div className="home-mid-flexbox" key={index}>
                  <img
                    src={imageArchive[index].img}
                    onClick={() => {
                      showModal(imageArchive[index].id);
                    }}
                    alt="artwork"
                  />
                  <h4 className="text-center">{imageArchive[index].name}</h4>
                </div>
              )}
            </>
          );
        })}
      </div>

      {imgModal == true ? (
        <ImageModal imgNum={imgNum} setImgModal={setImgModal} />
      ) : null}
    </div>
  );
}

export default HomeSection;