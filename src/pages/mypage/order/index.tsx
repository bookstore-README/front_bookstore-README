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
import DropDown from '@/components/dropDown/dropDown';
import { ORDER_DROPDOWN_MENUS } from '@/constants/orderDropDownMenus';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const onSelectedItem = (menu: string) => setSelectedItem(menu);
  const onStartDate = (startDate: Date) => setStartDate(startDate);
  const onEndDate = (endDate: Date) => setEndDate(endDate);

  const person = {
    id: 1,
    name: '유저',
    isPurchased: false,
    firstPurchasedDate: new Date().toString(),
  };
  return (
    <MyOrderPageLayout
      dropDown={
        <DropDown
          menus={ORDER_DROPDOWN_MENUS}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
        />
      }
      orderDate={
        <OrderDate
          person={person}
          pastDate={selectedItem}
          startDate={startDate}
          endDate={endDate}
          setSelectedItem={setSelectedItem}
          setStartDate={onStartDate}
          setEndDate={onEndDate}
        />
      }
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
