import { checkItems } from "../data/checkList";
import BillingSwitch from "./BillingSwitch";
import Slider from "./Slider";
import checkIcon from "../../images/icon-check.svg";
import { usePricing } from "../context/PricingContext";

const Card = (): React.ReactNode => {
  const { currentPricing } = usePricing();

  return (
    <div className="bg-white md:max-w-[500px] z-10 top-[50vh] mx-auto md:mt-[100px] mt-[70px] w-[90%] shadow-md rounded-md">
      {/* Content section */}
      <div className="p-7">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center">
          <h3 className="text-blue-custom-graysh text-sm font-bold tracking-widest uppercase mb-5">
            {currentPricing.pageViews} pageviews
          </h3>
          <div className="w-full mb-4 md:hidden">
            <Slider />
          </div>
          <div className="flex items-center text-center gap-2 mb-8">
            <h1 className="text-blue-custom-dark text-4xl font-extrabold">
              ${currentPricing.finalPrice.toFixed(2)}
            </h1>
            <small className="text-blue-custom-graysh font-semibold text-base">
              / month
            </small>
          </div>
        </div>
        <div className="w-full mb-4 hidden md:block">
          <Slider />
        </div>
        <div className="mb-3 flex justify-center items-center">
          <BillingSwitch />
        </div>
      </div>
      <hr className="border-t border-gray-200 w-full h-1" />
      <div className="text-center p-7 flex flex-col md:flex-row justify-between md:items-center">
        <ul className="flex flex-col items-center md:items-start mb-5">
          {checkItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 leading-8 text-blue-custom-graysh text-sm font-semibold"
            >
              <img src={checkIcon} className="block" />
              <li>{item}</li>
            </div>
          ))}
        </ul>
        <button
          className="bg-blue-custom-dark text-blue-custom-pale 
        font-bold text-sm py-3 px-11 rounded-full hover:text-blue-custom-veryPale
        transition-colors duration-200"
        >
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default Card;
