import { ORDERSTATUS } from '@/constants/orderStatus';
import { OrderOverViewItem } from '@/types/deliveryType';
import React from 'react';

export type OrderOverViewProps = {
  orderView: OrderOverViewItem;
};

function OrderOverView(props: OrderOverViewProps) {
  const delivery = props.orderView!;

  return (
    <div className="flex-center h-144 max-w-[1080px] rounded-[10px] border-2 border-solid border-gray-1 px-90 py-40 mobile:h-85 mobile:p-20 tablet:p-40">
      <div className="flex w-[902px] justify-between rounded-[10px] text-20 text-black mobile:text-12">
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>{ORDERSTATUS.READY}</span>
          <span>{delivery[ORDERSTATUS.READY]}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>{ORDERSTATUS.DELIVERING}</span>
          <span>{delivery[ORDERSTATUS.DELIVERING]}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>{ORDERSTATUS.COMPLETE}</span>
          <span>{delivery[ORDERSTATUS.COMPLETE]}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>{ORDERSTATUS.EXCHANGE_AND_REFUND}</span>
          <span>{delivery[ORDERSTATUS.EXCHANGE_AND_REFUND]}</span>
        </div>
        <div className="flex flex-col gap-11 text-center text-gray-4">
          <span>{ORDERSTATUS.CONFIRM}</span>
          <span>{delivery[ORDERSTATUS.CONFIRM]}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderOverView;
