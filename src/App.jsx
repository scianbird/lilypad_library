import "./App.css";
import "/components/thumbnailGallery.css";
import { useEffect, useState } from "react"; // I originally styled with tailwind, but as the app grew it became a little easier to spy mistakes in pure css files that I recognised the language in - I aim to use tailwind in a smaller project during self reflection time next week
import ThumbnailImages from "/Components/ThumbnailImages";
import FullscreenImages from "/Components/FullscreenImages";
import Decor from "/Components/Decor";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [photos, setPhoto] = useState([]);
  let [selectedPhoto, setselectedPhoto] = useState("https://picsum.photos/500"); //adding an image that is only accessible once you first load in - I struggled to add a class to this in order to size it (the image itself was massive), so I ended up adding a local file so I could be sure that the alt tag would always be correct on load.
  let [selectedAltTag, setAltTag] = useState(
    "A photo of purple-petaled lotus flowers growing in a serene pond"
  );

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(`${import.meta.env.VITE_API}`); //this is hiding "https://api.unsplash.com/search/photos?query=pond+animals&client_idME"
      const data = await response.json();
      console.log(data.results);
      setPhoto(data.results);
    }
    getPhotos();
  }, []);

  function handleClick(currentPhoto, currentAltTag) {
    setselectedPhoto((selectedPhoto = currentPhoto));
    setAltTag((selectedAltTag = currentAltTag));
    console.log("click!"); //this console log was to test the function, in order to help me tell if there was a problem with how I was setting the image variables or if the problem was with the function itself
  }

  return (
    <div className="mainDiv">
      <div className="thumbnailGallery">
        {photos.map(function (data) {
          //I don't know how to pass these props without mapping - I keep running into "data is not defined" because of the scope of the data const (I believe) but I'm also not sure how to restructure my code so that it is all accessible to one another and working to return what I need it to.. (thinking) an aim for the future
          return (
            <ThumbnailImages
              key={data.id}
              url={data.urls.full}
              alt={data.alt_description}
              onClick={() => handleClick(data.urls.full, data.alt_description)}
            />
          );
        })}
      </div>

      <div>
        <button onClick={() => setIsVisible(!isVisible)} className="buttonCSS">
          Decorate!
        </button>
        {isVisible && <Decor />}
      </div>
      {/* this was done with heavy reference from one of our workshop examples - it allowed me to add the conditional rendering to the image / control it with the button. Although I had originally planned to conditionally render something else, I left this in with just a simple image in order to add a little fun to the app... */}

      <div>
        <FullscreenImages
          currentPhoto={selectedPhoto}
          currentAltTag={selectedAltTag}
        />
      </div>
    </div>
  );
}
