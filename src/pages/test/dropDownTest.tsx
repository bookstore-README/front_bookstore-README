import DropDown from '@/components/dropDown/dropDown';
import React from 'react';

function dropDownTest() {
  const menus = [
    '전체보기',
    '최근 1개월',
    '최근 3개월',
    '최근 6개월',
    '최근 1년',
    '직접 입력',
  ];
  const person = {
    id: 1,
    name: 'yuna',
    isPurchased: false,
    firstPurchasedDate: '2012-10-10',
  };

  return (
    <div className="relative flex w-[1000px]">
        <DropDown
          menus={menus}
          person={person}
          orderDate={true}
        />
    </div>
  );
}

export default dropDownTest;
