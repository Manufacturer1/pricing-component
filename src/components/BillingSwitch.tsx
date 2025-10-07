import Switch from "react-switch";
import { useState } from "react";

const BillingSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm text-blue-custom-graysh font-semibold text-start`}
      >
        Monthly Billing
      </span>
      <Switch
        onChange={setChecked}
        onColor="#10d5c2"
        offColor="#dbe0f0"
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        width={50}
      />
      <span
        className={`flex flex-row items-end gap-1 text-sm text-end text-blue-custom-graysh font-semibold`}
      >
        Yearly Billing
        <div className="text-xs bg-gray-custom-light py-1 px-2 rounded-full">
          <span className="text-xs text-red-custom-light">-25%</span>
        </div>
      </span>
    </div>
  );
};

export default BillingSwitch;
