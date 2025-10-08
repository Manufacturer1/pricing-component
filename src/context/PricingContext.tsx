import { createContext, useContext, useReducer } from "react";
import { pricingData, type PricingType } from "../data/pricingData";

// type for states
type PricingState = {
  sliderValue: number;
  isYearly: boolean;
};
type ResultType = {
  pageViews: String;
  price: number;
  finalPrice: number;
};
//type for actions
type PricingAction =
  | { type: "SET_SLIDER_VALUE"; payload: number }
  | { type: "TOGGLE_BILLING" };

type PriceContextType = {
  state: PricingState;
  currentPricing: ResultType;
  setSliderValue: (value: number) => void;
  toggleBilling: () => void;
};

// initial state
const initialState: PricingState = {
  sliderValue: 2,
  isYearly: false,
};

const pricingReducer = (
  state: PricingState,
  action: PricingAction
): PricingState => {
  switch (action.type) {
    case "SET_SLIDER_VALUE":
      return { ...state, sliderValue: action.payload };
    case "TOGGLE_BILLING":
      return { ...state, isYearly: !state.isYearly };
    default:
      return state;
  }
};

// Context
const PricingContext = createContext<PriceContextType | undefined>(undefined);

// Provider type
type ProviderProps = {
  children: React.ReactNode;
};
//Provider
export const PricingProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(pricingReducer, initialState);

  const setSlider = (value: number) => {
    dispatch({ type: "SET_SLIDER_VALUE", payload: value });
  };
  const toggleBilling = () => {
    dispatch({ type: "TOGGLE_BILLING" });
  };

  const basePrice: PricingType = pricingData[state.sliderValue];
  const discount = state.isYearly ? 0.25 : 0; // 25% discount for yearly
  const finalPrice = basePrice.price * (1 - discount);

  const currentPricing: ResultType = {
    pageViews: basePrice.pageViews,
    price: basePrice.price,
    finalPrice: finalPrice,
  };

  return (
    <PricingContext.Provider
      value={{
        state,
        currentPricing,
        setSliderValue: setSlider,
        toggleBilling,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

// custom hook
export const usePricing = () => {
  const context = useContext(PricingContext);

  if (!context) {
    throw new Error("usePricing must be used withing PricingProvider");
  }
  return context;
};
