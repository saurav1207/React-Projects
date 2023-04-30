import { useState } from "react";
import "./components/style.css";

const images = [
  "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=500"
];
// This section defines the App component and initializes a state variable called current using the useState hook. The current variable represents the index of the currently displayed image in the images array. The component also defines two functions: nextSlide and prevSlide that update the current state variable when the user clicks on the right or left arrow, respectively.
export default function App() {
  const [current, setCurrent] = useState(0);


  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Image Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) => current === index && (
            <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
          )
        )}
      </div>
    </div>
  );
}



