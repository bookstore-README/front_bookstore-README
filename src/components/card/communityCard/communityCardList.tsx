import { CommunityCardProps } from '@/types/communityCardType';
import CommunityCard from './communityCard';

interface CommunityCardListProps {
  communityData: CommunityCardProps[];
  kebab?: boolean;
}

function CommunityCardList({ communityData, kebab }: CommunityCardListProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2">
      {communityData.map((card) => (
        <CommunityCard
          key={card.id}
          profileImg={card.profileImg}
          userNickname={card.userNickname}
          createAt={card.createAt}
          bookCover={card.bookCover}
          bookTitle={card.bookTitle}
          review={card.review}
          kebab={kebab}
        />
      ))}
    </div>
  );
}
export default CommunityCardList;
