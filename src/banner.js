import "./style/banner.css";
import image1 from "./assets/leaf+1.png";
function Banner() {
    const title = "La maison jungle"
    return (
        <div className="lmj-banner"><h1 className="lmj-title">{title.toUpperCase()}</h1><img className="lmj-logo" src={image1}></img></div>
    )
  }
  export default Banner;
