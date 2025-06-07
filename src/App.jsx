import "./App.css";
import { useEffect, useState } from "react";
import ThumbnailImages from "/Components/ThumbnailImages";
import FullscreenImages from "/Components/FullscreenImages";

export default function App() {
  const [photos, setPhoto] = useState([]);
  let [selectedPhoto, setselectedPhoto] = useState("https://picsum.photos/500");
  let [selectedAltTag, setAltTag] = useState(
    "A photo of purple-petaled lotus flowers growing in a serene pond"
  );

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(`${import.meta.env.VITE_API}`);
      const data = await response.json();
      console.log(data.results);
      setPhoto(data.results);
    }
    getPhotos();
  }, []);

  function handleClick(currentPhoto, currentAltTag) {
    setselectedPhoto((selectedPhoto = currentPhoto));
    setAltTag((selectedAltTag = currentAltTag));
    console.log("click!");
  }

  return (
    <div className="mainDiv">
      <div className="thumbnailcon" role="tablist">
        {photos.map(function (data) {
          return (
            <ThumbnailImages
              key={data.id}
              title={data.title}
              url={data.urls.full}
              alt={data.alt_description}
              onClick={() => handleClick(data.urls.full, data.alt_description)}
            />
          );
        })}
      </div>

      <div>
        <FullscreenImages
          currentPhoto={selectedPhoto}
          currentAltTag={selectedAltTag}
        />
      </div>
    </div>
  );
}
