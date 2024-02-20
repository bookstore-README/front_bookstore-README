import Link from 'next/link';
import RecommendationContent from '@/components/container/customSection/recommendationContent';

function NonSelectedCustomSection() {
  return (
    <div className="flex-center w-full flex-col bg-gray-1 mobile:h-205 tablet:h-324 pc:h-482">
      <RecommendationContent />
      <Link
        className="flex-center text-primary border-primary h-50 w-256 rounded-[5px] border bg-white
          text-14"
        href="/mypage/genre">
        선호 장르 선택하러 가기
      </Link>
    </div>
  );
}

export default NonSelectedCustomSection;
