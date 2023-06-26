import { useState } from "react";
import "./HomeSection.css";
import imageArchive from "../storages/imageStorage";
import ImageModal from "./ImageModal";

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
      console.log(e);
    }
  };

  return (
    <div className="home-entire-container">
      <div className="home-top-textbox display-flex-center text-center">
        <h2>Fine Art Painter,</h2>
        <h1>Woojoon Kim</h1>
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
                    alt="artwork"
                  ></img>
                  <h3 className="text-center">{imageArchive[index].name}</h3>
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
                  <h3 className="text-center">{imageArchive[index].name}</h3>
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
