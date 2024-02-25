import { useGetMember } from '@/api/member';
import { notify } from '@/components/toast/toast';
import useCalculateProductsPrice from '@/hooks/common/useCalculateProductsPrice';
import useCalculateTotalPrice from '@/hooks/common/useCalculateTotalPrice';
import { useRouter } from 'next/router';
interface PaymentButtonProps {
  isAllChecked?: boolean;
}

interface response {
  success: boolean;
}
function PaymentButton({ isAllChecked }: PaymentButtonProps) {
  const router = useRouter();
  const bookPrice = useCalculateProductsPrice();
  const delivery = bookPrice > 30000 ? 0 : 3000;
  const totalPrice = useCalculateTotalPrice({
    delivery: delivery,
    discount: 0,
  });
  // 결제창 함수
  function kakaoPay(useremail: string, username: string) {
    if (typeof window !== 'undefined') {
      const IMP = window.IMP;
      const today = new Date();
      const hours = today.getHours(); // 시
      const minutes = today.getMinutes(); // 분
      const seconds = today.getSeconds(); // 초
      const milliseconds = today.getMilliseconds();
      const makeMerchantUid =
        `${hours}` + `${minutes}` + `${seconds}` + `${milliseconds}`;

      IMP.init('imp33057768'); // 가맹점 식별코드
      IMP.request_pay(
        {
          pg: 'kakaopay.TC0ONETIME', // PG사 코드표에서 선택
          pay_method: 'card', // 결제 방식
          merchant_uid: 'IMP' + makeMerchantUid, // 결제 고유 번호
          name: '리드미', // 제품명
          amount: totalPrice, // 가격
          buyer_email: useremail,
          buyer_name: username,
          m_redirect_url:
            window.location.protocol +
            '//' +
            window.location.host +
            '/paymented', //TODO: 모바일 결제 시 이동페이지, 추후 수정
        },
        async function (rsp: response) {
          if (rsp.success) {
            //결제 성공시
            console.log(rsp + '결제성공');
            router.push('/paymented');
            //결제 성공시 프로젝트 DB저장 요청
          } else {
            // 결제 실패시
            alert('결제에 실패했습니다.');
          }
        },
      );
    }
  }
  const { data } = useGetMember();
  // 결제 함수 호출
  function handlePaymentButtonClick() {
    if (isAllChecked) {
      const user_email = data.email;
      const username = '안윤진';
      kakaoPay(user_email, username);
    } else {
      notify({
        type: 'error',
        text: '모든약관에 동의하셔야 합니다. ✅',
      });
    }
  }

  return (
    <>
      <div className="borer-primary border-t-1 fixed bottom-0 left-0 z-[100] w-full border bg-white px-40 py-10 pc:hidden">
        <button
          className="flex-center h-50 w-full rounded border bg-white "
          type="submit"
          onClick={handlePaymentButtonClick}>
          <div className="flex-center h-50 w-full bg-primary text-white">
            {totalPrice.toLocaleString()}원 결제하기
          </div>
        </button>
      </div>

      <button
        className="flex-center h-50 w-full rounded border-t  border-gray-1 bg-primary text-white mobile:hidden tablet:hidden"
        type="submit"
        onClick={handlePaymentButtonClick}>
        {totalPrice.toLocaleString()}원 결제하기
      </button>
    </>
  );
}

export default PaymentButton;
