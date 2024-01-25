import React from 'react'


 function OrderOverView(props:any) {     
  const delivery = props.orderView
  return (
    <div className="w-[1080px] flex h-[144px] border-solid border-2 border-[#DBDBDB] px-[90px] py-[40px]">        
      <div className="flex justify-between w-[902px]  rounded-10px">
          <div className="flex flex-col text-center text-gray-4 font-normal"><span>배송준비중</span><span>{delivery.processing}</span></div>
          <div className="flex flex-col text-center text-gray-4 font-normal"><span>배송중</span><span>{delivery.shipping}</span></div>
          <div className="flex flex-col text-center text-gray-4 font-normal"><span>배송완료</span><span>{delivery.completed}</span></div>
          <div className="flex flex-col text-center text-gray-4 font-normal"><span>교환완료</span><span>{delivery.exchangeCompleted}</span></div>
          <div className="flex flex-col text-center text-gray-4 font-normal"><span>구매확정</span><span>{delivery.purchased}</span></div>
      </div>
    </div>
  )
}


export default OrderOverView