import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
interface EmojiButtonProps {
  emoji: StaticImport;
  count: number;
}

function EmojiButton({ emoji, count }: EmojiButtonProps) {
  const [isCount, setIsCount] = useState(count);
  const [isClick, setIsClick] = useState(false);

  const handleCountToggle = () => {
    setIsClick(!isClick);
    setIsCount((isClick ? isCount - 1 : isCount + 1));
  };

  return (
    <div
      className={`flex-center gap-6 border-solid border-[1px] rounded-[12px] px-10 py-5 w-45 h-25 tablet:h-24 hover:border-green ${
        isClick ? 'border-green' : 'border-[#dbdbdb]'
      }`}
      onClick={handleCountToggle}
    >
      <Image src={emoji} alt="이모지" className='w-12 tablet:h-12 mobile:h-12'/>
      <p className="text-12 font-normal">{isCount}</p>
    </div>
  );
}

export default EmojiButton;
