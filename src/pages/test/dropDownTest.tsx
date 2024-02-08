import OrderDate from '@/components/container/orderDate/orderDate'
import DropDown from '@/components/dropDown/dropDown'
import React, { useState } from 'react'

function dropDownTest() {  
  const [selectedItem, setSelectedItem] = useState('전체보기');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onSelectedItem = (menu: string) => { setSelectedItem(menu) }
 
  const menus = [
    "전체보기",
    "최근 1개월", 
    "최근 3개월", 
    "최근 6개월", 
    "최근 1년", 
    "직접 입력"
  ]
  const person = {
    id:1,
    name: "yuna", 
    isPurchased: false, 
    firstPurchasedDate: new Date("2012-10-10")
  }    

  useEffect(() => {
    const postOrderData = async() => {
        const res = await postdddd(person.id, startDate, endDate)
     }
   },[userid, selected])
  return (
    <div className="flex relative">
      <div className="w-[1000px]">
        <DropDown menus={menus} selectedItem={selectedItem} onSelectedItem={onSelectedItem} />       
      </div>
      <div className="flex-center">
        {person && (
          <OrderDate
            person={person}
            pastDate={selectedItem}
            // setSelectedItem={selectedItem}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
       
       
        />
        )}   
        </div>
    </div>
  )
}

export default dropDownTest
