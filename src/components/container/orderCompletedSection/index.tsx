import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import InfoCard from '@/components/card/infoCard';
import TitleContentCard from '@/components/card/titleContentCard';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
import { DELIVERY_INFO, PAYMENT_INFO } from 'src/constants/payment';
import TotalPriceCard from '@/components/card/totalPaymentCard';

//TODO : data 받을 예정. 예시임
const DcontentData = [
  '리드미',
  '01012345678',
  '(12345) 경남 성남시 분당구 불정로 6 그린팩토리',
  '부재 시 경비실에 맡겨주세요',
];
const PcontentData = ['신용카드', '22,500원'];
const orderDate = '2024.02.05';

function OrderCompletedSection() {
  return (
    <div className="flex w-[1084px] flex-col gap-60 mobile:w-330 tablet:w-[688px] ">
      <InfoCard
        title="결제가 완료되었습니다!"
        content={`주문일자 ${orderDate}`}
      />
      <div className="flex gap-34">
        <div className="flex w-[618px] flex-col gap-60 mobile:w-full tablet:w-full">
          <TitleContentCard
            title="배송지 정보"
            titleData={DELIVERY_INFO}
            contentData={DcontentData}
          />
          <TitleContentCard
            title="결제 정보"
            titleData={PAYMENT_INFO}
            contentData={PcontentData}
          />
          <BookPaymentCardList
            bookData={bookOrderTestData.orderData[0].bookData}
            label="주문상품"
          />
          <div className="pc:hidden w-full">
            <TotalPriceCard checkbox={false} button={false} color='text-green' />
          </div>
        </div>
        <div className="mobile:hidden tablet:hidden pc:mt-47 pc:h-screen w-full">
          <TotalPriceCard checkbox={false} button={false} color='text-green'/>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletedSection;
