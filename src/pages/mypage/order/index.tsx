import BookOrderEmptyCard from '@/components/card/bookOrderCard/bookOrderEmptyCard';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderDate from '@/components/container/orderDate/orderDate';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import {
  bookOrderTestData,
  orderOverViewData,
} from '@/pages/api/mock/bookOrderMock';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  return (
    <MyOrderPageLayout
      // orderDate={<OrderDate />}
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
