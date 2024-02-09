import CommunityCardList from '@/components/card/communityCard/communityCardList';
import { communityCards as communityData } from '@/pages/api/mock';
import MainLayout from '@/components/layout/mainLayout';

export default function MyCommunityPage() {
  // TODO: 커뮤니티 데이터 서버에서 받아온 뒤 mock 데이터 교환
  return (
    <MainLayout>
      <div className="mb-198 mt-20 flex flex-col">
        <CommunityCardList communityData={communityData} kebab />
      </div>
    </MainLayout>
  );
}
