import Switch from "react-switch";
import { usePricing } from "../context/PricingContext";

const BillingSwitch = () => {
  const { state, toggleBilling } = usePricing();

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <span
        className={`text-sm text-blue-custom-graysh font-semibold text-start`}
      >
        Monthly Billing
      </span>
      <Switch
        onChange={toggleBilling}
        onColor="#10d5c2"
        offColor="#dbe0f0"
        uncheckedIcon={false}
        checkedIcon={false}
        checked={state.isYearly}
        width={50}
      />
      <span
        className={`flex flex-row items-end gap-1 text-sm text-end text-blue-custom-graysh font-semibold`}
      >
        Yearly Billing
        <div className="text-xs bg-gray-custom-light py-1 px-2 rounded-full">
          <span className="text-xs text-red-custom-light">
            -25% <span className="hidden md:inline">discount</span>
          </span>
        </div>
      </span>
    </div>
  );
};

export default BillingSwitch;
