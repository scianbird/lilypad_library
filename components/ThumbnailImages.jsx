import "./ThumbnailImages.css";

//

export default function ThumbnailImages(props) {
  return (
    <>
      <img
        src={props.url}
        alt={props.alt}
        onClick={props.onClick}
        className="thumbnailImageCSS"
      />
    </>
  );
}
