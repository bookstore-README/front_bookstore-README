import { useRef, useState } from 'react';
import useOutSideClick from '@/hooks/useOutsideClick';
import Image from 'next/image';
import DropDownItem from './DropDownItem';
import OrderDate from '@/components/orderDate/OrderDate';

function DropDown() {
  const [seletedItem, setSeltedItem] = useState('전체보기');
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => setIsClick(!isClick);
  const ref = useRef(null);

  useOutSideClick(ref, () => setIsClick(false));

  return (
    <div className="flex relative">
      <div ref={ref}>
        <div className="flex relative w-[10rem]">
          <button
            onClick={handleClick}
            className="flex justify-between flex-row items-center px-5 border-solid border-2 border-[#DBDBDB] w-[150px] h-[42px] text-left">
            {seletedItem}
            <div>            
            <Image
              src={isClick ? 'icons/UpArrow.svg' : 'icons/DownArrow.svg'}
              alt=""
              width={20}
              height={20}
            />
          </div>
          </button>        
        </div>
        {isClick && (
          <ul className="w-[150px] border-solid border-2 border-[#DBDBDB] absolute">
            <DropDownItem
              menu="전체보기"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
            <DropDownItem
              menu="최근 1개월"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
            <DropDownItem
              menu="최근 3개월"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
            <DropDownItem
              menu="최근 6개월"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
            <DropDownItem
              menu="최근 1년"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
            <DropDownItem
              menu="직접 입력"
              setSeltedItem={setSeltedItem}
              setIsClick={setIsClick}
            />
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
