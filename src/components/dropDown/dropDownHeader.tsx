import Image from "next/image";
import UpArrowIcon from '@/public/icons/UpArrow.svg';
import DownArrowIcon from '@/public/icons/DownArrow.svg';

interface DropDownHeaderProps{
  handleDropDownClick: () => void;
  showOptions: boolean;
  selectedItem: string;
}

function DropDownHeader({handleDropDownClick, showOptions, selectedItem} : DropDownHeaderProps) {
  return (
    <div>
      <button
        onClick={handleDropDownClick}
        className={`flex h-42 w-full items-center justify-between border-2 border-solid border-gray-1 text-left
              ${showOptions ? 'rounded-t-[5px]' : 'rounded-[5px]'}`}>
        <span className="pl-16 text-14">{selectedItem}</span>
        <div className="pr-12">
          <Image
            src={showOptions ? UpArrowIcon : DownArrowIcon}
            alt="드롭다운 토글"
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  );
}

export default DropDownHeader