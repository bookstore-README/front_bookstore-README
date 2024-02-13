import { ReactEventHandler } from 'react';

interface ShippingOptionRadioProps {
  isDefault: boolean;
  handleOptionChange: ReactEventHandler;
}
function ShippingOptionRadio({
  isDefault,
  handleOptionChange,
}: ShippingOptionRadioProps) {
  return (
    <div className="mb-8 flex h-26 items-center">
      <div className="flex-center inline-flex">
        <span className="mr-45 whitespace-nowrap text-18 font-bold mobile:mr-43">
          배송지
        </span>
        <input
          type="radio"
          id="default"
          name="addressOption"
          value="default"
          checked={isDefault}
          onChange={handleOptionChange}
          className="flex-center mr-10 inline-flex h-20 w-20"
        />
      </div>
      <label htmlFor="default" className="mr-20 whitespace-nowrap">
        기본 배송지
      </label>
      <div className="flex-center inline-flex">
        <input
          type="radio"
          id="new"
          name="addressOption"
          value="new"
          checked={!isDefault}
          onChange={handleOptionChange}
          className="flex-center mr-10 inline-flex h-20 w-20"
        />
        <label htmlFor="new" className="whitespace-nowrap">
          신규 입력
        </label>
      </div>
    </div>
  );
}

export default ShippingOptionRadio;