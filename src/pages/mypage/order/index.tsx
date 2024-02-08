import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import DropDown from '@/components/dropDown/dropDown';
import Header from '@/components/header';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import {
  bookOrderTestData,
  orderOverViewData,
  personTestData,
} from '@/pages/api/mock/bookOrderMock';
import { PERIOD } from 'src/constants/dropDownMenu';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  return (
    <MyOrderPageLayout
      header={<Header isLoggedIn numItemsOfCart={1} />}
      overview={<OrderOverView orderView={orderOverViewData.orderView} />}
      dropDown={
        <DropDown menus={PERIOD} person={personTestData} orderDate={true} />
      }
      main={<BookOrderCardList orderData={orderData} />}
    />
  );
}
export default MyOrderPage;
