import {
  CommunityPagesProps,
  CommunityCardsProps,
} from '@/types/api/community';
import CommunityCard from './communityCard';

interface CommunityCardListProps {
  communityData: CommunityPagesProps[];
  kebab?: boolean;
  profile?: boolean;
}

function CommunityCardList({
  communityData,
  kebab,
  profile,
}: CommunityCardListProps) {
  return (
    <>
      {communityData && communityData[0].cards.length > 0 ? (
        communityData?.map((data, index) => {
          return (
            <div
              key={index}
              className="mb-20 grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2">
              {data?.cards.map((card: CommunityCardsProps, index) => {
                return (
                  <CommunityCard
                    key={index}
                    communityId={card.communityId}
                    profileImg={card?.writer?.profileImg}
                    userNickname={card?.writer.nickname}
                    createAt={card?.createDate.split('T')[0].replace(/-/g, '.')}
                    bookId={card?.bookInfo.bookId}
                    bookCover={card?.bookInfo.bookImgUrl}
                    bookTitle={card?.bookInfo.bookTitle}
                    review={card?.content}
                    emojiInfo={card?.emojiInfo}
                    writer={card.writer}
                    kebab={kebab}
                    profile={profile}
                  />
                );
              })}
            </div>
          );
        })
      ) : (
        <div className="flex-center pt-100 mobile:pt-60">
          작성한 커뮤니티글이 없어요!
        </div>
      )}
    </>
  );
}
export default CommunityCardList;
