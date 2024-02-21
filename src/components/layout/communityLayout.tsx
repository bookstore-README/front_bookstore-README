import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import CommunityCardList from '@/components/card/communityCard/communityCardList';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import { getCommunity } from '@/api/community';
import AddCommunityButton from '../button/addcommunityButton';
import SkeletonCommunityCard from '../skeleton/communityCard/skeleton';

interface CommunityLayoutProps {
  isSelected: string;
  kebab?: boolean;
  memberId?: number;
}

function CommunityLayout({
  isSelected,
  kebab,
  memberId,
}: CommunityLayoutProps) {
  const [ref, isIntersecting] = useInfinite();
  const { data, hasNextPage, isRefetching } = useCustomInfiniteQuery({
    endpoint: `${memberId ? `${memberId}` : ''}`,
    queryKey: ['community', `${memberId}`],
    queryFunc: getCommunity,
    initialCursorId: 0,
    limit: 12,
    cursorName: 'cursorId',
    getNextPageParamsFunc: (lastPage) =>
      lastPage.cursorId === -1 ? undefined : lastPage.cursorId,
    refetchTrigger: isIntersecting,
  });
  
  return (
    <MainLayout>
      <div className="mb-198 flex flex-col">
        <PageTab
          origin="피드"
          originHref="/community"
          add="내 글 보기"
          addHref="/community/writeme"
          isSelected={isSelected}
        />
        {isRefetching ? (
          <div className="grid auto-rows-auto grid-cols-3 gap-20 mobile:grid-cols-1 tablet:grid-cols-2 mb-20">
            {Array.from({
              length: 6,
            }).map((_, index) => (
              <SkeletonCommunityCard key={index}/>
            ))}
          </div>
        ) : (
            //@ts-ignore
          <CommunityCardList communityData={data?.pages} kebab={kebab} />
        )}
      </div>
      <AddCommunityButton />
      <div
        className={`h-5 w-300 ${hasNextPage ? 'block' : 'hidden'}`}
        ref={ref}/>
    </MainLayout>
  );
}

export default CommunityLayout;
