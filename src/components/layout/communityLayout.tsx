import CommunityCard from '@/components/card/communityCard/communityCard';
import MainLayout from '@/components/layout/mainLayout';
import PageTab from '@/components/header/pageTab';
import { CommunityCardProps } from '@/types/communityCardType';
import CommunityCardList from '../card/communityCard/communityCardList';

interface CommunityLayoutProps {
  communityData: CommunityCardProps[];
  isSelected: string;
  kebab?: boolean;
}

//TODO : api나오면 useInfiniteQuery에서 data받아서 infinityscroll구현
function CommunityLayout({
  communityData,
  isSelected,
  kebab,
}: CommunityLayoutProps) {
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
        <CommunityCardList communityData={communityData} kebab={kebab} />
        {/* <div className='h-100 w-300 border border-1 border-red' ref={ref}/> */}
      </div>
    </MainLayout>
  );
}

export default CommunityLayout;
