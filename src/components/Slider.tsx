import sliderIcon from "../../images/icon-slider.svg";
import { usePricing } from "../context/PricingContext";

const Slider = () => {
  const { state, setSliderValue } = usePricing();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  const percentage = (state.sliderValue / 4) * 100;

  return (
    <div className="w-full py-8">
      <div className="w-full h-3 relative rounded-full bg-blue-custom-emptySlider">
        <div
          className="absolute top-0 left-0 h-3 bg-cyan-custom-soft rounded-l-full transition-all duration-200"
          style={{ width: `${percentage}%` }}
        ></div>
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={state.sliderValue}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer z-10"
        />
        <button
          className="slider-button transition-all duration-200"
          style={{ left: `calc(${percentage}% - 1.75rem)` }}
        >
          <img src={sliderIcon} alt="Slider" className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
