import { useGetBook } from '@/api/book';
import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { BookData } from '@/types/api/book';

const INITIAL_PARAMS = {
  limit: '100',
  sort: 'BESTSELLER' as const,
  ascending: false,
};

function BestSellerPage() {
  const { data } = useGetBook({ endpoint: '1/main', params: INITIAL_PARAMS });
  const bookData: BookData[] = data?.data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={<Sidebar pageName="bestseller" />}
        main={<BookOverViewCardList bookData={bookData} title="베스트셀러" />}
      />
    </div>
  );
}

export default BestSellerPage;
