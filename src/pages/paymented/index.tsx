import OrderCompletedSection from '@/components/container/orderCompletedSection';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';

function Paymented() {
  return (
    <div className="flex justify-center px-60 py-40 mobile:px-15 mobile:py-20">
      <OrderCompletedSection />
    </div>
  );
}

export default Paymented;

Paymented.getLayout = function getLayout (page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}