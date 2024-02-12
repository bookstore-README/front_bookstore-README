import CartPaymentModal from '@/components/modal/cart/cartPaymentModal';
import { WishListData } from '@/types/wishPageType';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';

type CartPaymentProps = {
  totalAmount: number;
  totalDiscount: number;
  bookTotalCount: number;
  selectedItemArr: WishListData[];
  wishListData: WishListData[];
};

function CartPayment({
  totalAmount,
  totalDiscount,
  bookTotalCount,
  selectedItemArr,
  wishListData,
}: CartPaymentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleAlertModalOpenClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const calculateDeliveryFee = (totalAmount: number, totalDiscount: number) => {
    return totalAmount - totalDiscount >= 30000 ? 3000 : 0;
  };

  const calculatePaymentFee = (totalAmount: number, totalDiscount: number) => {
    return (
      totalAmount -
      totalDiscount -
      calculateDeliveryFee(totalAmount, totalDiscount)
    );
  };

  return (
    <div
      className="sticky top-297 mt-107 flex h-fit w-340 flex-col rounded-[10px]
        border-2 border-solid border-gray-1 p-30 mobile:mb-165 mobile:mt-20 mobile:w-full mobile:p-20
        tablet:w-216 tablet:p-20">
      <div className="mb-20 flex justify-between">
        <span className="text-15 font-normal text-black">총 상품 금액</span>
        <span className="text-15 font-bold text-black">
          {totalAmount.toString().replace(THOUSAND_UNIT, ',')}원
        </span>
      </div>
      <div className="mb-20 flex justify-between">
        <span className="text-15 font-normal text-black">총 배송비</span>
        <span className="text-15 font-bold text-black">
          {calculateDeliveryFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="mb-30 flex justify-between">
        <span className="text-15 font-normal text-black">총 할인 금액</span>
        <span>{totalDiscount.toString().replace(THOUSAND_UNIT, ',')}원</span>
      </div>
      <div className="mb-40 flex justify-between mobile:mb-10">
        <span className="text-15 font-bold text-green">결제 금액</span>
        <span className="text-25 font-bold text-green">
          {calculatePaymentFee(totalAmount, totalDiscount)
            .toString()
            .replace(THOUSAND_UNIT, ',')}
          원
        </span>
      </div>
      <div className="w-full mobile:fixed left-0 bottom-0 mobile:px-15 mobile:py-10 bg-white">
        <button
          className="w-full text-center bg-green text-white rounded-[5px] py-15"
          onClick={() => {
            selectedItemArr.length
              ? // 결제페이지로 이동
                router.push('/')
              : handleAlertModalOpenClick();
          }}>
          결제하기({bookTotalCount})
        </button>
      </div>
      <CartPaymentModal
        wishListDataLength={wishListData.length}
        selectedItemArrLength={selectedItemArr.length}
        isModalOpen={isModalOpen}
        handleAlertModalOpenClick={handleAlertModalOpenClick}
      />
    </div>
  );
}
export default CartPayment;
