import BookOrderEmptyCard from '@/components/card/bookOrderCard/bookOrderEmptyCard';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import {
  bookOrderTestData,
  orderOverViewData,
} from '@/pages/api/mock/bookOrderMock';
import OrderDate from '@/components/container/orderDate/orderDate';
import { useState } from 'react';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const onSelectedItem = (menu: string) => setSelectedItem(menu);
  return (
    <MyOrderPageLayout
      orderDate={<OrderDate />}
      overview={<OrderOverView orderView={orderOverViewData.orderView} />}
      main={
        orderData ? (
          <BookOrderCardList orderData={orderData} />
        ) : (
          <BookOrderEmptyCard />
        )
      }
    />
  );
}
export default MyOrderPage;
