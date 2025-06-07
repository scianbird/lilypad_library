import "./FullscreenImages.css";
export default function FullscreenImages(props) {
  return (
    <>
      <img
        src={props.currentPhoto}
        alt={props.currentAltTag}
        className="fullscreenIMG"
      />
    </>
  );
}
