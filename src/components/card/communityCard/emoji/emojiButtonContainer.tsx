import EmojiButton from '@/components/card/communityCard/emoji/emojiButton';
import { EMOJI_ICON } from '@/constants/communityEmoji';
import { CommunityEmojiInfo } from '@/types/api/community';

type EmojiType = keyof typeof EMOJI_ICON;
interface EmojiButtonContainerProps extends CommunityEmojiInfo {
  communityId: number;
}

function EmojiButtonContainer({ emojiId, emojis, communityId }: EmojiButtonContainerProps) {
  return (
    <div className="flex items-center justify-start gap-8 px-20">
      {emojis.map((emoji, index) => (
        <EmojiButton
          key={index}
          emoji={EMOJI_ICON[emoji.emojiType as EmojiType]}
          emojiType={emoji.emojiType}
          count={emoji.emojiNum}
          status={emoji.memberCheck}
          communityId={communityId}
        />
      ))}
    </div>
  );
}

export default EmojiButtonContainer;
