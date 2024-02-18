import HeartFillIcon from '@/public/icons/HeartFillIcon.svg';
import HeartEmptyIcon from '@/public/icons/HeartEmptyIcon.svg';
import Image from 'next/image';

interface LikeButtonProps {
  onClick: () => void;
  isLiked: boolean;
  width?: number;
  height?: number;
  disabled?: boolean;
}

function LikeButton({
  onClick,
  isLiked,
  width,
  height,
  disabled,
}: LikeButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      <Image
        src={isLiked ? HeartFillIcon : HeartEmptyIcon}
        alt="좋아요 이미지"
        width={width ?? 22}
        height={height ?? 20}
      />
    </button>
  );
}
export default LikeButton;
