import CommunityCardList from '@/components/card/communityCard/communityCardList';
import MainLayout from '@/components/layout/mainLayout';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import { useSession } from 'next-auth/react';
import { getCommunity } from '@/api/community';

export default function MyCommunityPage() {
  const { data: session } = useSession();
  const [ref, isIntersecting] = useInfinite();
  const { data, hasNextPage, isRefetching } = useCustomInfiniteQuery({
    endpoint: `${session?.memberId ? `${session?.memberId}` : ''}`,
    queryKey: ['community', `${session?.memberId}`],
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
      <div className="mb-198 mt-20 flex flex-col">
        {//@ts-ignore
          <CommunityCardList communityData={data?.pages} kebab={true} />}
      </div>
    </MainLayout>
  );
}
