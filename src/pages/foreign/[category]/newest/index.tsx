import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'NEWEST' });

function NewestPage() {
  const { categoryId } = useCheckCategoryUrl();

  const { data: book } = useGetBook({
    endpoint: `${categoryId}/sub`,
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = book?.data?.books ?? [];

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
