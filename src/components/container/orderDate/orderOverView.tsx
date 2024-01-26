import React from 'react';

type OrderOverViewProps = {
  orderView: {
    processing: number;
    shipping: number;
    completed: number;
    exchangeCompleted: number;
    purchased: number;
  };
};

function OrderOverView(props: OrderOverViewProps) {
  const delivery = props.orderView;
  return (
    <div className="w-[1080px] flex h-144 border-solid border-2 border-gray-1 px-90 py-40">
      <div className="flex justify-between w-[902px] rounded-[10px]">
        <div className="flex flex-col text-center text-gray-4 font-normal">
          <span>배송준비중</span>
          <span>{delivery.processing}</span>
        </div>
        <div className="flex flex-col text-center text-gray-4 font-normal">
          <span>배송중</span>
          <span>{delivery.shipping}</span>
        </div>
        d
        <div className="flex flex-col text-center text-gray-4 font-normal">
          <span>배송완료</span>
          <span>{delivery.completed}</span>
        </div>
        <div className="flex flex-col text-center text-gray-4 font-normal">
          <span>교환완료</span>
          <span>{delivery.exchangeCompleted}</span>
        </div>
        <div className="flex flex-col text-center text-gray-4 font-normal">
          <span>구매확정</span>
          <span>{delivery.purchased}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderOverView;
