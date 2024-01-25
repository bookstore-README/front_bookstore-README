import { useRef, useState } from 'react';
import useShowDropDown from '@/hooks/useShowDropDown';
import DropDownItem from './DropDownItem';
import OrderDate from '@/components/orderDate/OrderDate';
import Image from 'next/image';

function DropDown() {
  const [seletedItem, setSeltedItem] = useState('전체보기');
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const handleClick = () => setShowOptions(!showOptions);

  const menus = [
    '전체보기',
    '최근 1개월',
    '최근 3개월',
    '최근 6개월',
    '최근 1년',
  ];

  return (
    <div className="flex relative">
      <div ref={ref}>
        <div className="flex relative w-180">
          <button
            onClick={handleClick}
            className="flex justify-between flex-row items-center px-5 border-solid border-2
              border-gray-1 w-150 h-42 text-left">
            {seletedItem}
            <div>
              <Image
                src={showOptions ? 'icons/UpArrow.svg' : 'icons/DownArrow.svg'}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
        {showOptions && (
          <ul className="w-150 border-solid border-2 border-gray-1 absolute">
            {menus.map((menu) => {
              return (
                <DropDownItem
                  key={menu}
                  menu={menu}
                  setSeltedItem={setSeltedItem}
                  setIsClick={setShowOptions}
                />
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex-center">
        <OrderDate pastDate={seletedItem} setSeltedItem={setSeltedItem} />
      </div>
    </div>
  );
}

export default DropDown;
