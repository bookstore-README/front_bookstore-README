import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
import { MOCK_ADDRESS } from '@/constants/address';

/*
TODO
기본 배송지 선택 시 api get 요청 연결
*/
function ShippingAddressSection() {
  const [isDefault, setIsDefault] = useState(true);
  const handleOptionChange = (event: { target: { value: string } }) => {
    setIsDefault(event.target.value === 'default');
  };


  return (
    <div className="flex w-5/6 flex-col gap-y-12 text-16 pc:mx-93 pc:w-1/2">
      <div className="mb-28  mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput isDefault={isDefault} value={MOCK_ADDRESS.recipient} />
      <PhoneNumberInput
        isDefault={isDefault}
        value={MOCK_ADDRESS.phoneNumber}
      />
      <AddressInput
        isDefault={isDefault}
        addressLines={[
          MOCK_ADDRESS.addressLine1,
          MOCK_ADDRESS.addressLine2,
          MOCK_ADDRESS.addressLine3,
        ]}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
