/** 카테고리 페이지 > 국내 > 전체*/

import { useGetBook } from '@/api/book';
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import MainCategoryBookList from '@/components/container/categoryBookList/mainCategoryBookList';
import EventSection from '@/components/container/eventSection/eventSection';
import { useCategoryCarouselParams } from '@/hooks/useInitialParams';
import { responsive } from '@/utils/checkResponsiveEnv';

export default function DomesticPage() {
  const INITIAL_PARAMS = useCategoryCarouselParams();
  const { data } = useGetBook({
    endpoint: '0/main',
    params: {
      ...INITIAL_PARAMS,
    },
  });

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />

      <EventSection
        adsSizeClassName="w-[525px] h-[483px] tablet:w-297 tablet:h-275 mobile:w-330 mobile:h-178"
        eventSizeClassName="w-[340px] h-[483px] tablet:w-194 tablet:h-275 mobile:w-330 mobile:h-90"
      />
      <Spacing height={[60, 40, 40]} />
      {data ? (
        <CategoryCarousel data={data?.data.books} responsive={responsive} />
      ) : null}
      <Spacing height={[120, 80, 80]} />

      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <h1 className="text-20 text-black">베스트셀러</h1>
        <div
          role="temp"
          className="h-[500px] w-[895px] bg-gray-1 mobile:w-[330px]
            tablet:w-[511px]"></div>
      </article>
      <Spacing height={[120, 80, 80]} />

      <MainCategoryBookList />
    </SidebarLayout>
  );
}
