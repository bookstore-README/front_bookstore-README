import Image from 'next/image'
import React from 'react'

type OrderCountProps = {
    orderDate: string, 
    orderCount: number
}


function OrderCount({orderDate, orderCount}:OrderCountProps) {  
  return (
    <div className="flex justify-between w-[1080px]">
       <div className="flex-center gap-x-24">
         <span className="text-[#505050] font-weight">{orderDate}</span>
         <div className="w-[1px] h-[12px] bg-[#DBDBDB]"></div>
         <span className="text-[#767676]">{orderCount}건</span>
       </div>          
        <div className="flex">
          <span>주문상세</span>
          <Image src="/icons/RightArrow.svg" alt="rightArrow" width={20} height={20} /> 
        </div>
    </div>
  )
}  


export default OrderCount