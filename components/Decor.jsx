//originally, I wanted this to hold information about who took the image and maybe the alt description, but I couldn't figure out a way to pass the props..I decided to keep it in anyway as an example of conditional rendering
import "./decorCSS.css";
import "./decorCSS2.css";
export default function Decor() {
  return (
    <>
      <img src="/cattails_icon.svg" className="decorCSS" />
      <img src="/cattails_icon.svg" className="decorCSS2" />
    </>
  );
}
