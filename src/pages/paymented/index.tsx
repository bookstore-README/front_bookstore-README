import OrderCompletedSection from '@/components/container/orderCompletedSection';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import { deliveryIdAtom } from '@/store/deliveryInfo';
import { useAtom } from 'jotai';
import { useGetDelivery } from '@/api/delivery';

function Paymented() {
  const [deliveryId, setDeliveryId] = useAtom(deliveryIdAtom);
  const data = useGetDelivery(deliveryId);
  return (
    <div className="flex justify-center px-60 py-40 mobile:px-15 mobile:py-20">
      <OrderCompletedSection
        name={data?.data?.name}
        phone={data?.data?.phone}
        address={data?.data?.address}
        message={data?.data?.message}
        paymentAmount={data?.data?.paymentAmount}
        paymentMethod={data?.data?.paymentMethod}
        bookData={data?.data?.orderDto?.orderBook}
      />
    </div>
  );
}

export default Paymented;

Paymented.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
