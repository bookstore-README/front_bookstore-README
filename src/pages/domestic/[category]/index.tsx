import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import EventSection from '@/components/container/eventSection/eventSection';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import { carouselMockData } from '@/pages/api/mock/carouselMock';
import { responsive } from '@/utils/checkResponsiveEnv';
import SubCategoryBookList from '@/components/container/categoryBookList/subCategoryBookList';

function CategoryPage() {
  return (
      <SidebarLayout >
        <Spacing height={[0, 0, 20]} />

        <EventSection adsSizeClassName='w-[525px] h-[483px] tablet:w-297 tablet:h-275 mobile:w-330 mobile:h-178' eventSizeClassName='w-[340px] h-[483px] tablet:w-194 tablet:h-275 mobile:w-330 mobile:h-90'/>
        <Spacing height={[60, 40, 40]} />

        <CategoryCarousel data={carouselMockData} responsive={responsive} />
        <Spacing height={[120, 80, 80]} />

        <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
          <h1 className="text-20 text-black">베스트셀러</h1>
          <div
            role="temp"
            className="h-[500px] w-[895px] bg-gray-1 mobile:w-[330px]
            tablet:w-[511px]"></div>
        </article>        
        <Spacing height={[120, 80, 80]} />

        <SubCategoryBookList />
      </SidebarLayout>
  );
}

export default CategoryPage;
