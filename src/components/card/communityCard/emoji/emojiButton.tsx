import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';
import useUpdateCommunityEmoji from '@/hooks/useUpdateEmoji';

interface EmojiButtonProps {
  emoji: StaticImport;
  emojiType: string;
  count: number;
  status: boolean;
  communityId: number;
}

function EmojiButton({
  emoji,
  emojiType,
  count,
  status,
  communityId,
}: EmojiButtonProps) {
  
  const [isCount, setIsCount] = useState(count);
  const [isClick, setIsClick] = useState(status);
  const { updateEmoji, isEmojiPending } = useUpdateCommunityEmoji({
    emojiType,
    status,
    communityId,
    onChangeEmojiCount: () => {
      if (isClick) {
        setIsCount((prev) => prev - 1);
      } else {
        setIsCount((prev) => prev + 1);
      }
    },
    onChangeEmojiClick : (prev) => setIsClick(prev)
  });

  const handleCountToggle = () => {
    updateEmoji();
  }

  return (
    <button
      className={`flex-center h-25 w-45 gap-6 rounded-[12px] border-[1px] border-solid px-10 py-5 hover:border-primary tablet:h-24 ${
        isClick ? 'border-primary' : 'border-[#dbdbdb]'
      }`}
      onClick={handleCountToggle}
      disabled={isEmojiPending}>
      <Image
        src={emoji}
        alt="이모지"
        className="w-12 mobile:h-12 tablet:h-12"
      />
      <p className="text-12 font-normal">{isCount}</p>
    </button>
  );
}

export default EmojiButton;
