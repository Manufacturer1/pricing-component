import sliderIcon from "../../images/icon-slider.svg";

const Slider = () => {
  return (
    <div className="w-full py-8">
      <div className="w-full h-3 relative rounded-full bg-blue-custom-emptySlider">
        <div className="absolute top-0 left-0 w-[50%] h-3 bg-cyan-custom-soft rounded-l-full"></div>
        <button className="slider-button">
          <img src={sliderIcon} alt="Slider" className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
