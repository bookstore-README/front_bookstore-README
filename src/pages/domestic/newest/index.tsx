import { useGetBook } from '@/api/book';
import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import { BookData } from '@/types/api/book';

// 임시로 전체 데이터 넣어놓음
const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'NEWEST' });

function NewestPage() {
  const { data } = useGetBook({ endpoint: '0/main', params: INITIAL_PARAMS });
  const bookData: BookData[] = data?.data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={<Sidebar pageName="newest" />}
        main={<BookOverViewCardList bookData={bookData} title="신간 도서" />}
      />
    </div>
  );
}

export default NewestPage;
