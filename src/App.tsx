import pattern from "../images/bg-pattern.svg";
import circles from "../images/pattern-circles.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="w-full z-10">
        <div className="absolute z-[-10] top-0 h-[45vh] md:h-auto w-full">
          <img src={pattern} className="w-full h-full block" />
        </div>
        <div className="absolute z-[-5] left-[50%] translate-x-[-50%] top-2">
          <img src={circles} className="block" />
        </div>
        {/*Title*/}
        <div className="z-10 mt-10 flex flex-col items-center text-center">
          <h1 className="text-blue-custom-dark text-xl md:text-2xl font-extrabold mb-2">
            Simple, traffic-based pricing
          </h1>
          <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-y-0 md:text-base text-blue-custom-graysh font-medium">
            <small>Sign-up for our 30-day trial.</small>
            <small>No credit card required.</small>
          </div>
        </div>

        {/*Card*/}
        <div className="">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
