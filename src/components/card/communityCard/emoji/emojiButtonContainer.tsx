import EmojiButton from '@/components/card/communityCard/emoji/emojiButton';
import RedHeartEmojiImg from '@/public/images/RedHeartEmoji.png';
import HappyEmojiImg from '@/public/images/HappyEmoji.png';
import ExitedEmojiImg from '@/public/images/ExitedEmoji.png';
import AngryEmojiImg from '@/public/images/AngryEmoji.png';
import CryEmojiImg from '@/public/images/CryEmoji.png';

function EmojiButtonContainer({ count = 0 }) {
  return (
    <div className="flex items-center justify-start gap-8 px-20">
      <EmojiButton emoji={RedHeartEmojiImg} count={count} />
      <EmojiButton emoji={HappyEmojiImg} count={count} />
      <EmojiButton emoji={ExitedEmojiImg} count={count} />
      <EmojiButton emoji={AngryEmojiImg} count={count} />
      <EmojiButton emoji={CryEmojiImg} count={count} />
    </div>
  );
}

export default EmojiButtonContainer;
