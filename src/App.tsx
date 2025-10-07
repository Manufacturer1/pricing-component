import pattern from "../images/bg-pattern.svg";
import circles from "../images/pattern-circles.svg";

function App() {
  return (
    <>
      <div className="w-full z-10">
        <div className="absolute z-[-10] top-0 h-[45vh] md:h-auto w-full">
          <img src={pattern} className="w-full h-full block" />
        </div>
        <div className="absolute z-[-5] left-[50%] translate-x-[-50%] top-10">
          <img src={circles} className="block" />
        </div>
        {/*Title*/}
        <div className="z-10 mt-20 flex flex-col items-center text-center">
          <h1 className="text-blue-custom-dark text-xl font-extrabold mb-2">
            Simple, traffic-based pricing
          </h1>
          <div className="flex flex-col space-y-1 text-blue-custom-graysh font-medium">
            <small>Sign-up for our 30-day trial.</small>
            <small>No credit card required.</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
