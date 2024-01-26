// import BookReviewCard from '@/components/bookReviewCard/bookReviewCard';
import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <DropDown />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        ranking={1}
        authorList={['이승연', '팡이', '삐용이', '이름']}
        size="md"
      />
      {/* <BookReviewCard /> */}
    </div>
  );
}

export default TestPage;
