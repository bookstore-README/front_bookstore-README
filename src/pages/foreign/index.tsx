/** 카테고리 페이지 > 외국 > 전체*/

import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import MainCategoryBookList from '@/components/container/categoryBookList/mainCategoryBookList';
import EventSection from '@/components/container/eventSection/eventSection';
import { responsive } from '@/utils/checkResponsiveEnv';
import { useCategoryCarouselParams } from '@/hooks/useInitialParams';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import AdImage from '@/public/images/AdImage.png';

export default function ForeignPage() {
  const INITIAL_PARAMS = useCategoryCarouselParams();
  const { data } = useGetBook({
    endpoint: `1/main`,
    params: {
      ...INITIAL_PARAMS,
    },
  });

  const { data: bestsellers } = useGetBook({
    endpoint: `1/main`,
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });
  const bestList: Array<BookData> = bestsellers ? bestsellers.data.books : [];
  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />

      <EventSection eventSize="category" adsImg={AdImage} />
      <Spacing height={[60, 40, 40]} />

      {data ? (
        <CategoryCarousel data={data?.data.books} responsive={responsive} />
      ) : null}
      <Spacing height={[120, 80, 80]} />
      <BestSellerSection page="category" bookList={bestList} />
      <Spacing height={[120, 80, 80]} />
      <MainCategoryBookList />
    </SidebarLayout>
  );
}
