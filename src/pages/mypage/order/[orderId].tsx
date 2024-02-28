import { useGetDelivery } from '@/api/delivery';
import OrderCompletedSection from '@/components/container/orderCompletedSection';
import MainLayout from '@/components/layout/mainLayout';
import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DeliveryItem } from '@/types/api/delivery';

function MyPageOrderDetail() {
  const { query } = useRouter();
  const [deliveryData, setDeliveryData] = useState<DeliveryItem>();
  const { data } = useGetDelivery(Number(query?.orderId));

  useEffect(() => {
    setDeliveryData(data);
  }, [data]);

  if (!deliveryData) return null;

  return (
    <OrderCompletedSection
      paymentDetail={false}
      name={deliveryData.name}
      phone={deliveryData.phone}
      address={deliveryData.address}
      message={deliveryData.message}
      paymentAmount={deliveryData.paymentAmount}
      paymentMethod={deliveryData.paymentMethod}
      bookData={deliveryData.orderDto.orderBook}
    />
  );
}

export default MyPageOrderDetail;

MyPageOrderDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
