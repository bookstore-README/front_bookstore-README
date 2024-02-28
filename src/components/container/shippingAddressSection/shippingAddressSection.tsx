import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
import { useGetMember } from '@/api/member';
import { deliveryInfoAtom } from '@/store/deliveryInfo';
import { useAtom } from 'jotai';
import useAddressSplitter from '@/hooks/common/useAddressSplitter';
import { notify } from '@/components/toast/toast';

function ShippingAddressSection() {
  const { data } = useGetMember(); // data를 따로 추출합니다.

  const [isDefault, setIsDefault] = useState(false); // 기본값을 false로 설정합니다.
  const [deliveryInfo, setDeliveryInfo] = useAtom(deliveryInfoAtom);
  const handleOptionChange = () => {
    setIsDefault(!isDefault);
    if (!isDefault) {
      // 기본값이 false일 때 실행합니다.
      if (!data?.address) {
        notify({
          type: 'error',
          text: '기본 배송지 데이터가 없어요 😭',
        });
      } else {
        setDeliveryInfo({
          address: data?.address,
          name: data?.name,
          phone: data?.phone,
          isDefault: true,
        });
      }
    } else {
      setDeliveryInfo((prevDeliveryInfo) => ({
        ...prevDeliveryInfo,
      }));
    }
  };

  const addressLine = useAddressSplitter({
    address: data?.address,
  });
  return (
    <div className="flex w-full flex-col gap-y-12 text-16 pc:mx-93">
      <div className="mb-28  mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput isDefault={isDefault} value={data?.name} />
      <PhoneNumberInput isDefault={isDefault} value={data?.phone} />
      <AddressInput
        isDefault={isDefault}
        addressLines={[addressLine[0], addressLine[1], addressLine[2]]}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
