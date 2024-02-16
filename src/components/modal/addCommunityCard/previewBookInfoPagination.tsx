import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import Pagination from '@/components/button/pagination';
//TODO: api 연결 후 수정해야함
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import index from '@/pages/bookdetail';
import { CurrentPageStateAtom } from '@/store/state';
import { useAtom } from 'jotai';
const bookOverviews = bookOverviewsMock.slice(0, 4);

function PreviewBookInfoPagination() {
  const [currentPageState] = useAtom(CurrentPageStateAtom);

  return (
    <>
      <div className="flex">
        {bookOverviews.map((bookOverview, index) => (
          <PreviewBookInfo
            size="sm"
            image={bookOverview.book.bookImgUrl}
            title={bookOverview.book.bookTitle}
            authorList={bookOverview.book.authors}
            alignCenter
            bookId={bookOverview.book.bookId}
          />
        ))}
      </div>
      <Pagination totalCount={bookOverviews.length} standard={4} />
    </>
  );
}

export default PreviewBookInfoPagination;
